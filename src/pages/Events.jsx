import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
export default function Events() {
    return (
        <>
            <Navbar />

            <main>

                {/* PAGE HERO */}
                <section
                    style={{
                        minHeight: '320px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '60px 20px',
                        background:
                            'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("/aickibera-church-image.png") center/cover'
                    }}
                >
                    <div style={{ color: '#fff' }}>
                        <h1
                            style={{
                                fontSize: 'clamp(36px, 6vw, 64px)',
                                marginBottom: '15px',
                                fontWeight: '800'
                            }}
                        >
                            Events
                        </h1>

                        <p
                            style={{
                                fontSize: '18px',
                                maxWidth: '700px',
                                margin: '0 auto'
                            }}
                        >
                            Discover upcoming services, conferences,
                            celebrations and church activities at AIC Kibera.
                        </p>
                    </div>
                </section>

                {/* EVENTS */}
                <section
                    style={{
                        padding: '70px 20px',
                        background: '#f8f9fa'
                    }}
                >
                    <div
                        style={{
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}
                    >

                        <div
                            style={{
                                textAlign: 'center',
                                marginBottom: '45px'
                            }}
                        >
                            <h2>Upcoming Events</h2>

                            <p>
                                Join us as we worship, fellowship,
                                learn and serve together.
                            </p>
                        </div>

                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '25px'
                            }}
                        >

                            {/* YOUTH CONFERENCE */}
                            <div
                                style={{
                                    background: '#fff',
                                    padding: '30px',
                                    borderRadius: '12px',
                                    boxShadow:
                                        '0 5px 20px rgba(0,0,0,0.08)'
                                }}
                            >
                                <i
                                    className="fa-solid fa-users"
                                    style={{
                                        fontSize: '35px',
                                        marginBottom: '20px'
                                    }}
                                ></i>

                                <h3>Youth Conference</h3>

                                <p>
                                    A special gathering designed to
                                    encourage, equip and empower young
                                    people in their walk with Christ.
                                </p>

                                <Link
                                    to="/events/youth-conference"
                                    style={{
                                        display: 'inline-block',
                                        marginTop: '15px'
                                    }}
                                >
                                    Learn More
                                </Link>
                            </div>

                            {/* BAPTISM */}
                            <div
                                style={{
                                    background: '#fff',
                                    padding: '30px',
                                    borderRadius: '12px',
                                    boxShadow:
                                        '0 5px 20px rgba(0,0,0,0.08)'
                                }}
                            >
                                <i
                                    className="fa-solid fa-water"
                                    style={{
                                        fontSize: '35px',
                                        marginBottom: '20px'
                                    }}
                                ></i>

                                <h3>Baptism Service</h3>

                                <p>
                                    Celebrating believers taking an
                                    important step of faith through
                                    baptism.
                                </p>

                                <Link
                                    to="/events/baptism-service"
                                    style={{
                                        display: 'inline-block',
                                        marginTop: '15px'
                                    }}
                                >
                                    Learn More
                                </Link>
                            </div>

                            {/* THANKSGIVING */}
                            <div
                                style={{
                                    background: '#fff',
                                    padding: '30px',
                                    borderRadius: '12px',
                                    boxShadow:
                                        '0 5px 20px rgba(0,0,0,0.08)'
                                }}
                            >
                                <i
                                    className="fa-solid fa-hands-praying"
                                    style={{
                                        fontSize: '35px',
                                        marginBottom: '20px'
                                    }}
                                ></i>

                                <h3>Thanksgiving Service</h3>

                                <p>
                                    A time for the church family to
                                    gather and give thanks to God for
                                    His faithfulness.
                                </p>

                                <Link
                                    to="/events/thanksgiving"
                                    style={{
                                        display: 'inline-block',
                                        marginTop: '15px'
                                    }}
                                >
                                    Learn More
                                </Link>
                            </div>

                        </div>

                    </div>
                </section>

            </main>

            <Footer />
            <WhatsAppFloat />
        </>
    );
}