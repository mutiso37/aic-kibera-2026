import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const leadershipSlides = [
    {
        image: '/kiswahili-choir.png',
        eyebrow: 'LEADERSHIP • SERVICE • UNITY',
        title: 'Leadership That Serves With Grace',
        message: 'True Christian leadership is not about standing above people; it is about standing with them, carrying the vision of Christ and serving with humility, courage and love.'
    },
    {
        image: '/ambassadors-choir.png',
        eyebrow: 'LEADERSHIP • VISION • IMPACT',
        title: 'Leaders Who Build People',
        message: 'Strong leadership raises others, develops gifts, strengthens families and creates a generation prepared to serve God and transform communities.'
    },
    {
        image: '/pastor.jpg',
        eyebrow: 'LEADERSHIP • FAITH • PURPOSE',
        title: 'Guided By Faith, Driven By Purpose',
        message: 'A.I.C. Kibera leadership exists to shepherd God’s people faithfully, protect the unity of the church and advance the Gospel with integrity.'
    }
];

/*
 * IMPORTANT:
 * Replace the sample biography, education and service-year
 * information below with verified information for each leader.
 */

const pastoralTeam = [
    {
        name: 'Rev. Dr. John Kamau',
        role: 'Resident Reverend',
        image: '/pastor.jpg',
        bio: 'Provides overall spiritual leadership, pastoral care, preaching, discipleship and direction of the church ministry.',
        education: 'Education background to be updated with verified qualifications.',
        started: 'Service at A.I.C. Kibera: Year to be confirmed.'
    },
    {
        name: 'Pastor David Otieno',
        role: 'Associate Pastor',
        image: '/placeholder-leader.jpg',
        bio: 'Supports the pastoral ministry and coordinates church programs, departments and congregational activities.',
        education: 'Education background to be updated with verified qualifications.',
        started: 'Service at A.I.C. Kibera: Year to be confirmed.'
    }
];

const elders = [
    {
        name: 'Elder Samuel Njoroge',
        role: 'Head Elder',
        image: '/leader-elder-samuel.jpg',
        bio: 'Supports the pastorate in spiritual guidance, discipleship, pastoral care and congregational leadership.',
        education: 'Education background to be updated with verified qualifications.',
        started: 'Service at A.I.C. Kibera: Year to be confirmed.'
    },
    {
        name: 'Elder Meshack Kiprono',
        role: 'Secretary / Elder',
        image: '/leader-elder-meshack.jpg',
        bio: 'Supports church administration and maintains official records, correspondence and congregational documentation.',
        education: 'Education background to be updated with verified qualifications.',
        started: 'Service at A.I.C. Kibera: Year to be confirmed.'
    },
    {
        name: 'Elder Ezekiel Ouma',
        role: 'Prayer Coordinator',
        image: '/leader-elder-ezekiel.jpg',
        bio: 'Coordinates prayer initiatives, intercession, fasting programs and spiritual development within the congregation.',
        education: 'Education background to be updated with verified qualifications.',
        started: 'Service at A.I.C. Kibera: Year to be confirmed.'
    }
];

const deacons = [
    {
        name: 'Deacon James Mwangi',
        role: 'Head Deacon & Treasurer',
        image: '/leader-deacon-james.jpg',
        bio: 'Supports church administration, stewardship, financial accountability and practical service within the congregation.',
        education: 'Education background to be updated with verified qualifications.',
        started: 'Service at A.I.C. Kibera: Year to be confirmed.'
    },
    {
        name: 'Deaconess Mary Akinsi',
        role: 'Head Deaconess',
        image: '/leader-deaconess-mary.jpg',
        bio: 'Coordinates hospitality, welfare, benevolence and practical ministry to members and visitors.',
        education: 'Education background to be updated with verified qualifications.',
        started: 'Service at A.I.C. Kibera: Year to be confirmed.'
    }
];

const councils = [
    {
        name: 'Women Leadership Council',
        role: 'Women Representatives',
        image: '/leader-wlc.jpg',
        bio: 'Provides leadership for women’s ministry, mentorship, fellowship, welfare and spiritual development.',
        education: 'Leadership and education information to be updated.',
        started: 'Service period to be confirmed.'
    },
    {
        name: 'Local Church Council',
        role: 'Executive Committee',
        image: '/leader-lcc.jpg',
        bio: 'Provides governance and oversight for church programs, policies, planning, budgets and congregational affairs.',
        education: 'Leadership and education information to be updated.',
        started: 'Service period to be confirmed.'
    }
];

