import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function WatchLive() {
    return (
        <div style={{
            minHeight: '100vh',
            background: '#f4f6f9',
            fontFamily: 'Inter, sans-serif',
            color: '#333'
        }}>
            <Navbar />

            <main style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '40px 20px 70px'
            }}>

                <div style={{
                    textAlign: 'center',
                    marginBottom: '30px'
                }}>
                    <span style={{
                        display: 'inline-block',
                        background: '#ffebee',
                        color: '#b71c1c',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '800',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                    }}>
                        AIC Kibera Online
                    </span>

                    <h1 style={{
                        fontSize: '38px',
                        margin: '12px 0 8px',
                        color: '#111',
                        fontWeight: '800'
                    }}>
                        Worship With Us Online
                    </h1>

                    <p style={{
                        maxWidth: '650px',
                        margin: '0 auto',
                        color: '#666',
                        fontSize: '14px',
                        lineHeight: '1.7'
                    }}>
                        Join AIC Kibera for worship, preaching, prayer and fellowship online.
                    </p>
                </div>

                <section style={{
                    background: '#111',
                    borderRadius: '14px',
                    padding: '25px',
                    boxShadow: '0 12px 35px rgba(0,0,0,0.14)'
                }}>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '15px',
                        flexWrap: 'wrap',
                        marginBottom: '18px'
                    }}>
                        <div>
                            <h2 style={{
                                color: '#fff',
                                margin: 0,
                                fontSize: '20px'
                            }}>
                                AIC Kibera Live
                            </h2>

                            <p style={{
                                color: '#aaa',
                                margin: '5px 0 0',
                                fontSize: '12px'
                            }}>
                                Watch the latest AIC Kibera livestream on YouTube.
                            </p>
                        </div>

                        <span style={{
                            background: '#2b1111',
                            color: '#ff5252',
                            border: '1px solid #5b2222',
                            padding: '6px 10px',
                            borderRadius: '20px',
                            fontSize: '11px',
                            fontWeight: '700'
                        }}>
                            ● LIVE CHANNEL
                        </span>
                    </div>

                    <a
                        href="https://www.youtube.com/@aickiberakibera/streams"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            minHeight: '420px',
                            borderRadius: '10px',
                            backgroundImage:
                                "linear-gradient(rgba(0,0,0,.52), rgba(0,0,0,.72)), url('/aickibera-church-image.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            color: '#fff'
                        }}
                    >
                        <div style={{
                            width: '78px',
                            height: '78px',
                            borderRadius: '50%',
                            background: '#ff0000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 25px rgba(0,0,0,.4)'
                        }}>
                            <i
                                className="fa-solid fa-play"
                                style={{
                                    fontSize: '30px',
                                    marginLeft: '4px'
                                }}
                            ></i>
                        </div>

                        <h3 style={{
                            margin: '18px 0 6px',
                            fontSize: '22px'
                        }}>
                            Open Current YouTube Stream
                        </h3>

                        <p style={{
                            margin: 0,
                            color: '#ddd',
                            fontSize: '13px'
                        }}>
                            Watch the current AIC Kibera broadcast.
                        </p>
                    </a>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '12px',
                        marginTop: '15px'
                    }}>

                        <a
                            href="https://www.youtube.com/@aickiberakibera/streams"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                background: '#ff0000',
                                color: '#fff',
                                padding: '13px',
                                borderRadius: '7px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                fontSize: '13px',
                                fontWeight: '700'
                            }}
                        >
                            <i
                                className="fa-brands fa-youtube"
                                style={{ marginRight: '7px' }}
                            ></i>
                            YouTube Live
                        </a>

                        <a
                            href="https://web.facebook.com/kiberaaic/"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                background: '#1877f2',
                                color: '#fff',
                                padding: '13px',
                                borderRadius: '7px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                fontSize: '13px',
                                fontWeight: '700'
                            }}
                        >
                            <i
                                className="fa-brands fa-facebook"
                                style={{ marginRight: '7px' }}
                            ></i>
                            Facebook Live
                        </a>

                    </div>
                </section>

                <section style={{
                    marginTop: '25px',
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '25px',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.05)'
                }}>
                    <h2 style={{
                        margin: '0 0 15px',
                        color: '#111',
                        fontSize: '20px'
                    }}>
                        Service Schedule
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '12px'
                    }}>

                        <div style={{
                            padding: '15px',
                            background: '#f8f9fa',
                            borderRadius: '8px'
                        }}>
                            <strong>Sunday Worship</strong>
                            <div style={{
                                color: '#666',
                                fontSize: '13px',
                                marginTop: '5px'
                            }}>
                                9:00 AM – 12:00 PM
                            </div>
                        </div>

                        <div style={{
                            padding: '15px',
                            background: '#f8f9fa',
                            borderRadius: '8px'
                        }}>
                            <strong>Bible Study</strong>
                            <div style={{
                                color: '#666',
                                fontSize: '13px',
                                marginTop: '5px'
                            }}>
                                Wednesday 6:00 PM
                            </div>
                        </div>

                        <div style={{
                            padding: '15px',
                            background: '#f8f9fa',
                            borderRadius: '8px'
                        }}>
                            <strong>Prayer Meeting</strong>
                            <div style={{
                                color: '#666',
                                fontSize: '13px',
                                marginTop: '5px'
                            }}>
                                Friday 6:00 PM
                            </div>
                        </div>

                    </div>
                </section>

            </main>

            <Footer />
            <WhatsAppFloat />
        </div>
    );
}