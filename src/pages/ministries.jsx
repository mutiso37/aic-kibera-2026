import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const ministries = [
  {
    id: 'music',
    title: 'Music Ministry',
    subtitle: 'Praise • Worship • Choirs',
    description:
      'A ministry dedicated to leading the church into worship through Praise & Worship, the Kiswahili Choir and the Christ Ambassadors Choir.',
    images: ['/ambassadors-choir.png', '/kiswahili-choir.png'],
    icon: 'fa-music',
    link: '/ministries/music',
    accent: '#8b5cf6'
  },
  {
    id: 'women',
    title: 'Women Ministry',
    subtitle: 'Faith • Fellowship • Service',
    description:
      'A fellowship where women grow spiritually, encourage one another and serve God and the community.',
    images: ['/aickibera-church-image.png', '/kiswahili-choir.png'],
    icon: 'fa-person-dress',
    link: '/ministries/women',
    accent: '#ec4899'
  },
  {
    id: 'men',
    title: 'Men Ministry',
    subtitle: 'Leadership • Brotherhood • Faith',
    description:
      'Building men who are committed to Christ, family, church leadership and service to the community.',
    images: ['/aickibera-church-image.png', '/ambassadors-choir.png'],
    icon: 'fa-person',
    link: '/ministries/men',
    accent: '#2563eb'
  },
  {
    id: 'youth',
    title: 'Youth Ministry',
    subtitle: 'Purpose • Discipleship • Leadership',
    description:
      'Equipping young people to follow Christ, discover their gifts and become responsible Christian leaders.',
    images: ['/ambassadors-choir.png', '/aickibera-church-image.png'],
    icon: 'fa-users',
    link: '/ministries/youth',
    accent: '#06b6d4'
  },
  {
    id: 'children',
    title: 'Children Ministry',
    subtitle: 'Growing in Christ',
    description:
      'Helping children discover God through biblical teaching, fellowship, worship and joyful Christian activities.',
    images: ['/aickibera-church-image.png', '/kiswahili-choir.png'],
    icon: 'fa-child',
    link: '/ministries/children',
    accent: '#f59e0b'
  },
  {
    id: 'media',
    title: 'Media Ministry',
    subtitle: 'Communicate • Connect • Inspire',
    description:
      'Sharing the message of A.I.C. Kibera through photography, video, livestreaming and digital communication.',
    images: ['/aickibera-church-image.png', '/ambassadors-choir.png'],
    icon: 'fa-camera',
    link: '/ministries/media',
    accent: '#14b8a6'
  },
  {
    id: 'projection',
    title: 'Projection Ministry',
    subtitle: 'Technology • Service • Excellence',
    description:
      'Supporting worship services through reliable projection, presentation and technical service.',
    images: ['/aickibera-church-image.png', '/kiswahili-choir.png'],
    icon: 'fa-display',
    link: '/ministries/projection',
    accent: '#6366f1'
  },
  {
    id: 'evangelism',
    title: 'Evangelism Ministry',
    subtitle: 'Go • Preach • Reach',
    description:
      'Taking the Gospel beyond the church walls and reaching people with the message of Jesus Christ.',
    images: ['/aickibera-church-image.png', '/ambassadors-choir.png'],
    icon: 'fa-bullhorn',
    link: '/ministries/evangelism',
    accent: '#ef4444'
  }
];

const treasuredMoments = [
  { id: 1, title: 'Sunday Worship Celebration', image: '/aickibera-church-image.png', tag: 'Worship' },
  { id: 2, title: 'Choir Ministration & Praise', image: '/ambassadors-choir.png', tag: 'Music' },
  { id: 3, title: 'Kiswahili Choir Fellowship', image: '/kiswahili-choir.png', tag: 'Choir' },
  { id: 4, title: 'Youth Convention & Prayer', image: '/aickibera-church-image.png', tag: 'Youth' },
  { id: 5, title: 'Community Outreach Program', image: '/ambassadors-choir.png', tag: 'Outreach' },
  { id: 6, title: 'Children Sunday School Class', image: '/kiswahili-choir.png', tag: 'Children' }
];

