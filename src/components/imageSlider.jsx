import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
    {
        image: '/aickibera-church-image.png',
        title: 'Welcome to AIC Kibera',
        subtitle: 'A Transforming Community Rooted in Biblical Truth and Hope.'
    },
    {
        image: '/ambassadors-choir.png',
        title: 'Ambassadors Choir in Worship',
        subtitle: 'Lift High the Name of Jesus Through Powerful Praise and Song.'
    },
    {
        image: '/kiswahili-choir.png',
        title: 'Huduma ya Kumsifu Mungu',
        subtitle: 'Karibu tushirikiane katika Neno na nyimbo za sifa kila Jumapili.'
    }
    /* --- PLACE ORDER: ADD MORE SLIDING PICTURES BELOW IN THE FUTURE --- */
    // {
    //     image: '/your-new-image.png',
    //     title: 'Your New Title Here',
    //     subtitle: 'Your new description text here.'
    // }
];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div 
            style={{ 
                width: '100%',
                height: '85vh',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#111'
            }}
        >
            {slides.map((slide, index) => {
                const isActive = index === currentIndex;
                return (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: isActive ? 1 : 0,
                            transition: 'opacity 1.2s ease-in-out',
                            zIndex: isActive ? 2 : 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: isActive ? 'auto' : 'none'
                        }}
                    >
                        <div 
                            className="slider-content-box"
                            style={{
                                textAlign: 'center',
                                color: '#fff',
                                width: '90%',
                                maxWidth: '850px',
                                padding: '20px',
                                opacity: isActive ? 1 : 0,
                                transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'opacity 1s ease-in-out 0.2s, transform 1s ease-in-out 0.2s'
                            }}
                        >
                            <span style={{ background: '#b71c1c', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '15px' }}>
                                AIC Kibera Sanctuary
                            </span>
                            <h1 className="slider-title" style={{ fontSize: 'clamp(28px, 5vw, 46px)', margin: '0 0 15px 0', fontWeight: '800', textShadow: '0 2px 10px rgba(0,0,0,0.6)', lineHeight: '1.2' }}>
                                {slide.title}
                            </h1>
                            <p className="slider-subtitle" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#f1f1f1', marginBottom: '30px', textShadow: '0 1px 6px rgba(0,0,0,0.6)', lineHeight: '1.5' }}>
                                {slide.subtitle}
                            </p>
                            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link to="/register" style={{ background: '#b71c1c', color: '#fff', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                                    Join Membership
                                </Link>
                                <Link to="/contact" style={{ background: 'transparent', color: '#fff', border: '2px solid #fff', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', backdropFilter: 'blur(4px)' }}>
                                    Plan a Visit
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}