function LeadershipHeroSlider() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((current) => (current + 1) % leadershipSlides.length);
        }, 6500);

        return () => clearInterval(timer);
    }, []);

    const goToPrevious = () => {
        setActiveSlide(
            (current) =>
                (current - 1 + leadershipSlides.length) %
                leadershipSlides.length
        );
    };

    const goToNext = () => {
        setActiveSlide(
            (current) => (current + 1) % leadershipSlides.length
        );
    };

    return (
        <section className="leadership-hero">
            <div className="leadership-slider">
                {leadershipSlides.map((slide, index) => (
                    <div
                        key={slide.title}
                        className={`leadership-slide ${
                            index === activeSlide ? 'active' : ''
                        }`}
                    >
                        <img
                            src={slide.image}
                            alt=""
                            className="leadership-slide-image"
                        />

                        <div className="leadership-slide-shade"></div>

                        <div className="leadership-slide-content">
                            <span className="hero-label">{slide.eyebrow}</span>

                            <h1>{slide.title}</h1>

                            <p>{slide.message}</p>

                            <div className="hero-divider"></div>

                            <strong>A.I.C. Kibera • Church Leadership</strong>
                        </div>
                    </div>
                ))}
            </div>

            <button
                type="button"
                className="slider-arrow slider-arrow-left"
                onClick={goToPrevious}
                aria-label="Previous leadership message"
            >
                <i className="fa-solid fa-chevron-left"></i>
            </button>

            <button
                type="button"
                className="slider-arrow slider-arrow-right"
                onClick={goToNext}
                aria-label="Next leadership message"
            >
                <i className="fa-solid fa-chevron-right"></i>
            </button>

            <div className="leadership-slider-dots">
                {leadershipSlides.map((slide, index) => (
                    <button
                        type="button"
                        key={slide.title}
                        className={`slider-dot ${
                            index === activeSlide ? 'active' : ''
                        }`}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Show leadership message ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

function LeaderCard({ leader, featured = false }) {
    return (
        <article className={`leadership-card ${featured ? 'featured-leader' : ''}`}>
            <div className="leader-photo-wrapper">
                <img
                    src={leader.image}
                    alt={leader.name}
                    className="leader-photo"
                    onError={(e) => {
                        if (e.currentTarget.src.endsWith('/placeholder-leader.jpg')) {
                            e.currentTarget.style.opacity = '0.35';
                            return;
                        }
                        e.currentTarget.src = '/placeholder-leader.jpg';
                    }}
                />
            </div>

            <div className="leader-content">
                <span className="leader-role">{leader.role}</span>

                <h3>{leader.name}</h3>

                <div className="leader-divider"></div>

                <div className="leader-detail">
                    <h4>
                        <i className="fa-solid fa-user"></i>
                        Biography
                    </h4>
                    <p>{leader.bio}</p>
                </div>

                <div className="leader-detail">
                    <h4>
                        <i className="fa-solid fa-graduation-cap"></i>
                        Education
                    </h4>
                    <p>{leader.education}</p>
                </div>

                <div className="leader-detail">
                    <h4>
                        <i className="fa-solid fa-calendar-check"></i>
                        Service at A.I.C. Kibera
                    </h4>
                    <p>{leader.started}</p>
                </div>
            </div>
        </article>
    );
}

function LeadershipSection({ title, subtitle, leaders, columns = 3 }) {
    return (
        <div className="leadership-section">
            <div className="section-heading">
                <span>{subtitle}</span>
                <h2>{title}</h2>
            </div>

            <div className={`leaders-grid leaders-grid-${columns}`}>
                {leaders.map((leader, index) => (
                    <LeaderCard
                        key={`${leader.name}-${index}`}
                        leader={leader}
                        featured={index === 0 && leaders.length <= 2}
                    />
                ))}
            </div>
        </div>
    );
}

export default function Leadership() {
    return (
        <div className="leadership-page">
            <Navbar />

            <LeadershipHeroSlider />

            <section className="leadership-intro">
                <div className="container">
                    <div className="intro-card">
                        <div className="intro-icon">
                            <i className="fa-solid fa-people-group"></i>
                        </div>

                        <div>
                            <span className="section-small-title">
                                SERVANT LEADERSHIP
                            </span>

                            <h2>Serving God, Serving People</h2>

                            <p>
                                A.I.C. Kibera is served by a team of spiritual
                                and administrative leaders who work together
                                to guide the congregation, nurture believers,
                                strengthen families and advance the mission
                                of the church.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <main className="leadership-main">
                <div className="container">
                    <div className="tree-level">
                        <div className="tree-level-number">01</div>

                        <LeadershipSection
                            title="Resident Reverend & Pastoral Team"
                            subtitle="Spiritual Leadership"
                            leaders={pastoralTeam}
                            columns={2}
                        />
                    </div>

                    <div className="tree-connector">
                        <span></span>
                    </div>

                    <div className="tree-level">
                        <div className="tree-level-number">02</div>

                        <LeadershipSection
                            title="Church Elders Board"
                            subtitle="Spiritual Oversight"
                            leaders={elders}
                            columns={3}
                        />
                    </div>

                    <div className="tree-connector">
                        <span></span>
                    </div>

                    <div className="tree-level">
                        <div className="tree-level-number">03</div>

                        <LeadershipSection
                            title="Deacons Board"
                            subtitle="Service & Stewardship"
                            leaders={deacons}
                            columns={2}
                        />
                    </div>

                    <div className="tree-connector">
                        <span></span>
                    </div>

                    <div className="tree-level">
                        <div className="tree-level-number">04</div>

                        <LeadershipSection
                            title="Governance & Leadership Councils"
                            subtitle="Church Governance"
                            leaders={councils}
                            columns={2}
                        />
                    </div>

                    <div className="leadership-bottom">
                        <h2>Discover Our Ministries</h2>

                        <p>
                            Learn more about the departments and ministries
                            serving the A.I.C. Kibera community.
                        </p>

                        <Link
                            to="/departments"
                            className="leadership-button"
                        >
                            Explore Ministries
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </main>

            <WhatsAppFloat />

            <Footer />

            <style>{`
                .leadership-page {
                    background: #f5f7fa;
                    min-height: 100vh;
                    color: #1a202c;
                    overflow-x: hidden;
                }

                .leadership-hero {
                    position: relative;
                    min-height: 520px;
                    overflow: hidden;
                    background: #111827;
                }

                .leadership-slider {
                    position: relative;
                    width: 100%;
                    height: 520px;
                }

                .leadership-slide {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    visibility: hidden;
                    transition:
                        opacity .8s ease,
                        visibility .8s ease;
                }

                .leadership-slide.active {
                    opacity: 1;
                    visibility: visible;
                    z-index: 2;
                }

                .leadership-slide-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    display: block;
                    filter: saturate(.8);
                }

                .leadership-slide-shade {
                    position: absolute;
                    inset: 0;
                    background:
                        linear-gradient(
                            90deg,
                            rgba(0,0,0,.84) 0%,
                            rgba(0,0,0,.66) 45%,
                            rgba(0,0,0,.48) 100%
                        );
                }

                .leadership-slide-content {
                    position: absolute;
                    z-index: 3;
                    left: 50%;
                    top: 50%;
                    width: min(900px, calc(100% - 40px));
                    transform: translate(-50%, -50%);
                    text-align: center;
                    color: #fff;
                }

                .leadership-slide-content h1 {
                    font-size: clamp(36px, 5.5vw, 68px);
                    line-height: 1.05;
                    margin: 0 0 22px;
                    font-weight: 900;
                    letter-spacing: -.8px;
                    text-shadow: 0 4px 20px rgba(0,0,0,.3);
                }

                .leadership-slide-content p {
                    max-width: 800px;
                    margin: 0 auto;
                    color: #f1f5f9;
                    font-size: clamp(16px, 2vw, 21px);
                    line-height: 1.8;
                    text-shadow: 0 2px 10px rgba(0,0,0,.35);
                }

                .leadership-slide-content strong {
                    display: block;
                    color: #fecaca;
                    font-size: 12px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }

                .hero-divider {
                    width: 70px;
                    height: 4px;
                    background: #b71c1c;
                    border-radius: 20px;
                    margin: 24px auto;
                }

                .slider-arrow {
                    position: absolute;
                    z-index: 10;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 48px;
                    height: 48px;
                    border: 1px solid rgba(255,255,255,.35);
                    border-radius: 50%;
                    background: rgba(0,0,0,.35);
                    color: #fff;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: .2s ease;
                }

                .slider-arrow:hover {
                    background: #b71c1c;
                    border-color: #b71c1c;
                }

                .slider-arrow-left {
                    left: 25px;
                }

                .slider-arrow-right {
                    right: 25px;
                }

                .leadership-slider-dots {
                    position: absolute;
                    z-index: 10;
                    bottom: 28px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 9px;
                }

                .slider-dot {
                    width: 9px;
                    height: 9px;
                    padding: 0;
                    border: 0;
                    border-radius: 50%;
                    background: rgba(255,255,255,.55);
                    cursor: pointer;
                    transition: .2s ease;
                }

                .slider-dot.active {
                    width: 30px;
                    border-radius: 10px;
                    background: #fff;
                }

                .leadership-hero-overlay {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background: linear-gradient(
                        rgba(0,0,0,0.68),
                        rgba(0,0,0,0.72)
                    );
                    color: #fff;
                    z-index: 5;
                    pointer-events: none;
                }

                .leadership-hero-overlay .container {
                    width: 100%;
                    max-width: 900px;
                    padding: 40px 20px;
                }

                .hero-label {
                    display: inline-block;
                    color: #fca5a5;
                    font-size: 13px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 15px;
                }

                .leadership-hero h1 {
                    font-size: clamp(38px, 6vw, 68px);
                    margin: 0 0 18px;
                    font-weight: 800;
                    line-height: 1.05;
                }

                .leadership-hero p {
                    max-width: 720px;
                    margin: 0 auto;
                    color: #e2e8f0;
                    font-size: clamp(15px, 2vw, 19px);
                    line-height: 1.7;
                }

                .leadership-intro {
                    padding: 65px 20px 25px;
                }

                .leadership-intro .container {
                    max-width: 1150px;
                    margin: auto;
                }

                .intro-card {
                    max-width: 1050px;
                    margin: auto;
                    background: #fff;
                    border-radius: 20px;
                    padding: 35px;
                    display: flex;
                    align-items: center;
                    gap: 25px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 12px 35px rgba(0,0,0,0.05);
                }

                .intro-icon {
                    min-width: 70px;
                    width: 70px;
                    height: 70px;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #b71c1c;
                    color: #fff;
                    font-size: 27px;
                }

                .section-small-title {
                    color: #b71c1c;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 2px;
                }

                .intro-card h2 {
                    margin: 5px 0 8px;
                    font-size: 28px;
                    color: #111827;
                }

                .intro-card p {
                    margin: 0;
                    color: #64748b;
                    line-height: 1.8;
                    font-size: 15px;
                }

                .leadership-main {
                    padding: 45px 20px 90px;
                }

                .leadership-main .container {
                    max-width: 1150px;
                    margin: auto;
                }

                .tree-level {
                    position: relative;
                }

                .tree-level-number {
                    width: 46px;
                    height: 46px;
                    border-radius: 50%;
                    background: #1a202c;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 25px;
                    font-size: 12px;
                    font-weight: 800;
                    border: 4px solid #fff;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
                }

                .section-heading {
                    text-align: center;
                    margin-bottom: 35px;
                }

                .section-heading span {
                    display: block;
                    color: #b71c1c;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    margin-bottom: 6px;
                }

                .section-heading h2 {
                    margin: 0;
                    color: #111827;
                    font-size: clamp(25px, 4vw, 34px);
                    font-weight: 800;
                }

                .leaders-grid {
                    display: grid;
                    gap: 25px;
                }

                .leaders-grid-2 {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }

                .leaders-grid-3 {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                }

                .leadership-card {
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.05);
                    transition:
                        transform .25s ease,
                        box-shadow .25s ease;
                }

                .leadership-card:hover {
                    transform: translateY(-7px);
                    box-shadow: 0 18px 40px rgba(0,0,0,0.10);
                }

                .featured-leader {
                    border-top: 5px solid #b71c1c;
                }

                .leader-photo-wrapper {
                    width: 100%;
                    height: 340px;
                    background: linear-gradient(
                        135deg,
                        #e2e8f0,
                        #f8fafc
                    );
                    overflow: hidden;
                }

                .leader-photo {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center top;
                    display: block;
                    transition: transform .4s ease;
                }

                .leadership-card:hover .leader-photo {
                    transform: scale(1.04);
                }

                .leader-content {
                    padding: 25px;
                }

                .leader-role {
                    display: inline-block;
                    color: #b71c1c;
                    background: #fff1f2;
                    padding: 6px 10px;
                    border-radius: 50px;
                    font-size: 10px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: .7px;
                    margin-bottom: 10px;
                }

                .leader-content h3 {
                    color: #111827;
                    font-size: 22px;
                    margin: 0;
                    font-weight: 800;
                }

                .leader-divider {
                    height: 2px;
                    width: 45px;
                    background: #b71c1c;
                    margin: 14px 0 18px;
                }

                .leader-detail {
                    margin-bottom: 17px;
                }

                .leader-detail:last-child {
                    margin-bottom: 0;
                }

                .leader-detail h4 {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin: 0 0 5px;
                    color: #334155;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: .5px;
                }

                .leader-detail h4 i {
                    color: #b71c1c;
                    width: 16px;
                }

                .leader-detail p {
                    margin: 0;
                    color: #64748b;
                    font-size: 13px;
                    line-height: 1.65;
                }

                .tree-connector {
                    height: 75px;
                    width: 2px;
                    background: linear-gradient(
                        to bottom,
                        #b71c1c,
                        #cbd5e1
                    );
                    margin: 0 auto;
                    position: relative;
                }

                .tree-connector::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 10px;
                    height: 10px;
                    background: #b71c1c;
                    border-radius: 50%;
                    transform: translateX(-50%);
                }

                .leadership-bottom {
                    margin: 75px auto 0;
                    max-width: 800px;
                    text-align: center;
                    background: #1a202c;
                    color: #fff;
                    border-radius: 22px;
                    padding: 45px 25px;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.12);
                }

                .leadership-bottom h2 {
                    margin: 0 0 10px;
                    font-size: 27px;
                }

                .leadership-bottom p {
                    color: #cbd5e1;
                    margin: 0 auto 25px;
                    max-width: 600px;
                    line-height: 1.7;
                }

                .leadership-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: #b71c1c;
                    color: #fff;
                    text-decoration: none;
                    padding: 13px 23px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 800;
                    transition: .2s ease;
                }

                .leadership-button:hover {
                    background: #8f1515;
                    transform: translateY(-2px);
                    color: #fff;
                }

                @media (max-width: 900px) {
                    .leaders-grid-3 {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                    .leader-photo-wrapper {
                        height: 320px;
                    }
                }

                @media (max-width: 700px) {
                    .leadership-hero,
                    .leadership-slider {
                        min-height: 470px;
                        height: 470px;
                    }

                    .leadership-slide-content {
                        width: min(760px, calc(100% - 70px));
                    }

                    .slider-arrow {
                        width: 40px;
                        height: 40px;
                    }

                    .slider-arrow-left {
                        left: 12px;
                    }

                    .slider-arrow-right {
                        right: 12px;
                    }

                    .intro-card {
                        flex-direction: column;
                        text-align: center;
                        padding: 28px 20px;
                    }

                    .leaders-grid-2,
                    .leaders-grid-3 {
                        grid-template-columns: 1fr;
                    }

                    .leader-photo-wrapper {
                        height: 360px;
                    }

                    .leader-content {
                        padding: 23px 20px;
                    }

                    .leadership-intro {
                        padding-top: 35px;
                    }
                }

                @media (max-width: 450px) {
                    .leadership-main {
                        padding-left: 12px;
                        padding-right: 12px;
                    }

                    .leader-photo-wrapper {
                        height: 320px;
                    }

                    .leadership-hero,
                    .leadership-slider {
                        min-height: 440px;
                        height: 440px;
                    }

                    .leadership-slide-content {
                        width: calc(100% - 55px);
                    }

                    .leadership-slide-content h1 {
                        font-size: 34px;
                    }

                    .leadership-slide-content p {
                        font-size: 14px;
                        line-height: 1.65;
                    }

                    .leadership-slide-content strong {
                        font-size: 9px;
                    }

                    .slider-arrow {
                        width: 34px;
                        height: 34px;
                        font-size: 11px;
                    }

                    .leadership-hero h1 {
                        font-size: 36px;
                    }
                }
            `}</style>
        </div>
    );
}
