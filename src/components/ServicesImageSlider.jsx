import { useEffect, useState } from 'react';

const serviceSlides = [
    {
        image: '/kiswahili-choir.png',
        title: 'Kiswahili Choir',
        subtitle:
            'Serving God through worship, praise and fellowship.'
    },
    {
        image: '/ambassadors-choir.png',
        title: 'Christ Ambassadors Choir',
        subtitle:
            'Lifting the name of Jesus through music and ministry.'
    }
];

export default function ServicesImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((previous) =>
                previous === serviceSlides.length - 1
                    ? 0
                    : previous + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const currentSlide = serviceSlides[currentIndex];

    return (
        <div className="services-image-slider">

            {/* IMAGE */}
            <img
                key={currentSlide.image}
                src={currentSlide.image}
                alt={currentSlide.title}
                className="services-slider-image"
            />

            {/* DARK OVERLAY */}
            <div className="services-slider-overlay"></div>

            {/* CONTENT */}
            <div className="services-slide-content">

                <span className="services-slider-label">
                    A.I.C. KIBERA
                </span>

                <h3>{currentSlide.title}</h3>

                <p>{currentSlide.subtitle}</p>

            </div>

            {/* DOTS */}
            <div className="services-slider-dots">

                {serviceSlides.map((slide, index) => (
                    <button
                        key={slide.image}
                        type="button"
                        className={
                            index === currentIndex
                                ? 'active'
                                : ''
                        }
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Show ${slide.title}`}
                    />
                ))}

            </div>

            {/* SLIDE COUNTER */}
            <div className="services-slide-counter">
                0{currentIndex + 1} / 0{serviceSlides.length}
            </div>

        </div>
    );
}