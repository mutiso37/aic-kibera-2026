import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderImages = [
        {
            src: '/aickibera-church-image.png',
            caption: 'Africa Inland Church - Kenya, Kibera'
        },
        {
            src: '/ambassadors-choir.png',
            caption: 'Christ Ambassadors Choir'
        },
        {
            src: '/kiswahili-choir.png',
            caption: 'Kiswahili Choir'
        }
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(
                (prevIndex) => (prevIndex + 1) % sliderImages.length
            );
        }, 4000);

        return () => clearInterval(slideInterval);
    }, [sliderImages.length]);

    return (
        <div
            style={{
                overflowX: 'hidden',
                background: '#f4f6f9',
                fontFamily: 'Inter, sans-serif',
                color: '#333'
            }}
        >

            {/* ================= CUSTOM CSS ================= */}
            <style>{`
                @keyframes shake {
                    0% { transform: translate(1px, 1px) rotate(0deg); }
                    20% { transform: translate(-1px, -2px) rotate(-1deg); }
                    40% { transform: translate(-3px, 0px) rotate(1deg); }
                    60% { transform: translate(3px, 2px) rotate(0deg); }
                    80% { transform: translate(1px, -1px) rotate(1deg); }
                    100% { transform: translate(0px, 0px) rotate(0deg); }
                }

                .shake-hover:hover {
                    animation: shake 0.5s;
                    animation-iteration-count: infinite;
                }

                .card-hover {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .card-hover:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 24px rgba(0,0,0,0.12) !important;
                }

                .muted-red-gradient {
                    background: linear-gradient(
                        135deg,
                        #7c1c1c 0%,
                        #3a1c1c 100%
                    );
                }

                .muted-blue-gradient {
                    background: linear-gradient(
                        135deg,
                        #1b365d 0%,
                        #0f1d30 100%
                    );
                }

                .hero-slide-content {
                    box-sizing: border-box;
                }

                @media (max-width: 768px) {
                    .hero-slide-content {
                        padding: 30px !important;
                    }

                    .hero-slide-content h1 {
                        font-size: 34px !important;
                    }

                    .hero-slider {
                        height: 420px !important;
                        margin: 10px auto !important;
                        border-radius: 0 !important;
                    }
                }

                @media (max-width: 480px) {
                    .hero-slide-content {
                        padding: 25px 20px !important;
                    }

                    .hero-slide-content h1 {
                        font-size: 30px !important;
                    }

                    .hero-slide-content p {
                        font-size: 13px !important;
                    }
                }
            `}</style>

            {/* ================= TOP ANNOUNCEMENT BAR ================= */}
            <div
                style={{
                    background: '#b71c1c',
                    color: '#fff',
                    padding: '8px 20px',
                    fontSize: '13px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '10px'
                }}
            >
                <div>
                    <i
                        className="fa-solid fa-bullhorn"
                        style={{ marginRight: '8px' }}
                    ></i>

                    Welcome to Africa Inland Church - Kenya, Kibera |
                    Sunday Worship: 9:00 AM – 1:00 PM
                </div>

                <div
                    style={{
                        display: 'flex',
                        gap: '15px'
                    }}
                >
                    <span>English | Kiswahili</span>
                </div>
            </div>

            <Navbar />

            {/* ================= HERO SLIDER SECTION ================= */}
            <div
                className="hero-slider"
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1300px',
                    margin: '20px auto',
                    height: '480px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
            >
                {sliderImages.map((image, index) => (
                    <div
                        key={index}
                        className="hero-slide-content"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `linear-gradient(
                                rgba(0,0,0,0.55),
                                rgba(0,0,0,0.7)
                            ), url(${image.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: currentSlide === index ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                            zIndex: currentSlide === index ? 2 : 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            color: '#fff',
                            padding: '60px'
                        }}
                    >
                        <span
                            style={{
                                color: '#ff5252',
                                fontWeight: '700',
                                letterSpacing: '1px',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                marginBottom: '8px'
                            }}
                        >
                            Welcome to Africa Inland Church - Kenya
                        </span>

                        <h1
                            style={{
                                fontSize: '46px',
                                fontWeight: '900',
                                margin: '0 0 10px 0',
                                textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                                color: '#fff'
                            }}
                        >
                            KIBERA
                        </h1>

                        <p
                            style={{
                                fontSize: '15px',
                                color: '#ddd',
                                marginBottom: '25px',
                                maxWidth: '550px'
                            }}
                        >
                            Preaching Christ • Transforming Lives • Reaching
                            the Nations
                        </p>

                        <div
                            style={{
                                display: 'flex',
                                gap: '15px',
                                flexWrap: 'wrap'
                            }}
                        >
                            <Link
                                to="/watch-live"
                                className="shake-hover"
                                style={{
                                    background: '#b71c1c',
                                    color: '#fff',
                                    padding: '12px 28px',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    boxShadow:
                                        '0 4px 12px rgba(183,28,28,0.4)',
                                    display: 'inline-block'
                                }}
                            >
                                Watch Live
                            </Link>

                            <Link
                                to="/about"
                                className="card-hover"
                                style={{
                                    background: 'transparent',
                                    border: '2px solid #fff',
                                    color: '#fff',
                                    padding: '12px 28px',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    display: 'inline-block'
                                }}
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= SERVICE SCHEDULE & LOCATION ================= */}
            <div
                style={{
                    maxWidth: '1300px',
                    margin: '20px auto',
                    padding: '0 20px',
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '15px'
                }}
            >
                {[
                    {
                        icon: 'fa-calendar-days',
                        title: 'Sunday Worship',
                        desc: '9:00 AM – 12:00 PM'
                    },
                    {
                        icon: 'fa-book-bible',
                        title: 'Bible Study',
                        desc: 'Wednesday 6:00 PM'
                    },
                    {
                        icon: 'fa-hands-praying',
                        title: 'Prayer Meeting',
                        desc: 'Friday 6:00 PM'
                    },
                    {
                        icon: 'fa-location-dot',
                        title: 'Location',
                        desc: 'Kibera, Nairobi',
                        link: '/contact#map'
                    }
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="card-hover"
                        style={{
                            background: '#fff',
                            padding: '18px',
                            borderRadius: '8px',
                            boxShadow:
                                '0 4px 12px rgba(0,0,0,0.04)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px'
                        }}
                    >
                        <i
                            className={`fa-solid ${item.icon}`}
                            style={{
                                fontSize: '28px',
                                color: '#b71c1c'
                            }}
                        ></i>

                        <div>
                            <h4
                                style={{
                                    fontSize: '14px',
                                    margin: '0 0 4px 0',
                                    color: '#111'
                                }}
                            >
                                {item.title}
                            </h4>

                            <p
                                style={{
                                    fontSize: '12px',
                                    color: '#666',
                                    margin: 0
                                }}
                            >
                                {item.desc}
                            </p>

                            {item.link && (
                                <Link
                                    to={item.link}
                                    style={{
                                        fontSize: '11px',
                                        color: '#b71c1c',
                                        fontWeight: '600',
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        marginTop: '4px'
                                    }}
                                >
                                    Get Directions →
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= LATEST ANNOUNCEMENTS ================= */}
            <div
                style={{
                    maxWidth: '1300px',
                    margin: '40px auto',
                    padding: '0 20px'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '20px',
                        flexWrap: 'wrap',
                        gap: '10px'
                    }}
                >
                    <div>
                        <h2
                            style={{
                                fontSize: '22px',
                                margin: '0 0 4px 0',
                                color: '#111'
                            }}
                        >
                            Latest Announcements
                        </h2>

                        <p
                            style={{
                                fontSize: '13px',
                                color: '#666',
                                margin: 0
                            }}
                        >
                            Stay updated with the latest news and upcoming
                            activities.
                        </p>
                    </div>

                    <Link
                        to="/announcements"
                        className="shake-hover"
                        style={{
                            fontSize: '13px',
                            color: '#b71c1c',
                            fontWeight: '600',
                            textDecoration: 'none'
                        }}
                    >
                        View All Announcements →
                    </Link>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '20px'
                    }}
                >
                    {[
                        {
                            badge: 'CHURCH NEWS',
                            title: 'Sunday Worship Service',
                            desc: 'Join us this Sunday for a powerful time of worship, word and fellowship.',
                            date: 'Aug 24, 2025'
                        },
                        {
                            badge: 'EVENT',
                            title: 'Youth Conference 2025',
                            desc: 'A time of teaching, fellowship and empowerment for our youth.',
                            date: 'Aug 24, 2025'
                        },
                        {
                            badge: 'SERMON',
                            title: 'New Sermon Series',
                            desc: '"Walking in Faith" - a new series now available.',
                            date: 'Aug 20, 2025'
                        },
                        {
                            badge: 'OUTREACH',
                            title: 'Community Outreach',
                            desc: 'Feeding and supporting families in Kibera.',
                            date: 'Aug 18, 2025'
                        }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="card-hover"
                            style={{
                                background: '#fff',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                boxShadow:
                                    '0 4px 12px rgba(0,0,0,0.05)'
                            }}
                        >
                            <div
                                style={{
                                    height: '130px',
                                    background:
                                        'url(/aickibera-church-image.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative'
                                }}
                            >
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        left: '10px',
                                        background: '#b71c1c',
                                        color: '#fff',
                                        fontSize: '10px',
                                        padding: '3px 8px',
                                        borderRadius: '4px',
                                        fontWeight: '700'
                                    }}
                                >
                                    {item.badge}
                                </span>
                            </div>

                            <div style={{ padding: '16px' }}>
                                <h4
                                    style={{
                                        fontSize: '15px',
                                        margin: '0 0 6px 0',
                                        color: '#111'
                                    }}
                                >
                                    {item.title}
                                </h4>

                                <p
                                    style={{
                                        fontSize: '12px',
                                        color: '#666',
                                        lineHeight: '1.4',
                                        margin: '0 0 12px 0'
                                    }}
                                >
                                    {item.desc}
                                </p>

                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        fontSize: '11px',
                                        color: '#888'
                                    }}
                                >
                                    <span>
                                        <i
                                            className="fa-regular fa-calendar"
                                            style={{
                                                marginRight: '4px'
                                            }}
                                        ></i>
                                        {item.date}
                                    </span>

                                    <Link
                                        to="/announcements"
                                        className="shake-hover"
                                        style={{
                                            color: '#b71c1c',
                                            fontWeight: '600',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= CHURCH FAMILY & MISSION/VISION ================= */}
            <div
                style={{
                    background: '#fff',
                    padding: '60px 20px',
                    borderTop: '1px solid #eaeaea',
                    borderBottom: '1px solid #eaeaea'
                }}
            >
                <div
                    style={{
                        maxWidth: '1300px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '40px',
                        alignItems: 'center'
                    }}
                >
                    <div>
                        <span
                            style={{
                                color: '#b71c1c',
                                fontWeight: '700',
                                fontSize: '12px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                        >
                            Welcome to AIC Kibera
                        </span>

                        <h2
                            style={{
                                fontSize: '28px',
                                color: '#111',
                                margin: '8px 0 15px 0'
                            }}
                        >
                            A Church Family Committed to Christ
                        </h2>

                        <p
                            style={{
                                fontSize: '14px',
                                color: '#555',
                                lineHeight: '1.7',
                                marginBottom: '20px'
                            }}
                        >
                            Africa Inland Church – Kenya, Kibera is a
                            Christian community committed to proclaiming the
                            Gospel of Jesus Christ, nurturing believers in
                            faith, serving our community and reaching people
                            with the transforming message of Christ.
                        </p>

                        <Link
                            to="/about"
                            className="shake-hover"
                            style={{
                                background: '#b71c1c',
                                color: '#fff',
                                padding: '10px 22px',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '13px',
                                display: 'inline-block'
                            }}
                        >
                            Discover Our Story
                        </Link>
                    </div>

                    <div>
                        <img
                            src="/aickibera-church-image.png"
                            alt="AIC Kibera Church"
                            style={{
                                width: '100%',
                                borderRadius: '10px',
                                boxShadow:
                                    '0 10px 25px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                </div>

                {/* Mission & Vision Cards */}
                <div
                    style={{
                        maxWidth: '1300px',
                        margin: '50px auto 0 auto',
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px'
                    }}
                >
                    <div
                        className="card-hover"
                        style={{
                            background: '#0d1b2a',
                            color: '#fff',
                            padding: '30px',
                            borderRadius: '10px'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                marginBottom: '12px'
                            }}
                        >
                            <i
                                className="fa-solid fa-bullseye"
                                style={{
                                    fontSize: '24px',
                                    color: '#ff5252'
                                }}
                            ></i>

                            <h3
                                style={{
                                    fontSize: '18px',
                                    margin: 0
                                }}
                            >
                                OUR MISSION
                            </h3>
                        </div>

                        <p
                            style={{
                                fontSize: '13px',
                                color: '#ccc',
                                lineHeight: '1.6',
                                margin: 0
                            }}
                        >
                            To make disciples of Jesus Christ, nurture
                            believers in faith and serve communities through
                            the Gospel.
                        </p>
                    </div>

                    <div
                        className="card-hover"
                        style={{
                            background: '#0d1b2a',
                            color: '#fff',
                            padding: '30px',
                            borderRadius: '10px'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                marginBottom: '12px'
                            }}
                        >
                            <i
                                className="fa-solid fa-eye"
                                style={{
                                    fontSize: '24px',
                                    color: '#ff5252'
                                }}
                            ></i>

                            <h3
                                style={{
                                    fontSize: '18px',
                                    margin: 0
                                }}
                            >
                                OUR VISION
                            </h3>
                        </div>

                        <p
                            style={{
                                fontSize: '13px',
                                color: '#ccc',
                                lineHeight: '1.6',
                                margin: 0
                            }}
                        >
                            To be a Christ-centered, Spirit-filled church
                            transforming lives and impacting generations.
                        </p>
                    </div>
                </div>
            </div>

            {/* ================= CORE VALUES ================= */}
            <div
                style={{
                    maxWidth: '1300px',
                    margin: '50px auto',
                    padding: '0 20px',
                    textAlign: 'center'
                }}
            >
                <span
                    style={{
                        color: '#b71c1c',
                        fontWeight: '700',
                        fontSize: '12px',
                        textTransform: 'uppercase'
                    }}
                >
                    What We Value
                </span>

                <h2
                    style={{
                        fontSize: '24px',
                        color: '#111',
                        margin: '5px 0 30px 0'
                    }}
                >
                    Our core values guide everything we do.
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '20px'
                    }}
                >
                    {[
                        {
                            title: 'Love',
                            desc: 'We love God and people.',
                            icon: 'fa-heart'
                        },
                        {
                            title: 'Integrity',
                            desc: 'We do what is right.',
                            icon: 'fa-shield-halved'
                        },
                        {
                            title: 'Excellence',
                            desc: 'We give our best.',
                            icon: 'fa-award'
                        },
                        {
                            title: 'Service',
                            desc: 'We serve with humility.',
                            icon: 'fa-hands-holding-child'
                        },
                        {
                            title: 'Faith',
                            desc: 'We trust God.',
                            icon: 'fa-cross'
                        }
                    ].map((val, idx) => (
                        <div
                            key={idx}
                            className="card-hover shake-hover"
                            style={{
                                background: '#fff',
                                padding: '25px 15px',
                                borderRadius: '8px',
                                boxShadow:
                                    '0 4px 12px rgba(0,0,0,0.04)',
                                cursor: 'pointer'
                            }}
                        >
                            <i
                                className={`fa-solid ${val.icon}`}
                                style={{
                                    fontSize: '24px',
                                    color: '#b71c1c',
                                    marginBottom: '12px'
                                }}
                            ></i>

                            <h4
                                style={{
                                    fontSize: '15px',
                                    margin: '0 0 6px 0',
                                    color: '#111'
                                }}
                            >
                                {val.title}
                            </h4>

                            <p
                                style={{
                                    fontSize: '12px',
                                    color: '#666',
                                    margin: 0
                                }}
                            >
                                {val.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= MINISTRIES ================= */}
            <div
                className="muted-red-gradient"
                style={{
                    color: '#fff',
                    padding: '60px 20px',
                    margin: '40px 0',
                    boxShadow:
                        'inset 0 4px 12px rgba(0,0,0,0.1)'
                }}
            >
                <div
                    style={{
                        maxWidth: '1300px',
                        margin: '0 auto'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '30px',
                            flexWrap: 'wrap',
                            gap: '15px'
                        }}
                    >
                        <div>
                            <h2
                                style={{
                                    fontSize: '24px',
                                    fontWeight: '700',
                                    margin: '0 0 5px 0'
                                }}
                            >
                                Our Ministries
                            </h2>

                            <p
                                style={{
                                    fontSize: '13px',
                                    color: '#e0dede',
                                    margin: 0
                                }}
                            >
                                Serving God. Building People. Transforming
                                Communities.
                            </p>
                        </div>

                        <Link
                            to="/ministries"
                            className="shake-hover"
                            style={{
                                background:
                                    'rgba(255,255,255,0.15)',
                                color: '#fff',
                                padding: '8px 18px',
                                borderRadius: '6px',
                                fontSize: '13px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                border:
                                    '1px solid rgba(255,255,255,0.3)'
                            }}
                        >
                            View All Ministries →
                        </Link>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '20px'
                        }}
                    >
                        {[
                            {
                                name: "Children's Ministry",
                                link: '/ministries/children'
                            },
                            {
                                name: 'Youth Ministry',
                                link: '/ministries/youth'
                            },
                            {
                                name: "Women's Ministry",
                                link: '/ministries/women'
                            },
                            {
                                name: "Men's Ministry",
                                link: '/ministries/men'
                            },
                            {
                                name: 'Evangelism',
                                link: '/ministries/evangelism'
                            }
                        ].map((min, idx) => (
                            <Link
                                key={idx}
                                to={min.link}
                                className="card-hover shake-hover"
                                style={{
                                    background:
                                        'rgba(255, 255, 255, 0.08)',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    border:
                                        '1px solid rgba(255, 255, 255, 0.15)',
                                    textAlign: 'center',
                                    paddingBottom: '15px',
                                    textDecoration: 'none',
                                    display: 'block',
                                    cursor: 'pointer'
                                }}
                            >
                                <div
                                    style={{
                                        height: '110px',
                                        background:
                                            'url(/aickibera-church-image.png)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        marginBottom: '12px'
                                    }}
                                ></div>

                                <span
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        color: '#fff'
                                    }}
                                >
                                    {min.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= LIVES IMPACTED ================= */}
            <div
                className="muted-blue-gradient"
                style={{
                    color: '#fff',
                    padding: '50px 20px',
                    textAlign: 'center',
                    margin: '40px 0',
                    boxShadow:
                        'inset 0 4px 12px rgba(0,0,0,0.1)'
                }}
            >
                <h3
                    style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        margin: '0 0 5px 0'
                    }}
                >
                    Making an Impact
                </h3>

                <p
                    style={{
                        fontSize: '13px',
                        color: '#cfd8dc',
                        margin: '0 0 35px 0'
                    }}
                >
                    Lives changed. Communities transformed.
                </p>

                <div
                    style={{
                        maxWidth: '1100px',
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'space-around',
                        gap: '20px',
                        flexWrap: 'wrap'
                    }}
                >
                    {[
                        {
                            count: '12,548+',
                            label: 'Lives Touched'
                        },
                        {
                            count: '8,732+',
                            label: 'People Served'
                        },
                        {
                            count: '6,421+',
                            label: 'Members'
                        },
                        {
                            count: '1,256+',
                            label: 'Families Reached'
                        }
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="card-hover shake-hover"
                            style={{
                                background:
                                    'rgba(255, 255, 255, 0.04)',
                                padding: '20px 25px',
                                borderRadius: '10px',
                                border:
                                    '1px solid rgba(255,255,255,0.1)',
                                cursor: 'default',
                                minWidth: '160px'
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: '32px',
                                    color: '#ff8a80',
                                    margin: '0 0 5px 0',
                                    fontWeight: '800'
                                }}
                            >
                                {stat.count}
                            </h2>

                            <p
                                style={{
                                    fontSize: '12px',
                                    color: '#e0e0e0',
                                    margin: 0,
                                    fontWeight: '500'
                                }}
                            >
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= WATCH LIVE & UPCOMING EVENTS ================= */}
            <div
                style={{
                    maxWidth: '1300px',
                    margin: '40px auto',
                    padding: '0 20px',
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '30px'
                }}
            >

                {/* ================= WATCH LIVE ================= */}
                <div
                    style={{
                        background: '#111',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '25px',
                        boxShadow:
                            '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                >
                    <h3
                        style={{
                            fontSize: '18px',
                            margin: '0 0 5px 0'
                        }}
                    >
                        Worship With Us Online
                    </h3>

                    <p
                        style={{
                            fontSize: '12px',
                            color: '#aaa',
                            margin: '0 0 15px 0'
                        }}
                    >
                        Our next livestream begins Sunday at 9:00 AM
                    </p>

                    <a
                        href="https://www.youtube.com/@aickiberakibera/streams"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Watch AIC Kibera YouTube livestreams"
                        style={{
                            height: '170px',
                            background: '#222',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '15px',
                            position: 'relative',
                            backgroundImage:
                                'url(/aickibera-church-image.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            textDecoration: 'none',
                            overflow: 'hidden'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                inset: '0',
                                background: 'rgba(0,0,0,0.5)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <div
                                className="shake-hover"
                                style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    background: '#ff0000',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow:
                                        '0 6px 20px rgba(0,0,0,0.35)'
                                }}
                            >
                                <i
                                    className="fa-solid fa-play"
                                    style={{
                                        fontSize: '25px',
                                        color: '#fff',
                                        marginLeft: '3px'
                                    }}
                                ></i>
                            </div>
                        </div>

                        <span
                            style={{
                                position: 'absolute',
                                left: '12px',
                                bottom: '10px',
                                background:
                                    'rgba(0,0,0,0.75)',
                                color: '#fff',
                                padding: '5px 9px',
                                borderRadius: '5px',
                                fontSize: '11px',
                                fontWeight: '600'
                            }}
                        >
                            Watch AIC Kibera on YouTube
                        </span>
                    </a>

                    <div
                        style={{
                            display: 'flex',
                            gap: '10px'
                        }}
                    >
                        <a
                            href="https://web.facebook.com/kiberaaic/"
                            target="_blank"
                            rel="noreferrer"
                            className="card-hover"
                            style={{
                                flex: 1,
                                background: '#1877f2',
                                color: '#fff',
                                padding: '8px',
                                borderRadius: '6px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                fontSize: '12px',
                                fontWeight: '600',
                                display: 'block'
                            }}
                        >
                            Facebook Live
                        </a>

                        <a
                            href="https://www.youtube.com/@aickiberakibera"
                            target="_blank"
                            rel="noreferrer"
                            className="card-hover"
                            style={{
                                flex: 1,
                                background: '#ff0000',
                                color: '#fff',
                                padding: '8px',
                                borderRadius: '6px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                fontSize: '12px',
                                fontWeight: '600',
                                display: 'block'
                            }}
                        >
                            YouTube Live
                        </a>
                    </div>
                </div>

                {/* ================= UPCOMING EVENTS ================= */}
                <div
                    style={{
                        background: '#fff',
                        borderRadius: '10px',
                        padding: '25px',
                        boxShadow:
                            '0 4px 12px rgba(0,0,0,0.05)'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '15px'
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '18px',
                                margin: 0,
                                color: '#111'
                            }}
                        >
                            Upcoming Events
                        </h3>

                        <Link
                            to="/events"
                            className="shake-hover"
                            style={{
                                fontSize: '12px',
                                color: '#b71c1c',
                                fontWeight: '600',
                                textDecoration: 'none'
                            }}
                        >
                            View All Events →
                        </Link>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        }}
                    >
                        {[
                            {
                                date: 'AUG 25',
                                title: 'Youth Conference 2025',
                                time: '10:00 AM - 4:00 PM',
                                link: '/events/youth-conference'
                            },
                            {
                                date: 'SEP 07',
                                title: 'Baptism Service',
                                time: '9:00 AM - 12:00 PM',
                                link: '/events/baptism-service'
                            },
                            {
                                date: 'SEP 14',
                                title: 'Thanksgiving Service',
                                time: '9:00 AM - 1:00 PM',
                                link: '/events/thanksgiving'
                            }
                        ].map((ev, idx) => (
                            <Link
                                key={idx}
                                to={ev.link}
                                className="card-hover"
                                style={{
                                    display: 'flex',
                                    gap: '12px',
                                    alignItems: 'center',
                                    padding: '8px',
                                    borderRadius: '6px',
                                    borderBottom:
                                        '1px solid #eee',
                                    textDecoration: 'none'
                                }}
                            >
                                <div
                                    style={{
                                        background: '#ffebee',
                                        color: '#b71c1c',
                                        padding: '8px 10px',
                                        borderRadius: '6px',
                                        fontWeight: '700',
                                        fontSize: '11px',
                                        textAlign: 'center',
                                        minWidth: '50px'
                                    }}
                                >
                                    {ev.date}
                                </div>
                                

                                <div
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <h4
                                        style={{
                                            fontSize: '13px',
                                            margin: '0 0 2px 0',
                                            color: '#111'
                                        }}
                                    >
                                        {ev.title}
                                    </h4>

                                    <p
                                        style={{
                                            fontSize: '11px',
                                            color: '#666',
                                            margin: 0
                                        }}
                                    >
                                        {ev.time}
                                    </p>
                                </div>

                                <i
                                    className="fa-solid fa-chevron-right"
                                    style={{
                                        color: '#b71c1c',
                                        fontSize: '11px'
                                    }}
                                ></i>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= FOOTER ================= */}
            <Footer />

            <WhatsAppFloat />
        </div>
    );
}