function MinistrySlider({ ministry }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || ministry.images.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrent((previous) => (previous + 1) % ministry.images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [paused, ministry.images.length]);

  const nextSlide = () => {
    setCurrent((previous) => (previous + 1) % ministry.images.length);
  };

  const previousSlide = () => {
    setCurrent(
      (previous) =>
        (previous - 1 + ministry.images.length) % ministry.images.length
    );
  };

  return (
    <div
      className="mk-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {ministry.images.map((image, index) => (
        <img
          key={`${ministry.id}-${image}-${index}`}
          src={image}
          alt={`${ministry.title} ${index + 1}`}
          className={`mk-slide ${index === current ? 'mk-slide-active' : ''}`}
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      ))}

      <div className="mk-image-overlay"></div>

      <div className="mk-watermark">
        A.I.C. KIBERA
      </div>

      <button
        type="button"
        className="mk-arrow mk-arrow-left"
        onClick={previousSlide}
        aria-label={`Previous ${ministry.title} image`}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <button
        type="button"
        className="mk-arrow mk-arrow-right"
        onClick={nextSlide}
        aria-label={`Next ${ministry.title} image`}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="mk-dots">
        {ministry.images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`mk-dot ${index === current ? 'mk-dot-active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Show image ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="mk-slide-counter">
        {current + 1} / {ministry.images.length}
      </div>
    </div>
  );
}

export default function Ministries() {
  return (
    <>
      <style>{`
        .ministries-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 10% 10%, rgba(59,130,246,.12), transparent 30%),
            radial-gradient(circle at 90% 20%, rgba(139,92,246,.10), transparent 28%),
            linear-gradient(180deg, #f8fbff 0%, #eef4fb 48%, #ffffff 100%);
          color: #172033;
        }

        .ministries-hero {
          position: relative;
          min-height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 100px 20px;
          background:
            linear-gradient(135deg, rgba(7,25,55,.94), rgba(13,61,105,.88)),
            url('/aickibera-church-image.png') center/cover no-repeat;
          isolation: isolate;
        }

        .ministries-hero::before {
          content: '';
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(59,130,246,.18);
          filter: blur(10px);
          top: -180px;
          left: -120px;
          z-index: -1;
          animation: mkOrbOne 7s ease-in-out infinite alternate;
        }

        .ministries-hero::after {
          content: '';
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: rgba(139,92,246,.18);
          filter: blur(12px);
          bottom: -190px;
          right: -100px;
          z-index: -1;
          animation: mkOrbTwo 8s ease-in-out infinite alternate;
        }

        .ministries-hero-content {
          max-width: 900px;
          color: white;
          position: relative;
          z-index: 2;
          animation: mkHeroIn .9s ease both;
        }

        .ministries-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 18px;
          border: 1px solid rgba(255,255,255,.28);
          background: rgba(255,255,255,.10);
          backdrop-filter: blur(10px);
          border-radius: 999px;
          font-size: .82rem;
          font-weight: 800;
          letter-spacing: .14em;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .ministries-hero h1 {
          font-size: clamp(2.7rem, 6vw, 5rem);
          line-height: 1;
          margin: 0 0 20px;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .ministries-hero h1 span {
          background: linear-gradient(90deg, #93c5fd, #c4b5fd, #f0abfc);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .ministries-hero p {
          max-width: 760px;
          margin: 0 auto;
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255,255,255,.84);
        }

        .ministries-intro {
          max-width: 1150px;
          margin: 0 auto;
          padding: 75px 20px 35px;
          text-align: center;
        }

        .ministries-intro h2 {
          margin: 0 0 15px;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #10233f;
        }

        .ministries-intro p {
          max-width: 820px;
          margin: auto;
          color: #5d6b7e;
          line-height: 1.8;
          font-size: 1.03rem;
        }

        .ministries-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px 20px 90px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 30px;
        }

        /* MINISTRY CARDS HOVER */
        .ministries-page .ministry-card {
          position: relative;
          background: rgba(255,255,255,.92);
          border: 1px solid rgba(148,163,184,.18);
          border-radius: 26px;
          overflow: hidden;
          box-shadow: 0 20px 55px rgba(15,23,42,.09);
          transition: transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.35s ease;
          animation: mkCardIn .75s ease both;
        }

        .ministries-page .ministry-card:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 35px 80px rgba(15,23,42,0.18) !important;
          border-color: rgba(59, 130, 246, 0.5) !important;
        }

        .mk-slider {
          position: relative;
          width: 100%;
          height: 330px;
          overflow: hidden;
          background: #0f172a;
        }

        .mk-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.08);
          transition: opacity 1s ease-in-out, transform 4s ease-in-out;
          z-index: 1;
        }

        .mk-slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }

        .mk-image-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: linear-gradient(to top, rgba(2,6,23,.78), rgba(2,6,23,.08) 60%, rgba(2,6,23,.05));
          pointer-events: none;
        }

        .mk-watermark {
          position: absolute;
          z-index: 5;
          top: 18px;
          right: 18px;
          padding: 7px 11px;
          border-radius: 7px;
          background: rgba(0,0,0,.34);
          color: rgba(255,255,255,.82);
          border: 1px solid rgba(255,255,255,.25);
          font-size: .68rem;
          font-weight: 900;
          letter-spacing: .13em;
          pointer-events: none;
          user-select: none;
        }

        .mk-arrow {
          position: absolute;
          z-index: 8;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 50%;
          background: rgba(15,23,42,.48);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          backdrop-filter: blur(8px);
        }

        .ministries-page .mk-arrow:hover {
          background: rgba(255,255,255,.95) !important;
          color: #10233f !important;
          transform: translateY(-50%) scale(1.12) !important;
        }

        .mk-arrow-left {
          left: 16px;
        }

        .mk-arrow-right {
          right: 16px;
        }

        .mk-dots {
          position: absolute;
          z-index: 9;
          left: 50%;
          bottom: 17px;
          transform: translateX(-50%);
          display: flex;
          gap: 7px;
        }

        .mk-dot {
          width: 9px;
          height: 9px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.45);
          cursor: pointer;
          transition: all .25s ease;
        }

        .ministries-page .mk-dot:hover {
          background: rgba(255,255,255,0.85) !important;
          transform: scale(1.2) !important;
        }

        .mk-dot-active {
          width: 25px;
          border-radius: 99px;
          background: white;
        }

        .mk-slide-counter {
          position: absolute;
          z-index: 9;
          left: 17px;
          bottom: 16px;
          padding: 5px 9px;
          border-radius: 6px;
          background: rgba(0,0,0,.35);
          color: white;
          font-size: .72rem;
          font-weight: 800;
        }

        .ministry-card-content {
          padding: 28px 28px 30px;
        }

        .ministry-icon {
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          color: white;
          margin-bottom: 18px;
          font-size: 1.25rem;
          box-shadow: 0 10px 25px rgba(15,23,42,.14);
          transition: transform 0.3s ease;
        }

        .ministries-page .ministry-card:hover .ministry-icon {
          transform: scale(1.1) rotate(4deg) !important;
        }

        .ministry-card h3 {
          margin: 0 0 8px;
          font-size: 1.55rem;
          color: #10233f;
          transition: color 0.2s ease;
        }

        .ministries-page .ministry-card:hover h3 {
          color: #155e9c !important;
        }

        .ministry-subtitle {
          margin: 0 0 14px;
          color: #64748b;
          font-size: .85rem;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .ministry-card p {
          color: #59677a;
          line-height: 1.7;
          margin: 0 0 22px;
        }

        .ministry-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          font-weight: 800;
          color: #155e9c;
          transition: gap 0.3s ease, transform 0.3s ease;
        }

        .ministries-page .ministry-link:hover {
          gap: 14px !important;
          transform: translateX(4px) !important;
        }

        /* MOMENTS WE TREASURE GALLERY HOVER (FROM MUSIC DOWNWARDS) */
        .moments-section {
          max-width: 1200px;
          margin: 0 auto 90px;
          padding: 0 20px;
        }

        .moments-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .moments-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          color: #10233f;
          margin-bottom: 12px;
        }

        .moments-header p {
          color: #64748b;
          font-size: 1.05rem;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .moments-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .ministries-page .moment-card {
          position: relative;
          height: 260px;
          border-radius: 20px;
          overflow: hidden;
          background: #0f172a;
          box-shadow: 0 15px 35px rgba(15,23,42,0.1);
          transition: transform 0.35s ease, box-shadow 0.35s ease !important;
          cursor: pointer;
        }

        .ministries-page .moment-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 25px 50px rgba(15,23,42,0.22) !important;
        }

        .ministries-page .moment-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease !important;
        }

        .ministries-page .moment-card:hover img {
          transform: scale(1.1) !important;
        }

        .moment-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.2) 60%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
        }

        .moment-tag {
          align-self: flex-start;
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(6px);
          color: white;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .moment-title {
          color: white;
          font-size: 1.1rem;
          font-weight: 800;
          margin: 0;
          line-height: 1.3;
        }

        /* MUSIC HIGHLIGHT BOX HOVER */
        .music-highlight {
          max-width: 1200px;
          margin: 0 auto 90px;
          padding: 0 20px;
        }

        .ministries-page .music-highlight-inner {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          padding: 55px;
          background:
            linear-gradient(135deg, rgba(16,35,63,.97), rgba(30,64,175,.94)),
            url('/ambassadors-choir.png') center/cover;
          color: white;
          box-shadow: 0 30px 75px rgba(15,23,42,.18);
          transition: transform 0.4s ease, box-shadow 0.4s ease !important;
        }

        .ministries-page .music-highlight-inner:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 40px 90px rgba(15,23,42,0.28) !important;
        }

        .music-highlight-inner::after {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(167,139,250,.18);
          right: -80px;
          top: -100px;
          animation: mkOrbTwo 7s ease-in-out infinite alternate;
        }

        .music-highlight-content {
          position: relative;
          z-index: 2;
          max-width: 720px;
        }

        .music-highlight h2 {
          font-size: clamp(2rem, 4vw, 3.2rem);
          margin: 0 0 16px;
        }

        .music-highlight p {
          color: rgba(255,255,255,.82);
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .music-groups {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 28px;
        }

        .music-group {
          padding: 9px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.18);
          font-size: .86rem;
          font-weight: 700;
          transition: background 0.3s ease, transform 0.2s ease !important;
        }

        .ministries-page .music-group:hover {
          background: rgba(255, 255, 255, 0.25) !important;
          transform: translateY(-2px) !important;
        }

        /* BUTTONS & CTA BOXES HOVER */
        .ministries-page .music-button,
        .ministries-page .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 25px;
          border-radius: 13px;
          text-decoration: none;
          font-weight: 900;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease !important;
        }

        .music-button {
          background: white;
          color: #10233f;
        }

        .ministries-page .music-button:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 15px 30px rgba(0,0,0,0.25) !important;
        }

        .ministries-cta {
          padding: 75px 20px 95px;
          text-align: center;
          background: linear-gradient(135deg, #eaf3ff, #f5efff);
        }

        .ministries-cta h2 {
          margin: 0 0 14px;
          color: #10233f;
          font-size: clamp(2rem, 4vw, 3rem);
        }

        .ministries-cta p {
          max-width: 700px;
          margin: 0 auto 25px;
          color: #64748b;
          line-height: 1.7;
        }

        .cta-button {
          background: #155e9c;
          color: white;
          box-shadow: 0 12px 30px rgba(21,94,156,.22);
        }

        .ministries-page .cta-button:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 18px 35px rgba(21,94,156,0.35) !important;
          background: #124d80 !important;
        }

        @keyframes mkHeroIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes mkCardIn {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes mkOrbOne {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(80px, 40px) scale(1.15); }
        }

        @keyframes mkOrbTwo {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(-70px, -35px) scale(1.15); }
        }

        @media (max-width: 950px) {
          .moments-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 850px) {
          .ministries-grid {
            grid-template-columns: 1fr;
          }
          .ministries-hero {
            min-height: 430px;
          }
          .music-highlight-inner {
            padding: 40px 28px;
          }
        }

        @media (max-width: 560px) {
          .ministries-hero {
            min-height: 410px;
            padding: 80px 18px;
          }
          .mk-slider {
            height: 250px;
          }
          .moments-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <Navbar />

      <main className="ministries-page">
        <section className="ministries-hero">
          <div className="ministries-hero-content">
            <div className="ministries-eyebrow">
              <i className="fa-solid fa-church"></i>
              A.I.C. Kibera
            </div>

            <h1>
              Our <span>Ministries</span>
            </h1>

            <p>
              Discover the ministries of A.I.C. Kibera and find
              a place where your gifts, faith and passion can
              serve God and strengthen the church community.
            </p>
          </div>
        </section>

        <section className="ministries-intro">
          <h2>Serving Together in Christ</h2>
          <p>
            Every ministry at A.I.C. Kibera contributes to the
            spiritual growth, fellowship and mission of the church.
            Explore each ministry to learn about its purpose,
            activities, leadership and opportunities to participate.
          </p>
        </section>

        <section className="ministries-grid">
          {ministries.map((ministry, index) => (
            <article
              className="ministry-card"
              key={ministry.id}
              style={{
                animationDelay: `${index * 80}ms`
              }}
            >
              <MinistrySlider ministry={ministry} />

              <div className="ministry-card-content">
                <div
                  className="ministry-icon"
                  style={{
                    background: `linear-gradient(135deg, ${ministry.accent}, #10233f)`
                  }}
                >
                  <i className={`fa-solid ${ministry.icon}`}></i>
                </div>

                <h3>{ministry.title}</h3>

                <div className="ministry-subtitle">
                  {ministry.subtitle}
                </div>

                <p>{ministry.description}</p>

                <Link
                  to={ministry.link}
                  className="ministry-link"
                >
                  Explore Ministry
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Moments We Treasure Gallery Section */}
        <section className="moments-section">
          <div className="moments-header">
            <h2>Moments We Treasure</h2>
            <p>
              A glimpse into our vibrant fellowship, joyful worship services, community outreach, 
              and special moments shared together in faith.
            </p>
          </div>

          <div className="moments-grid">
            {treasuredMoments.map((moment) => (
              <div className="moment-card" key={moment.id}>
                <img
                  src={moment.image}
                  alt={moment.title}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="moment-overlay">
                  <span className="moment-tag">{moment.tag}</span>
                  <h3 className="moment-title">{moment.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="music-highlight">
          <div className="music-highlight-inner">
            <div className="music-highlight-content">
              <h2>Music Ministry</h2>

              <p>
                Music is an important part of worship at
                A.I.C. Kibera. Our Music Ministry brings
                together different teams and choirs to lead
                the congregation in praise, worship and
                fellowship.
              </p>

              <div className="music-groups">
                <span className="music-group">
                  Praise &amp; Worship
                </span>

                <span className="music-group">
                  Kiswahili Choir
                </span>

                <span className="music-group">
                  Christ Ambassadors Choir
                </span>
              </div>

              <Link
                to="/ministries/music"
                className="music-button"
              >
                Visit Music Ministry
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        <section className="ministries-cta">
          <h2>Find Your Place to Serve</h2>

          <p>
            God has given every believer gifts and abilities.
            Discover a ministry where you can grow, serve,
            fellowship and make a meaningful contribution to
            the work of Christ.
          </p>

          <Link to="/register" className="cta-button">
            Join A.I.C. Kibera
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}