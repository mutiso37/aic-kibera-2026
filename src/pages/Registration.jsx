import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeaorwyz';
const REVEREND_PHONE = '254725436394';

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  gender: '',
  dob: '',
  maritalStatus: '',
  occupation: '',
  residence: '',
  preferredMinistry: '',
  isSaved: '',
  whenSaved: '',
  isBaptised: '',
  baptismChurch: '',
  baptismPastor: '',
  baptismDate: '',
  formerChurch: '',
  formerPastor: '',
  isFirstTime: '',
  isFullMember: '',
  prayerRequests: '',
  photo: null,
};

const responsiveStyles = `
  .registration-page {
    min-height: 100vh;
    background: #f5f7fb;
  }

  .registration-hero {
    padding: 100px 20px 55px;
    text-align: center;
    background: linear-gradient(135deg, #071a35, #123d70);
    color: white;
  }

  .registration-hero h1 {
    margin: 0 0 12px;
    font-size: clamp(2rem, 5vw, 3.4rem);
  }

  .registration-hero p {
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.7;
    opacity: 0.95;
  }

  .registration-container {
    width: min(1100px, 94%);
    margin: -30px auto 60px;
    position: relative;
    z-index: 2;
  }

  .registration-card {
    background: white;
    border-radius: 18px;
    padding: clamp(20px, 4vw, 40px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  }

  .section-title {
    margin: 30px 0 18px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e5e7eb;
    color: #123d70;
  }

  .section-title:first-child {
    margin-top: 0;
  }

  .reg-grid-2,
  .reg-grid-3 {
    display: grid;
    gap: 18px;
    margin-bottom: 18px;
  }

  .reg-grid-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .reg-grid-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .reg-field {
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-bottom: 18px;
  }

  .reg-label {
    font-weight: 700;
    color: #243447;
  }

  .reg-input,
  .reg-select,
  .reg-textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #cbd5e1;
    border-radius: 9px;
    padding: 12px 13px;
    font-size: 15px;
    background: #fff;
    color: #172033;
    outline: none;
  }

  .reg-input:focus,
  .reg-select:focus,
  .reg-textarea:focus {
    border-color: #123d70;
    box-shadow: 0 0 0 3px rgba(18, 61, 112, 0.1);
  }

  .reg-textarea {
    min-height: 120px;
    resize: vertical;
  }

  .required {
    color: #c62828;
  }

  .photo-section {
    margin-top: 25px;
    padding: 20px;
    border: 1px dashed #b8c2d1;
    border-radius: 12px;
    background: #f8fafc;
  }

  .camera-area {
    margin-top: 15px;
  }

  .camera-video {
    width: 100%;
    max-width: 500px;
    display: block;
    margin: 0 auto 15px;
    border-radius: 12px;
    background: #111827;
  }

  .photo-preview {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
    display: block;
    margin: 15px 0;
    border: 3px solid #123d70;
  }

  .button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 15px;
  }

  .registration-button {
    border: none;
    border-radius: 9px;
    padding: 13px 20px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .registration-button:hover {
    transform: translateY(-1px);
  }

  .registration-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  .primary-button {
    background: #123d70;
    color: white;
  }

  .secondary-button {
    background: #e8eef7;
    color: #123d70;
  }

  .danger-button {
    background: #b42318;
    color: white;
  }

  .success-box,
  .error-box,
  .info-box {
    padding: 15px 18px;
    border-radius: 10px;
    margin: 18px 0;
    line-height: 1.6;
  }

  .success-box {
    background: #ecfdf3;
    color: #146c43;
    border: 1px solid #b7ebc6;
  }

  .error-box {
    background: #fff1f2;
    color: #b42318;
    border: 1px solid #fecdd3;
  }

  .info-box {
    background: #eff6ff;
    color: #1e40af;
    border: 1px solid #bfdbfe;
  }

  .success-slip {
    border: 2px solid #123d70;
    border-radius: 16px;
    padding: 30px;
    background: white;
  }

  .success-slip h2 {
    color: #123d70;
    margin-top: 0;
  }

  .slip-details {
    margin-top: 20px;
    display: grid;
    gap: 10px;
  }

  .slip-details div {
    padding: 10px;
    border-bottom: 1px solid #e5e7eb;
  }

  .watermark-note {
    margin-top: 20px;
    text-align: center;
    color: #64748b;
    font-size: 13px;
  }

  @media (max-width: 800px) {
    .reg-grid-2,
    .reg-grid-3 {
      grid-template-columns: 1fr;
    }

    .registration-container {
      width: 96%;
    }

    .registration-card {
      padding: 20px 15px;
    }
  }

  @media print {
    .no-print,
    nav,
    footer {
      display: none !important;
    }

    .registration-page {
      background: white;
    }

    .registration-container {
      width: 100%;
      margin: 0;
    }

    .registration-card {
      box-shadow: none;
    }
  }
`;

