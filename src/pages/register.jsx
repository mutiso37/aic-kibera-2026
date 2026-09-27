import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Register() {
    const [cameraOpen, setCameraOpen] = useState(false);
    const [snapshot, setSnapshot] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const startCamera = async () => {
        setCameraOpen(true);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            alert("Camera access denied or unavailable.");
        }
    };

    const captureSnapshot = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (video && canvas) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL('image/png');
            setSnapshot(dataUrl);

            const stream = video.srcObject;
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
            setCameraOpen(false);
        }
    };

    return (
        <div>
            <Navbar />
            <section className="py-5">
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2>New Membership Registration</h2>
                    <p>Fill out the form below to officially join the AIC Kibera family. If you do not have a photo stored on your phone, use our built-in camera snapshot scanner option below.</p>

                    <form className="mt-4">
                        <div className="form-group">
                            <label>Full Name:</label>
                            <input type="text" className="form-control" required placeholder="Enter your full name" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Phone Number:</label>
                            <input type="tel" className="form-control" required placeholder="+254 7XX XXX XXX" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email Address:</label>
                            <input type="email" className="form-control" placeholder="name@example.com" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Residential Area / Estate:</label>
                            <input type="text" className="form-control" required placeholder="e.g. Kibera, Ayani, Olympic" />
                        </div>

                        <div className="photo-section mt-4 p-3 border rounded bg-light">
                            <label><strong>Passport Photo Upload or Snapshot:</strong></label>
                            <input type="file" accept="image/*" className="form-control mt-2" />
                            <p className="text-muted mt-2 text-center">- OR -</p>
                            <div className="text-center">
                                <button type="button" onClick={startCamera} className="btn btn-outline-dark">Take a Photo Using Phone Camera</button>
                            </div>
                            {cameraOpen && (
                                <div className="mt-3">
                                    <video ref={videoRef} width="100%" autoPlay></video>
                                    <button type="button" onClick={captureSnapshot} className="btn btn-primary mt-2">Capture Snapshot</button>
                                </div>
                            )}
                            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
                            {snapshot && (
                                <div className="mt-2 text-center">
                                    <p>Captured Photo:</p>
                                    <img src={snapshot} width="150" className="rounded-circle" alt="Snapshot" />
                                </div>
                            )}
                        </div>

                        <button type="submit" className="btn btn-primary mt-4 w-100">Submit Membership Registration</button>
                    </form>
                </div>
            </section>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
}