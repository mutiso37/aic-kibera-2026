import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Register() {
  const [cameraOpen, setCameraOpen] = useState(false);
  const [snapshot, setSnapshot] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
useEffect(() => {
    return () => {
        if (streamRef.current) {
            streamRef.current
                .getTracks()
                .forEach((track) => track.stop());

            streamRef.current = null;
        }
    };
}, []);

const startCamera = async () => {
    if (
        !navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia
    ) {
        alert(
            'Camera access is not supported by this browser. Please upload a photo instead.'
        );
        return;
    }

    try {
        const stream =
            await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'user',
                },
                audio: false,
            });

        streamRef.current = stream;
        setCameraOpen(true);

        setTimeout(() => {
            const videoElement = videoRef.current;

            if (videoElement) {
                videoElement.srcObject = stream;
                videoElement.play().catch(() => {});
            }
        }, 100);
    } catch (error) {
        console.error('Camera error:', error);

        alert(
            'Camera access denied or unavailable. Please allow camera permission or upload a photo from your files.'
        );
    }
};

const stopCamera = () => {
    if (streamRef.current) {
        streamRef.current
            .getTracks()
            .forEach((track) => track.stop());

        streamRef.current = null;
    }

    const videoElement = videoRef.current;

    if (videoElement) {
        videoElement.srcObject = null;
    }

    setCameraOpen(false);
};

const captureSnapshot = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) {
        return;
    }

    const width = video.videoWidth || 640;
    const height = video.videoHeight || 480;

    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');

    if (!context) {
        alert('Unable to capture the photo. Please try again.');
        return;
    }

    context.drawImage(
        video,
        0,
        0,
        width,
        height
    );

    const dataUrl = canvas.toDataURL('image/png');

    setSnapshot(dataUrl);

    stopCamera();
};

const handleFileUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
        return;
    }

    if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.');
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        alert('Please select an image smaller than 5 MB.');
        return;
    }

    const reader = new FileReader();

    reader.onload = () => {
        setSnapshot(reader.result);
    };

    reader.readAsDataURL(file);
};

const handleSubmit = (event) => {
    event.preventDefault();

    alert(
        'Membership registration form is ready. Connect the form submission service to send this information to Church Administration.'
    );
};

return (
    <div>
        <Navbar />

        <section className="py-5">
            <div
                className="container"
                style={{ maxWidth: '700px' }}
            >
                <h2>
                    New Membership Registration
                </h2>

                <p>
                    Fill out the form below to officially
                    join the A.I.C. Kibera family. If you do
                    not have a photo stored on your phone,
                    use our built-in camera snapshot option.
                </p>

                <form
                    className="mt-4"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="fullName">
                            Full Name:
                        </label>

                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            className="form-control"
                            required
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="phone">
                            Phone Number:
                        </label>

                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            className="form-control"
                            required
                            placeholder="+254 7XX XXX XXX"
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="email">
                            Email Address:
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="residentialArea">
                            Residential Area / Estate:
                        </label>

                        <input
                            id="residentialArea"
                            type="text"
                            name="residentialArea"
                            className="form-control"
                            required
                            placeholder="e.g. Kibera, Ayani, Olympic"
                        />
                    </div>

                    <div className="photo-section mt-4 p-3 border rounded bg-light">
                        <label>
                            <strong>
                                Passport Photo Upload or
                                Snapshot:
                            </strong>
                        </label>

                        <input
                            type="file"
                            name="photo"
                            accept="image/*"
                            className="form-control mt-2"
                            onChange={handleFileUpload}
                        />

                        <p className="text-muted mt-2 text-center">
                            - OR -
                        </p>

                        <div className="text-center">
                            {!cameraOpen ? (
                                <button
                                    type="button"
                                    onClick={startCamera}
                                    className="btn btn-outline-dark"
                                >
                                    Take a Photo Using Phone Camera
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={stopCamera}
                                    className="btn btn-outline-danger"
                                >
                                    Close Camera
                                </button>
                            )}
                        </div>

                        {cameraOpen && (
                            <div className="mt-3 text-center">
                                <video
                                    ref={videoRef}
                                    width="100%"
                                    autoPlay
                                    playsInline
                                    muted
                                    style={{
                                        borderRadius: '10px',
                                        background: '#000',
                                    }}
                                />

                                <button
                                    type="button"
                                    onClick={captureSnapshot}
                                    className="btn btn-primary mt-2"
                                >
                                    Capture Snapshot
                                </button>
                            </div>
                        )}

                        <canvas
                            ref={canvasRef}
                            style={{ display: 'none' }}
                        />

                        {snapshot && (
                            <div className="mt-3 text-center">
                                <p>
                                    <strong>
                                        Selected / Captured
                                        Photo:
                                    </strong>
                                </p>

                                <img
                                    src={snapshot}
                                    width="150"
                                    height="150"
                                    className="rounded-circle"
                                    alt="Membership registration preview"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />

                                <br />

                                <button
                                    type="button"
                                    className="btn btn-outline-danger btn-sm mt-2"
                                    onClick={() =>
                                        setSnapshot(null)
                                    }
                                >
                                    Remove Photo
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary mt-4 w-100"
                    >
                        Submit Membership Registration
                    </button>
                </form>
            </div>
        </section>

        <Footer />
        <WhatsAppFloat />
    </div>
);


}
