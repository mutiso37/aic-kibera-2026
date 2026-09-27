import { useEffect, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { submitChurchForm } from "../utils/formSubmission";

const choirSlides = [
    {
        image: "/ambassadors-choir.png",
        label: "CHRIST AMBASSADORS CHOIR",
        title: "Let Your Worship Become a Testimony",
        message:
            "Use your gift to glorify God, encourage His people and become a blessing to someone through worship.",
    },
    {
        image: "/kiswahili-choir.png",
        label: "KISWAHILI CHOIR",
        title: "Lift Your Voice in Praise",
        message:
            "There is power in united worship. Come with a grateful heart and let every song point people to Christ.",
    },
];

const ministries = [
    "Kiswahili Choir",
    "Christ Ambassadors Choir",
    "Music Ministry",
    "Praise & Worship",
    "Women Ministry",
    "Men Ministry",
    "Youth Ministry",
    "Children Ministry",
    "Media Ministry",
    "Projection Ministry",
    "Evangelism Ministry",
    "Cadets",
    "Battalion",
];

export default function Programme() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [ministry, setMinistry] = useState("");
    const [message, setMessage] = useState("");

    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState("");

    const [cameraOpen, setCameraOpen] = useState(false);
    const [cameraError, setCameraError] = useState("");

    const [formError, setFormError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((previous) =>
                previous === choirSlides.length - 1
                    ? 0
                    : previous + 1
            );
        }, 6500);

        return () => clearInterval(interval);
    }, []);

    const currentSlideData = choirSlides[currentSlide];

    const processPhoto = (file) => {
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setFormError("Please select a valid image file.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setFormError("The photo must be smaller than 5 MB.");
            return;
        }

        setPhoto(file);
        setFormError("");

        const reader = new FileReader();

        reader.onload = () => {
            setPhotoPreview(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files?.[0];

        if (file) {
            processPhoto(file);
        }
    };

    const openCamera = async () => {
        setCameraError("");

        if (
            !navigator.mediaDevices ||
            !navigator.mediaDevices.getUserMedia
        ) {
            setCameraError(
                "Camera access is not supported by this browser. Please upload a photo from your files."
            );
            return;
        }

        try {
            const stream =
                await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: "user",
                    },
                    audio: false,
                });

            streamRef.current = stream;
            setCameraOpen(true);

            setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            }, 100);
        } catch (error) {
            console.error(error);

            setCameraError(
                "Camera access was blocked. Please allow camera permission or upload a photo from your files."
            );
        }
    };

    const closeCamera = () => {
        if (streamRef.current) {
            streamRef.current
                .getTracks()
                .forEach((track) => track.stop());

            streamRef.current = null;
        }

        setCameraOpen(false);
    };

    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (!video || !canvas) return;

        const width = video.videoWidth || 640;
        const height = video.videoHeight || 480;

        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext("2d");

        context.drawImage(
            video,
            0,
            0,
            width,
            height
        );

        canvas.toBlob(
            (blob) => {
                if (!blob) return;

                const file = new File(
                    [blob],
                    `aic-kibera-photo-${Date.now()}.jpg`,
                    {
                        type: "image/jpeg",
                    }
                );

                processPhoto(file);
                closeCamera();
            },
            "image/jpeg",
            0.9
        );
    };

    const generatePDF = async () => {
        const pdf = new jsPDF();

        const pageWidth = pdf.internal.pageSize.getWidth();

        pdf.setFillColor(143, 41, 41);
        pdf.rect(0, 0, pageWidth, 24, "F");

        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(18);
        pdf.setFont("helvetica", "bold");
        pdf.text("A.I.C. KIBERA", 20, 15);

        pdf.setFontSize(9);
        pdf.setFont("helvetica", "normal");
        pdf.text(
            "Ministry Interest Application",
            pageWidth - 20,
            15,
            { align: "right" }
        );

        pdf.setTextColor(40, 40, 40);

        pdf.setFontSize(15);
        pdf.setFont("helvetica", "bold");
        pdf.text("Applicant Information", 20, 42);

        pdf.setFontSize(11);
        pdf.setFont("helvetica", "normal");

        const information = [
            ["Full Name", fullName],
            ["Phone Number", phone],
            ["Email Address", email || "Not provided"],
            ["Ministry of Interest", ministry],
        ];

        let y = 55;

        information.forEach(([label, value]) => {
            pdf.setFont("helvetica", "bold");
            pdf.text(`${label}:`, 20, y);

            pdf.setFont("helvetica", "normal");
            pdf.text(String(value), 70, y);

            y += 9;
        });

        if (photoPreview) {
            pdf.setFont("helvetica", "bold");
            pdf.text("Applicant Photo", pageWidth - 80, 42);

            const imageType =
                photo?.type === "image/png"
                    ? "PNG"
                    : "JPEG";

            pdf.addImage(
                photoPreview,
                imageType,
                pageWidth - 80,
                48,
                55,
                65
            );
        }

        y = 105;

        pdf.setFont("helvetica", "bold");
        pdf.text("Message", 20, y);

        pdf.setFont("helvetica", "normal");

        const messageLines = pdf.splitTextToSize(
            message ||
                "No additional message provided.",
            pageWidth - 40
        );

        pdf.text(messageLines, 20, y + 10);

        const footerY =
            pdf.internal.pageSize.getHeight() - 25;

        pdf.setDrawColor(220, 220, 220);
        pdf.line(20, footerY - 8, pageWidth - 20, footerY - 8);

        pdf.setFontSize(9);
        pdf.setTextColor(100, 100, 100);

        pdf.text(
            "Rev. Fredrick Kiema / Church Administration",
            20,
            footerY
        );

        pdf.text(
            "0725436394 | info@aickibera.org",
            pageWidth - 20,
            footerY,
            { align: "right" }
        );

        return pdf.output("blob");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setFormError("");
        setSuccessMessage("");

        if (!fullName || !phone || !ministry || !photo) {
            setFormError(
                "Please complete your name, phone number, ministry and photo before submitting."
            );
            return;
        }

        try {
            setSubmitting(true);

            const pdfBlob = await generatePDF();

            const pdfFile = new File(
                [pdfBlob],
                `AIC-Kibera-Ministry-Application-${fullName.replace(
                    /\s+/g,
                    "-"
                )}.pdf`,
                {
                    type: "application/pdf",
                }
            );

            const result = await submitChurchForm({
                formType:
                    "Ministry Interest Application",

                data: {
                    "Full Name": fullName,
                    "Phone Number": phone,
                    "Email Address":
                        email || "Not provided",
                    "Ministry of Interest": ministry,
                    Message:
                        message ||
                        "No additional message provided.",
                },

                files: [
                    {
                        fieldName: "Applicant Photo",
                        file: photo,
                    },
                    {
                        fieldName:
                            "Completed Ministry Application PDF",
                        file: pdfFile,
                    },
                ],
            });

            if (!result.success) {
                throw new Error(result.message);
            }

            setSuccessMessage(
                "Thank you. Your ministry application has been successfully sent to A.I.C. Kibera Church Administration."
            );

            setFullName("");
            setPhone("");
            setEmail("");
            setMinistry("");
            setMessage("");
            setPhoto(null);
            setPhotoPreview("");

            window.scrollTo({
                top:
                    document.querySelector(
                        ".ministry-success"
                    )?.offsetTop - 100 || 0,
                behavior: "smooth",
            });
        } catch (error) {
            console.error(error);

            setFormError(
                error.message ||
                    "Something went wrong while submitting your application."
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />

            <main className="programme-page">

                {/* ==================================================
                    HERO
                ================================================== */}

                <section className="programme-hero">
                    <div className="programme-hero-overlay"></div>

                    <div className="programme-container">
                        <div className="programme-hero-content">

                            <span className="programme-eyebrow">
                                A.I.C. KIBERA
                            </span>

                            <h1>
                                Sunday & Weekly Programme
                            </h1>

                            <p>
                                Worship with us, grow in faith,
                                serve with purpose and experience
                                Christian fellowship throughout
                                the week.
                            </p>

                            <div className="programme-hero-actions">
                                <a
                                    href="#sunday-services"
                                    className="programme-primary-btn"
                                >
                                    <i className="fa-solid fa-calendar-days"></i>
                                    View Programme
                                </a>

                                <a
                                    href="#join-ministry"
                                    className="programme-secondary-btn hero-secondary"
                                >
                                    <i className="fa-solid fa-hands-helping"></i>
                                    Join a Ministry
                                </a>
                            </div>

                        </div>
                    </div>
                </section>


                {/* ==================================================
                    CHOIR IMAGE SLIDER
                ================================================== */}

                <section className="programme-choir-slider">

                    <div className="choir-slider-wrapper">

                        {choirSlides.map(
                            (slide, index) => (
                                <div
                                    key={slide.image}
                                    className={`choir-slide ${
                                        index ===
                                        currentSlide
                                            ? "active"
                                            : ""
                                    }`}
                                >

                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                    />

                                    <div className="choir-slide-overlay"></div>

                                    <div className="choir-slide-content">

                                        <span className="choir-slide-label">
                                            {slide.label}
                                        </span>

                                        <h2>
                                            {slide.title}
                                        </h2>

                                        <p>
                                            {slide.message}
                                        </p>

                                        <div className="choir-slide-line"></div>

                                        <span className="choir-scripture">
                                            "Sing to the Lord with
                                            grateful praise."
                                        </span>

                                    </div>

                                </div>
                            )
                        )}

                        <div className="choir-slider-controls">

                            <button
                                type="button"
                                onClick={() =>
                                    setCurrentSlide(
                                        currentSlide === 0
                                            ? choirSlides.length -
                                              1
                                            : currentSlide - 1
                                    )
                                }
                                aria-label="Previous slide"
                            >
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>

                            <div className="choir-slider-dots">

                                {choirSlides.map(
                                    (slide, index) => (
                                        <button
                                            key={slide.label}
                                            type="button"
                                            className={
                                                index ===
                                                currentSlide
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={() =>
                                                setCurrentSlide(
                                                    index
                                                )
                                            }
                                            aria-label={`Show ${slide.label}`}
                                        />
                                    )
                                )}

                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setCurrentSlide(
                                        currentSlide ===
                                            choirSlides.length -
                                                1
                                            ? 0
                                            : currentSlide + 1
                                    )
                                }
                                aria-label="Next slide"
                            >
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    INTRO
                ================================================== */}

                <section className="programme-intro">
                    <div className="programme-container">

                        <div className="programme-intro-grid">

                            <div>
                                <span className="section-label">
                                    WORSHIP • FELLOWSHIP • SERVICE
                                </span>

                                <h2>
                                    There Is a Place for You
                                </h2>
                            </div>

                            <div>
                                <p>
                                    At A.I.C. Kibera, our weekly
                                    programme provides opportunities
                                    for worship, prayer, discipleship,
                                    fellowship and service.
                                </p>

                                <p>
                                    Whether you are visiting for the
                                    first time or are already part of
                                    our church family, we welcome you
                                    to participate.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>


                {/* ==================================================
                    SUNDAY SERVICES
                ================================================== */}

                <section
                    className="programme-services"
                    id="sunday-services"
                >
                    <div className="programme-container">

                        <div className="programme-section-heading">

                            <span className="section-label">
                                SUNDAY WORSHIP
                            </span>

                            <h2>
                                Join Us Every Sunday
                            </h2>

                            <p>
                                Come together as a church family
                                to worship, hear God's Word and
                                fellowship together.
                            </p>

                        </div>

                        <div className="programme-service-grid">

                            <div className="programme-service-card">

                                <div className="programme-service-icon">
                                    <i className="fa-solid fa-globe"></i>
                                </div>

                                <span className="service-number">
                                    01
                                </span>

                                <h3>
                                    English Service
                                </h3>

                                <p>
                                    A worship service centered on
                                    biblical teaching, prayer,
                                    praise and fellowship.
                                </p>

                                <div className="programme-service-time">
                                    <i className="fa-regular fa-clock"></i>
                                    <span>
                                        9:00 AM – 11:00 AM
                                    </span>
                                </div>

                            </div>


                            <div className="programme-service-card">

                                <div className="programme-service-icon">
                                    <i className="fa-solid fa-language"></i>
                                </div>

                                <span className="service-number">
                                    02
                                </span>

                                <h3>
                                    Kiswahili Service
                                </h3>

                                <p>
                                    Join us for worship, teaching,
                                    prayer and fellowship in
                                    Kiswahili.
                                </p>

                                <div className="programme-service-time">
                                    <i className="fa-regular fa-clock"></i>
                                    <span>
                                        11:00 AM – 1:00 PM
                                    </span>
                                </div>

                            </div>


                            <div className="programme-service-card">

                                <div className="programme-service-icon">
                                    <i className="fa-solid fa-people-group"></i>
                                </div>

                                <span className="service-number">
                                    03
                                </span>

                                <h3>
                                    Family Service
                                </h3>

                                <p>
                                    A special time for families
                                    and the entire church community
                                    to worship together.
                                </p>

                                <div className="programme-service-time">
                                    <i className="fa-regular fa-clock"></i>
                                    <span>
                                        10:00 AM – 1:00 PM
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                {/* ==================================================
                    WEEKLY PROGRAMME
                ================================================== */}

                <section className="programme-weekly">

                    <div className="programme-container">

                        <div className="programme-section-heading">

                            <span className="section-label">
                                WEEKLY SCHEDULE
                            </span>

                            <h2>
                                Our Weekly Programme
                            </h2>

                            <p>
                                Find a place to worship, serve,
                                learn and fellowship throughout
                                the week.
                            </p>

                        </div>

                        <div className="weekly-programme-grid">

                            <WeeklyCard
                                day="Tuesday"
                                title="Christ Ambassadors Choir Practice"
                                description="Choir members gather for preparation, practice and fellowship."
                                icon="fa-music"
                            />

                            <WeeklyCard
                                day="Wednesday"
                                title="Kiswahili Choir Practice"
                                description="Preparation for worship and ministry through song."
                                icon="fa-music"
                            />

                            <WeeklyCard
                                day="Wednesday"
                                title="Pastors' Office Day"
                                description="The pastoral office is available for church administration and ministry matters."
                                time="8:00 AM – 4:00 PM"
                                icon="fa-user-tie"
                            />

                            <WeeklyCard
                                day="Thursday"
                                title="Prayer Service"
                                description="A dedicated time of prayer and seeking God together."
                                time="From 5:00 PM"
                                icon="fa-hands-praying"
                            />

                            <WeeklyCard
                                day="Thursday"
                                title="Pastors' Office Day"
                                description="Pastoral and church administration services."
                                time="8:00 AM – 4:00 PM"
                                icon="fa-user-tie"
                            />

                            <WeeklyCard
                                day="Thursday"
                                title="Praise & Worship Practice"
                                description="Worship team preparation and musical fellowship."
                                time="From 5:00 PM"
                                icon="fa-microphone"
                            />

                            <WeeklyCard
                                day="Saturday"
                                title="All Choirs Practice"
                                description="Kiswahili Choir and Christ Ambassadors Choir practice together."
                                time="From 5:00 PM"
                                icon="fa-music"
                            />

                            <WeeklyCard
                                day="Saturday"
                                title="Praise & Worship Practice"
                                description="Preparation for Sunday worship and ministry."
                                time="From 5:00 PM"
                                icon="fa-microphone-lines"
                            />

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    THIRD SUNDAY
                ================================================== */}

                <section className="programme-third-sunday">

                    <div className="programme-container">

                        <div className="third-sunday-card">

                            <div className="third-sunday-icon">
                                <i className="fa-solid fa-church"></i>
                            </div>

                            <div className="third-sunday-content">

                                <span>
                                    EVERY THIRD SUNDAY
                                </span>

                                <h2>
                                    A Sunday of Unity & Fellowship
                                </h2>

                                <p>
                                    Holy Communion and birthday
                                    celebrations are observed
                                    as part of our fellowship
                                    and unity as one church family.
                                </p>

                            </div>

                            <div className="third-sunday-items">

                                <div>
                                    <i className="fa-solid fa-wine-glass"></i>
                                    <span>
                                        Holy Communion
                                    </span>
                                </div>

                                <div>
                                    <i className="fa-solid fa-cake-candles"></i>
                                    <span>
                                        Birthday Celebrations
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    JOIN MINISTRY
                ================================================== */}

                <section
                    className="programme-ministry-section"
                    id="join-ministry"
                >

                    <div className="programme-container">

                        <div className="programme-section-heading">

                            <span className="section-label">
                                SERVE WITH US
                            </span>

                            <h2>
                                Join a Ministry
                            </h2>

                            <p>
                                God has given every believer gifts
                                and abilities. Find a place where
                                you can serve and make a difference.
                            </p>

                        </div>


                        <div className="ministry-form-wrapper">

                            <div className="ministry-form-introduction">

                                <div className="form-intro-icon">
                                    <i className="fa-solid fa-hands-holding-child"></i>
                                </div>

                                <h3>
                                    Ministry Interest Form
                                </h3>

                                <p>
                                    Complete the form below and
                                    the church administration will
                                    receive your application.
                                </p>

                                <div className="form-info-list">

                                    <div>
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>
                                            Choose your preferred ministry
                                        </span>
                                    </div>

                                    <div>
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>
                                            Upload or capture your photo
                                        </span>
                                    </div>

                                    <div>
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>
                                            Your application is prepared as a PDF
                                        </span>
                                    </div>

                                    <div>
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>
                                            Sent to Church Administration
                                        </span>
                                    </div>

                                </div>

                            </div>


                            <form
                                className="ministry-interest-form"
                                onSubmit={handleSubmit}
                            >

                                <div className="form-grid">

                                    <div className="form-field">

                                        <label htmlFor="fullName">
                                            Full Name
                                            <span>*</span>
                                        </label>

                                        <div className="input-icon">

                                            <i className="fa-solid fa-user"></i>

                                            <input
                                                id="fullName"
                                                type="text"
                                                value={fullName}
                                                onChange={(e) =>
                                                    setFullName(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Enter your full name"
                                                required
                                            />

                                        </div>

                                    </div>


                                    <div className="form-field">

                                        <label htmlFor="phone">
                                            Phone Number
                                            <span>*</span>
                                        </label>

                                        <div className="input-icon">

                                            <i className="fa-solid fa-phone"></i>

                                            <input
                                                id="phone"
                                                type="tel"
                                                value={phone}
                                                onChange={(e) =>
                                                    setPhone(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Enter your phone number"
                                                required
                                            />

                                        </div>

                                    </div>


                                    <div className="form-field">

                                        <label htmlFor="email">
                                            Email Address
                                        </label>

                                        <div className="input-icon">

                                            <i className="fa-solid fa-envelope"></i>

                                            <input
                                                id="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Enter your email"
                                            />

                                        </div>

                                    </div>


                                    <div className="form-field">

                                        <label htmlFor="ministry">
                                            Ministry
                                            <span>*</span>
                                        </label>

                                        <div className="input-icon">

                                            <i className="fa-solid fa-church"></i>

                                            <select
                                                id="ministry"
                                                value={ministry}
                                                onChange={(e) =>
                                                    setMinistry(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value="">
                                                    Select a ministry
                                                </option>

                                                {ministries.map(
                                                    (item) => (
                                                        <option
                                                            key={item}
                                                            value={item}
                                                        >
                                                            {item}
                                                        </option>
                                                    )
                                                )}
                                            </select>

                                        </div>

                                    </div>

                                </div>


                                {/* PHOTO */}

                                <div className="photo-upload-section">

                                    <div className="photo-upload-heading">

                                        <div>
                                            <h3>
                                                Applicant Photo
                                            </h3>

                                            <p>
                                                Upload a photo from your
                                                computer or capture one
                                                using your camera.
                                            </p>
                                        </div>

                                        <span>
                                            Required
                                        </span>

                                    </div>


                                    <div className="photo-upload-layout">

                                        <div className="photo-preview-box">

                                            {photoPreview ? (
                                                <img
                                                    src={photoPreview}
                                                    alt="Applicant preview"
                                                />
                                            ) : (
                                                <div className="photo-placeholder">

                                                    <i className="fa-solid fa-user"></i>

                                                    <span>
                                                        No photo selected
                                                    </span>

                                                </div>
                                            )}

                                        </div>


                                        <div className="photo-actions">

                                            <label className="photo-action">

                                                <i className="fa-solid fa-folder-open"></i>

                                                <span>
                                                    Upload From Files
                                                </span>

                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={
                                                        handleFileUpload
                                                    }
                                                    hidden
                                                />

                                            </label>


                                            <button
                                                type="button"
                                                className="photo-action camera-action"
                                                onClick={openCamera}
                                            >
                                                <i className="fa-solid fa-camera"></i>

                                                <span>
                                                    Scan / Take Photo
                                                </span>
                                            </button>


                                            {photo && (
                                                <button
                                                    type="button"
                                                    className="remove-photo"
                                                    onClick={() => {
                                                        setPhoto(
                                                            null
                                                        );
                                                        setPhotoPreview(
                                                            ""
                                                        );
                                                    }}
                                                >
                                                    <i className="fa-solid fa-trash"></i>
                                                    Remove Photo
                                                </button>
                                            )}

                                        </div>

                                    </div>

                                </div>


                                <div className="form-field full-width">

                                    <label htmlFor="message">
                                        Message
                                    </label>

                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Tell us briefly why you would like to serve in this ministry..."
                                        rows="5"
                                    ></textarea>

                                </div>


                                {formError && (
                                    <div className="programme-form-error">
                                        <i className="fa-solid fa-circle-exclamation"></i>
                                        <span>
                                            {formError}
                                        </span>
                                    </div>
                                )}


                                {successMessage && (
                                    <div className="ministry-success">
                                        <i className="fa-solid fa-circle-check"></i>

                                        <div>
                                            <strong>
                                                Application Sent Successfully
                                            </strong>

                                            <p>
                                                {successMessage}
                                            </p>
                                        </div>
                                    </div>
                                )}


                                <div className="submission-notice">

                                    <i className="fa-solid fa-shield-halved"></i>

                                    <p>
                                        Your application, photo and
                                        completed PDF will be sent to
                                        A.I.C. Kibera Church Administration.
                                    </p>

                                </div>


                                <button
                                    type="submit"
                                    className="programme-submit-btn"
                                    disabled={submitting}
                                >

                                    {submitting ? (
                                        <>
                                            <i className="fa-solid fa-spinner fa-spin"></i>
                                            Sending Application...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fa-solid fa-paper-plane"></i>
                                            Submit Ministry Application
                                        </>
                                    )}

                                </button>

                            </form>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    PASTORS OFFICE
                ================================================== */}

                <section className="programme-office">

                    <div className="programme-container">

                        <div className="office-card">

                            <div className="office-icon">
                                <i className="fa-solid fa-user-tie"></i>
                            </div>

                            <div className="office-content">

                                <span>
                                    PASTORAL OFFICE
                                </span>

                                <h2>
                                    Meet With the Pastoral Team
                                </h2>

                                <p>
                                    Pastors' office days are
                                    Wednesday and Thursday from
                                    8:00 AM to 4:00 PM.
                                </p>

                            </div>

                            <a
                                href="tel:0725436394"
                                className="office-button"
                            >
                                <i className="fa-solid fa-phone"></i>
                                0725 436 394
                            </a>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    CTA
                ================================================== */}

                <section className="programme-cta">

                    <div className="programme-container">

                        <div className="programme-cta-content">

                            <span>
                                YOU ARE WELCOME
                            </span>

                            <h2>
                                Come Worship, Grow & Serve With Us
                            </h2>

                            <p>
                                We look forward to welcoming you
                                to A.I.C. Kibera.
                            </p>

                            <div className="programme-cta-actions">

                                <a
                                    href="/contact"
                                    className="programme-primary-btn"
                                >
                                    Contact Us
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>

                                <a
                                    href="/register"
                                    className="programme-secondary-btn"
                                >
                                    Membership Registration
                                </a>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <WhatsAppFloat />
            <Footer />


            {/* ======================================================
                CAMERA MODAL
            ====================================================== */}

            {cameraOpen && (
                <div className="camera-modal">

                    <div className="camera-box">

                        <div className="camera-header">

                            <div>
                                <span>
                                    A.I.C. KIBERA
                                </span>

                                <h3>
                                    Capture Your Photo
                                </h3>
                            </div>

                            <button
                                type="button"
                                onClick={closeCamera}
                                aria-label="Close camera"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>

                        </div>


                        <div className="camera-preview">

                            <video
                                ref={videoRef}
                                autoPlay
                                playsInline
                            ></video>

                        </div>


                        {cameraError && (
                            <div className="camera-error">
                                {cameraError}
                            </div>
                        )}


                        <div className="camera-actions">

                            <button
                                type="button"
                                className="programme-secondary-btn"
                                onClick={closeCamera}
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                className="programme-primary-btn"
                                onClick={capturePhoto}
                            >
                                <i className="fa-solid fa-camera"></i>
                                Capture Photo
                            </button>

                        </div>

                    </div>

                </div>
            )}

            <canvas
                ref={canvasRef}
                style={{ display: "none" }}
            />

        </>
    );
}


/* ==========================================================
   WEEKLY PROGRAMME CARD
   ========================================================== */

function WeeklyCard({
    day,
    title,
    description,
    time,
    icon,
}) {
    return (
        <article className="weekly-programme-card">

            <div className="weekly-programme-icon">
                <i className={`fa-solid ${icon}`}></i>
            </div>

            <div className="weekly-programme-content">

                <span className="weekly-programme-day">
                    {day}
                </span>

                <h3>
                    {title}
                </h3>

                <p>
                    {description}
                </p>

                {time && (
                    <span className="weekly-programme-time">
                        <i className="fa-regular fa-clock"></i>
                        {time}
                    </span>
                )}

            </div>

        </article>
    );
}