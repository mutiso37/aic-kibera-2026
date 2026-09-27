import { useState, useEffect } from 'react';
import './SecureImage.css';

export default function SecureImage({ src, alt, watermarkText = "A.I.C. KIBERA SECURED" }) {
    const [isBlurred, setIsBlurred] = useState(false);
    const [warningVisible, setWarningVisible] = useState(false);

    useEffect(() => {
        // Intercept PrintScreen key to clear clipboard and warn user
        const handleKeyUp = (e) => {
            if (e.key === 'PrintScreen') {
                navigator.clipboard.writeText('Protected A.I.C. Kibera Church Content');
                setWarningVisible(true);
                setIsBlurred(true);
                setTimeout(() => {
                    setWarningVisible(false);
                    setIsBlurred(false);
                }, 3000);
            }
        };

        // Blur images if the user switches away from the window/tab (Snipping tool protection)
        const handleBlur = () => {
            setIsBlurred(true);
        };

        const handleFocus = () => {
            setIsBlurred(false);
        };

        window.addEventListener('keyup', handleKeyUp);
        window.addEventListener('blur', handleBlur);
        window.addEventListener('focus', handleFocus);

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('blur', handleBlur);
            window.removeEventListener('focus', handleFocus);
        };
    }, []);

    // Prevent right-click context menu (Save image as...)
    const handleContextMenu = (e) => {
        e.preventDefault();
    };

    // Prevent dragging images
    const handleDragStart = (e) => {
        e.preventDefault();
    };

    return (
        <div 
            className={`secure-gallery-wrapper ${isBlurred ? 'secure-blur-active' : ''}`}
            onContextMenu={handleContextMenu}
            onDragStart={handleDragStart}
        >
            {/* The Protected Image */}
            <img 
                src={src} 
                alt={alt} 
                className="secure-protected-img"
                loading="lazy"
            />

            {/* Permanent Watermark Overlay over focal points/faces */}
            <div className="secure-watermark-overlay">
                <div className="watermark-badge">
                    <i className="fa-solid fa-shield-halved"></i>
                    <span>{watermarkText}</span>
                </div>
            </div>

            {/* Screenshot Warning Banner */}
            {warningVisible && (
                <div className="secure-warning-banner">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    <span>Screenshots are restricted to protect church members.</span>
                </div>
            )}

            {/* Transparent Interaction Shield */}
            <div className="secure-interaction-shield"></div>
        </div>
    );
}