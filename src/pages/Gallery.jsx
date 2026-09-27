import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isBlurred, setIsBlurred] = useState(false);

    // Auto-blur shield to protect media when switching windows or triggering capture tools
    useEffect(() => {
        const handleBlur = () => setIsBlurred(true);
        const handleFocus = () => setIsBlurred(false);
        const handleVisibilityChange = () => {
            if (document.hidden) {
                setIsBlurred(true);
            } else {
                setIsBlurred(false);
            }
        };

        window.addEventListener('blur', handleBlur);
        window.addEventListener('focus', handleFocus);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('blur', handleBlur);
            window.removeEventListener('focus', handleFocus);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    // Gallery list with Kiswahili Choir, Ambassadors Choir, and future placeholders
    const galleryImages = [
        { id: 1, title: 'Kiswahili Choir Ministration', src: '/kiswahili-choir.png', category: 'Music & Services' },
        { id: 2, title: 'Ambassadors Choir Fellowship', src: '/ambassadors-choir.png', category: 'Music & Youth' },
        { id: 3, title: 'Sunday Main Worship', src: '', category: 'Services' },
        { id: 4, title: 'Women Ministry Fellowship', src: '', category: 'Ministries' },
        { id: 5, title: 'Men Ministry Prayer Breakfast', src: '', category: 'Ministries' },
        { id: 6, title: 'Children Sunday School', src: '', category: 'Children' },
        { id: 7, title: 'Church Choir Recording', src: '', category: 'Music' },
        { id: 8, title: 'Community Outreach Program', src: '', category: 'Outreach' },
        { id: 9, title: 'Youth Conference Session', src: '', category: 'Youth' },
        { id: 10, title: 'Leadership Dedication Service', src: '', category: 'Events' },
        { id: 11, title: 'Future Church Event Placeholder 1', src: '', category: 'Events' },
        { id: 12, title: 'Future Church Event Placeholder 2', src: '', category: 'Events' },
    ];

    const handleContextMenu = (e) => e.preventDefault();
    const handleDragStart = (e) => e.preventDefault();

    return (
        <div 
            className="gallery-page" 
            onContextMenu={handleContextMenu}
            style={{
                filter: isBlurred ? 'blur(25px)' : 'none',
                transition: 'filter 0.1s ease-in-out',
                userSelect: 'none',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                background: '#fafafa'
            }}
        >
            {/* Sticky Navigation Section */}
            <Navbar />

            {/* Main Content Wrapper (flex: 1 pushes footer to the bottom) */}
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                {/* Embedded Media Queries for PC (Large) vs Mobile (Compact) Adaptation */}
                <style>{`
                    @media (max-width: 768px) {
                        .lightbox-modal-box {
                            width: 95% !important;
                            max-width: 95% !important;
                            padding: 15px !important;
                        }
                        .lightbox-media-container {
                            height: 280px !important;
                        }
                        .lightbox-diagonal-text {
                            font-size: 1.2rem !important;
                        }
                    }
                `}</style>

                {/* Page Header */}
                <div className="page-header" style={{ padding: '40px 0 20px 0' }}>
                    <div className="container">
                        <h1>Church Gallery</h1>
                        <p>A glimpse into our worship services, fellowships, and community events at AIC Kibera.</p>
                        {isBlurred && (
                            <p style={{ color: '#d9534f', fontWeight: 'bold', marginTop: '10px' }}>
                                [ Security Notice: Content hidden/blurred for media protection ]
                            </p>
                        )}
                    </div>
                </div>

                {/* Gallery Grid Section */}
                <section className="container section-padding" style={{ flex: '1', paddingBottom: '60px' }}>
                    <div 
                        className="gallery-grid" 
                        style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                            gap: '20px', 
                            marginTop: '10px' 
                        }}
                    >
                        {galleryImages.map((image) => (
                            <div 
                                key={image.id} 
                                className="gallery-item"
                                style={{ 
                                    borderRadius: '8px', 
                                    overflow: 'hidden', 
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
                                    background: '#f9f9f9', 
                                    cursor: 'pointer',
                                    position: 'relative',
                                    userSelect: 'none'
                                }}
                                onClick={() => setSelectedImage(image)}
                            >
                                {/* Image Container with Protection and Full-Container Watermark */}
                                <div 
                                    style={{ 
                                        height: '220px', 
                                        background: '#e0e0e0', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        position: 'relative', 
                                        overflow: 'hidden' 
                                    }}
                                >
                                    <div 
                                        style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#dcdcdc' }}
                                        onContextMenu={handleContextMenu}
                                        onDragStart={handleDragStart}
                                        aria-hidden="true"
                                    >
                                        {image.src ? (
                                            <img 
                                                src={image.src} 
                                                alt={image.title} 
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                onContextMenu={handleContextMenu}
                                                onDragStart={handleDragStart}
                                            />
                                        ) : (
                                            <i className="fa-regular fa-image" style={{ fontSize: '3rem', color: '#888' }}></i>
                                        )}
                                    </div>

                                    {/* FULL-CONTAINER LOGO WATERMARK */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        pointerEvents: 'none',
                                        userSelect: 'none',
                                        opacity: 0.18,
                                        zIndex: 2,
                                        padding: '20px'
                                    }}>
                                        <img 
                                            src="/aic-kibera-logo.png" 
                                            alt="Full Watermark" 
                                            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} 
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                    </div>

                                    {/* Permanent Corner Watermark Badge */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        right: '10px',
                                        background: 'rgba(0, 0, 0, 0.65)',
                                        color: '#ffffff',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        pointerEvents: 'none',
                                        userSelect: 'none',
                                        backdropFilter: 'blur(2px)',
                                        zIndex: 3
                                    }}>
                                        <img 
                                            src="/aic-kibera-logo.png" 
                                            alt="AIC Kibera Logo" 
                                            style={{ width: '14px', height: '14px', objectFit: 'contain' }} 
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                        AIC KIBERA
                                    </div>
                                </div>

                                <div style={{ padding: '15px' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#d9534f', fontWeight: 'bold', textTransform: 'uppercase' }}>{image.category}</span>
                                    <h3 style={{ fontSize: '1.1rem', margin: '5px 0 0 0', color: '#333' }}>{image.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Pinned Footer */}
            <footer style={{
                background: '#1a1a1a',
                color: '#fff',
                padding: '25px 20px',
                textAlign: 'center',
                borderTop: '3px solid #d9534f',
                marginTop: 'auto'
            }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ margin: '0', color: '#aaa', fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear()} AIC Kibera. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Lightbox Modal (Large & Immersive on PC, Responsive on Mobile) */}
            {selectedImage && (
                <div 
                    onClick={() => setSelectedImage(null)}
                    style={{ 
                        position: 'fixed', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%', 
                        background: 'rgba(0,0,0,0.85)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        zIndex: 2000, 
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}
                >
                    <div 
                        className="lightbox-modal-box"
                        style={{ 
                            background: '#fff', 
                            padding: '30px', 
                            borderRadius: '12px', 
                            width: '90vw', 
                            maxWidth: '1050px',
                            maxHeight: '94vh',
                            overflowY: 'auto',
                            textAlign: 'center', 
                            position: 'relative',
                            boxShadow: '0 15px 35px rgba(0,0,0,0.4)'
                        }} 
                        onClick={(e) => e.stopPropagation()}
                        onContextMenu={handleContextMenu}
                    >
                        <h3 style={{ margin: '0 0 5px 0', fontSize: '1.5rem', color: '#222' }}>{selectedImage.title}</h3>
                        <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '20px' }}>Category: {selectedImage.category}</p>
                        
                        {/* Large PC Lightbox Image Preview Area */}
                        <div 
                            className="lightbox-media-container"
                            style={{ 
                                width: '100%',
                                height: '550px',
                                background: '#1a1a1a', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                margin: '0 0 25px 0', 
                                position: 'relative', 
                                overflow: 'hidden',
                                borderRadius: '8px'
                            }} 
                            onDragStart={handleDragStart}
                            aria-hidden="true"
                        >
                            {selectedImage.src ? (
                                <img 
                                    src={selectedImage.src} 
                                    alt={selectedImage.title} 
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    onContextMenu={handleContextMenu}
                                    onDragStart={handleDragStart}
                                />
                            ) : (
                                <i className="fa-regular fa-image" style={{ fontSize: '5rem', color: '#888' }}></i>
                            )}

                            {/* FULL-CONTAINER WATERMARK IN LIGHTBOX */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                pointerEvents: 'none',
                                userSelect: 'none',
                                opacity: 0.18,
                                zIndex: 2,
                                padding: '40px'
                            }}>
                                <img 
                                    src="/aic-kibera-logo.png" 
                                    alt="Full Lightbox Watermark" 
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }} 
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            </div>

                            {/* Diagonal Security Watermark with Church Logo */}
                            <div 
                                className="lightbox-diagonal-text"
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%) rotate(-30deg)',
                                    color: 'rgba(255, 255, 255, 0.55)',
                                    fontSize: '2.4rem',
                                    fontWeight: '900',
                                    letterSpacing: '3px',
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                    textTransform: 'uppercase',
                                    whiteSpace: 'nowrap',
                                    textShadow: '0 2px 6px rgba(0,0,0,0.8)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    zIndex: 3
                                }}
                            >
                                <img 
                                    src="/aic-kibera-logo.png" 
                                    alt="Watermark Logo" 
                                    style={{ width: '42px', height: '42px', objectFit: 'contain', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.9))' }} 
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                                AIC KIBERA OFFICIAL
                            </div>
                        </div>

                        <button 
                            onClick={() => setSelectedImage(null)}
                            style={{ padding: '12px 30px', background: '#333', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
                        >
                            Close Preview
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}