export default function Registration() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [photoPreview, setPhotoPreview] = useState('');
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!cameraActive || !cameraStream) {
      return;
    }

    const videoElement = videoRef.current;

    if (!videoElement) {
      return;
    }

    videoElement.srcObject = cameraStream;

    const playCamera = async () => {
      try {
        await videoElement.play();
      } catch {
        // Browser may require user interaction before playing video.
      }
    };

    playCamera();

    return () => {
      videoElement.srcObject = null;
    };
  }, [cameraActive, cameraStream]);

  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => {
          track.stop();
        });
      }

      if (photoPreview) {
        URL.revokeObjectURL(photoPreview);
      }
    };
  }, [cameraStream, photoPreview]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => {
        track.stop();
      });
    }

    setCameraStream(null);
    setCameraActive(false);
  };

  // Image quality validator (rejects dull, dark, or poor quality pictures)
  const validateAndProcessImage = (file, callback) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        let totalBrightness = 0;
        let pixelCount = data.length / 4;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const brightness = r * 0.299 + g * 0.587 + b * 0.114;
          totalBrightness += brightness;
        }

        const avgBrightness = totalBrightness / pixelCount;

        // Reject dull or dark pictures (threshold < 48)
        if (avgBrightness < 48) {
          setErrorMsg('Photo is too dull, dark, or unclear. Please provide a clear, well-lit natural photo.');
          return;
        }

        setErrorMsg('');
        callback(file, e.target.result);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image file.');
      return;
    }

    validateAndProcessImage(file, (validFile, previewUrl) => {
      if (photoPreview) {
        URL.revokeObjectURL(photoPreview);
      }

      setFormData((previous) => ({
        ...previous,
        photo: validFile,
      }));

      setPhotoPreview(previewUrl);
    });
  };

  const startCamera = async () => {
    setErrorMsg('');

    if (!navigator.mediaDevices?.getUserMedia) {
      setErrorMsg(
        'Camera access is not supported by this browser. Please upload a photo instead.'
      );
      return;
    }

    try {
      stopCamera();

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
        },
        audio: false,
      });

      setCameraStream(stream);
      setCameraActive(true);
    } catch {
      setErrorMsg(
        'Camera access was denied or unavailable. Please allow camera permission or upload a photo instead.'
      );
    }
  };

  const capturePhoto = () => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;

    if (!videoElement || !canvasElement) {
      setErrorMsg('Camera is not ready yet. Please try again.');
      return;
    }

    if (!videoElement.videoWidth || !videoElement.videoHeight) {
      setErrorMsg(
        'The camera is still loading. Please wait a moment and try again.'
      );
      return;
    }

    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;

    const context = canvasElement.getContext('2d');

    if (!context) {
      setErrorMsg('Unable to capture the photo.');
      return;
    }

    context.drawImage(
      videoElement,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );

    canvasElement.toBlob(
      (blob) => {
        if (!blob) {
          setErrorMsg('Unable to create the photo.');
          return;
        }

        const file = new File(
          [blob],
          `aic-kibera-registration-${Date.now()}.jpg`,
          {
            type: 'image/jpeg',
          }
        );

        validateAndProcessImage(file, (validFile, previewUrl) => {
          if (photoPreview) {
            URL.revokeObjectURL(photoPreview);
          }

          setFormData((previous) => ({
            ...previous,
            photo: validFile,
          }));

          setPhotoPreview(previewUrl);
          stopCamera();
        });
      },
      'image/jpeg',
      0.9
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.photo) {
      setErrorMsg('Please upload or capture a clear verification photo first.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const submissionData = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          submissionData.append(key, value);
        }
      });

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: submissionData,
        headers: {
          Accept: 'application/json',
        },
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        if (result?.errors?.length) {
          const messages = result.errors
            .map((item) => item.message)
            .filter(Boolean)
            .join(', ');

          throw new Error(
            messages || 'Registration could not be submitted.'
          );
        }

        throw new Error(
          'Registration could not be submitted. Please try again.'
        );
      }

      const whatsappMessage = [
        'A.I.C. Kibera Registration',
        '',
        `Name: ${formData.fullName}`,
        `Phone: ${formData.phone}`,
        `Email: ${formData.email || 'Not provided'}`,
        `Preferred Ministry: ${
          formData.preferredMinistry || 'Not specified'
        }`,
        '',
        'A new church registration has been submitted online.',
      ].join('\n');

      const whatsappUrl =
        `https://wa.me/${REVEREND_PHONE}?text=${encodeURIComponent(
          whatsappMessage
        )}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      setSubmitted(true);
    } catch (error) {
      setErrorMsg(
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePrintPDF = () => {
    window.print();
  };

  const resetRegistration = () => {
    stopCamera();

    if (photoPreview) {
      URL.revokeObjectURL(photoPreview);
    }

    setFormData(initialFormData);
    setSubmitted(false);
    setLoading(false);
    setErrorMsg('');
    setPhotoPreview('');
  };

  return (
    <div className="registration-page">
      <style>{responsiveStyles}</style>

      <Navbar />

      <section className="registration-hero">
        <h1>A.I.C. Kibera Registration</h1>

        <p>
          Welcome to African Inland Church Kibera. Complete the registration
          form below to connect with our church family and ministry teams.
        </p>
      </section>

      <main className="registration-container">
        <div className="registration-card">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="info-box">
                Please provide accurate information. Your registration will
                be received by the A.I.C. Kibera church administration.
              </div>

              {errorMsg && (
                <div className="error-box" role="alert">
                  {errorMsg}
                </div>
              )}

              {/* =========================================
                  PROFILE PHOTO SECTION (MOVED TO TOP)
              ========================================= */}
              <h2 className="section-title">Profile Photo Verification</h2>

              <div className="photo-section">
                <p>
                  Please capture or upload a clear verification photo first. Dull, dark, or unclear pictures will be automatically rejected.
                </p>

                <div className="button-row no-print">
                  <label
                    className="registration-button secondary-button"
                    htmlFor="photo"
                  >
                    Choose Photo
                  </label>

                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />

                  {!cameraActive ? (
                    <button
                      type="button"
                      className="registration-button secondary-button"
                      onClick={startCamera}
                    >
                      Open Camera
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="registration-button primary-button"
                        onClick={capturePhoto}
                      >
                        Capture Photo
                      </button>

                      <button
                        type="button"
                        className="registration-button danger-button"
                        onClick={stopCamera}
                      >
                        Close Camera
                      </button>
                    </>
                  )}
                </div>

                {cameraActive && (
                  <div className="camera-area">
                    <video
                      ref={videoRef}
                      className="camera-video"
                      autoPlay
                      muted
                      playsInline
                    />
                  </div>
                )}

                {photoPreview && (
                  <div>
                    <p>
                      <strong>Selected Photo:</strong>
                    </p>

                    <img
                      src={photoPreview}
                      alt="Registration preview"
                      className="photo-preview"
                    />
                  </div>
                )}

                <canvas
                  ref={canvasRef}
                  style={{ display: 'none' }}
                />
              </div>

              {/* =========================================
                  PERSONAL INFORMATION
              ========================================= */}
              <h2 className="section-title">Personal Information</h2>

              <div className="reg-grid-2">
                <div className="reg-field">
                  <label className="reg-label" htmlFor="fullName">
                    Full Name <span className="required">*</span>
                  </label>

                  <input
                    className="reg-input"
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="reg-field">
                  <label className="reg-label" htmlFor="phone">
                    Phone Number <span className="required">*</span>
                  </label>

                  <input
                    className="reg-input"
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07XXXXXXXX"
                    required
                  />
                </div>

                <div className="reg-field">
                  <label className="reg-label" htmlFor="email">
                    Email Address
                  </label>

                  <input
                    className="reg-input"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="reg-field">
                  <label className="reg-label" htmlFor="dob">
                    Date of Birth
                  </label>

                  <input
                    className="reg-input"
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="reg-grid-3">
                <div className="reg-field">
                  <label className="reg-label" htmlFor="gender">
                    Gender
                  </label>

                  <select
                    className="reg-select"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="reg-field">
                  <label className="reg-label" htmlFor="maritalStatus">
                    Marital Status
                  </label>

                  <select
                    className="reg-select"
                    id="maritalStatus"
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Divorced">Divorced</option>
                  </select>
                </div>

                <div className="reg-field">
                  <label className="reg-label" htmlFor="occupation">
                    Occupation
                  </label>

                  <input
                    className="reg-input"
                    id="occupation"
                    name="occupation"
                    type="text"
                    value={formData.occupation}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="reg-field">
                <label className="reg-label" htmlFor="residence">
                  Current Residence
                </label>

                <input
                  className="reg-input"
                  id="residence"
                  name="residence"
                  type="text"
                  value={formData.residence}
                  onChange={handleChange}
                  placeholder="Area / Estate / Location"
                />
              </div>

              <h2 className="section-title">Church Information</h2>

              <div className="reg-grid-2">
                <div className="reg-field">
                  <label className="reg-label" htmlFor="isSaved">
                    Have you accepted Jesus Christ as your personal Saviour?
                  </label>

                  <select
                    className="reg-select"
                    id="isSaved"
                    name="isSaved"
                    value={formData.isSaved}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>

                <div className="reg-field">
                  <label className="reg-label" htmlFor="whenSaved">
                    When did you accept Christ?
                  </label>

                  <input
                    className="reg-input"
                    id="whenSaved"
                    name="whenSaved"
                    type="text"
                    value={formData.whenSaved}
                    onChange={handleChange}
                    placeholder="Year or approximate period"
                  />
                </div>
              </div>

              <div className="reg-grid-2">
                <div className="reg-field">
                  <label className="reg-label" htmlFor="isBaptised">
                    Have you been baptized?
                  </label>

                  <select
                    className="reg-select"
                    id="isBaptised"
                    name="isBaptised"
                    value={formData.isBaptised}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="reg-field">
                  <label className="reg-label" htmlFor="baptismDate">
                    Baptism Date
                  </label>

                  <input
                    className="reg-input"
                    id="baptismDate"
                    name="baptismDate"
                    type="date"
                    value={formData.baptismDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="reg-field">
                  <label className="reg-label" htmlFor="baptismChurch">
                    Baptism Church
                  </label>

                  <input
                    className="reg-input"
                    id="baptismChurch"
                    name="baptismChurch"
                    type="text"
                    value={formData.baptismChurch}
                    onChange={handleChange}
                  />
                </div>

                <div className="reg-field">
                  <label className="reg-label" htmlFor="baptismPastor">
                    Baptized By / Pastor
                  </label>

                  <input
                    className="reg-input"
                    id="baptismPastor"
                    name="baptismPastor"
                    type="text"
                    value={formData.baptismPastor}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h2 className="section-title">Previous Church</h2>

              <div className="reg-grid-2">
                <div className="reg-field">
                  <label className="reg-label" htmlFor="formerChurch">
                    Previous Church
                  </label>

                  <input
                    className="reg-input"
                    id="formerChurch"
                    name="formerChurch"
                    type="text"
                    value={formData.formerChurch}
                    onChange={handleChange}
                  />
                </div>

                <div className="reg-field">
                  <label className="reg-label" htmlFor="formerPastor">
                    Previous Pastor
                  </label>

                  <input
                    className="reg-input"
                    id="formerPastor"
                    name="formerPastor"
                    type="text"
                    value={formData.formerPastor}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h2 className="section-title">Membership Information</h2>

              <div className="reg-grid-2">
                <div className="reg-field">
                  <label className="reg-label" htmlFor="isFirstTime">
                    Is this your first visit to A.I.C. Kibera?
                  </label>

                  <select
                    className="reg-select"
                    id="isFirstTime"
                    name="isFirstTime"
                    value={formData.isFirstTime}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="reg-field">
                  <label className="reg-label" htmlFor="isFullMember">
                    Are you already a full church member?
                  </label>

                  <select
                    className="reg-select"
                    id="isFullMember"
                    name="isFullMember"
                    value={formData.isFullMember}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div className="reg-field">
                <label className="reg-label" htmlFor="preferredMinistry">
                  Preferred Ministry
                </label>

                <select
                  className="reg-select"
                  id="preferredMinistry"
                  name="preferredMinistry"
                  value={formData.preferredMinistry}
                  onChange={handleChange}
                >
                  <option value="">Select a ministry</option>
                  <option value="Youth Ministry">Youth Ministry</option>
                  <option value="Music Ministry">Music Ministry</option>
                  <option value="Praise and Worship">
                    Praise and Worship
                  </option>
                  <option value="Kiswahili Choir">Kiswahili Choir</option>
                  <option value="Christ Ambassadors Choir">
                    Christ Ambassadors Choir
                  </option>
                  <option value="Media Ministry">Media Ministry</option>
                  <option value="Projection Ministry">
                    Projection Ministry
                  </option>
                  <option value="Cadets">Cadets</option>
                  <option value="Battalion">Battalion</option>
                  <option value="Children Ministry">
                    Children Ministry
                  </option>
                  <option value="Men Ministry">Men Ministry</option>
                  <option value="Women Ministry">Women Ministry</option>
                  <option value="Evangelism">Evangelism</option>
                  <option value="Prayer Ministry">Prayer Ministry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <h2 className="section-title">Prayer Request</h2>

              <div className="reg-field">
                <label className="reg-label" htmlFor="prayerRequests">
                  Prayer Requests / Additional Information
                </label>

                <textarea
                  className="reg-textarea"
                  id="prayerRequests"
                  name="prayerRequests"
                  value={formData.prayerRequests}
                  onChange={handleChange}
                  placeholder="Share any prayer request or information you would like the church administration to know."
                />
              </div>

              <div className="info-box">
                By submitting this form, you are requesting registration with
                A.I.C. Kibera. The church administration may contact you using
                the phone number or email provided.
              </div>

              <div className="button-row no-print">
                <button
                  type="submit"
                  className="registration-button primary-button"
                  disabled={loading}
                >
                  {loading
                    ? 'Submitting Registration...'
                    : 'Submit Registration'}
                </button>

                <button
                  type="button"
                  className="registration-button secondary-button"
                  onClick={resetRegistration}
                  disabled={loading}
                >
                  Clear Form
                </button>
              </div>
            </form>
          ) : (
            <div className="success-slip">
              <div className="success-box">
                <strong>Registration Submitted Successfully.</strong>
                <br />
                Your registration has been sent to the A.I.C. Kibera church
                administration.
              </div>

              <h2>Thank You for Registering</h2>

              <p>
                Welcome to A.I.C. Kibera. A member of the church administration
                may contact you using the details you provided.
              </p>

              <div className="slip-details">
                <div>
                  <strong>Name:</strong> {formData.fullName}
                </div>

                <div>
                  <strong>Phone:</strong> {formData.phone}
                </div>

                {formData.email && (
                  <div>
                    <strong>Email:</strong> {formData.email}
                  </div>
                )}

                {formData.preferredMinistry && (
                  <div>
                    <strong>Preferred Ministry:</strong>{' '}
                    {formData.preferredMinistry}
                  </div>
                )}

                <div>
                  <strong>Church:</strong> A.I.C. Kibera
                </div>

                <div>
                  <strong>Church Phone:</strong> 0725436394
                </div>

                <div>
                  <strong>Church Email:</strong> info@aickibera.org
                </div>
              </div>

              <div className="button-row no-print">
                <button
                  type="button"
                  className="registration-button primary-button"
                  onClick={handlePrintPDF}
                >
                  Print / Save as PDF
                </button>

                <button
                  type="button"
                  className="registration-button secondary-button"
                  onClick={resetRegistration}
                >
                  Register Another Person
                </button>
              </div>

              <p className="watermark-note">
                A.I.C. Kibera — Church Administration
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}