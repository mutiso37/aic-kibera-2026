import { useEffect, useState } from 'react';
import churchImg from '../assets/aickibera-church-image.png';
import choirImg1 from '../assets/ambassadors-choir.png';
import choirImg2 from '../assets/kiswahili-choir.png';

const slides = [
  {
    image: churchImg,
    title: 'We are a family church dedicated to worship',
    subtitle: 'Spiritual growth, fellowship, and impacting lives together in God\'s presence at AIC Kibera.'
  },
  {
    image: choirImg1,
    title: 'Experience Joyful Fellowship & Choir Ministry',
    subtitle: 'Join our vibrant community as we lift our voices and hearts in praise every Sunday.'
  },
  {
    image: choirImg2,
    title: 'Impacting Lives Through Community Outreach',
    subtitle: 'Reaching out to our neighbors along Ngong Road and beyond with the love of Christ.'
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}