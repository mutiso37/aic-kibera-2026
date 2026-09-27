import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Announcements() {
    const announcements = [
        {
            title: 'Church Services',
            date: 'Every Sunday',
            icon: 'fa-church',
            text: 'Join us for worship, fellowship, prayer and the preaching of God’s Word.'
        },
        {
            title: 'Youth Ministry',
            date: 'Weekly',
            icon: 'fa-users',
            text: 'Our youth ministry provides fellowship, discipleship and opportunities for young people to grow in Christ.'
        },
        {
            title: 'Prayer & Fellowship',
            date: 'Weekly',
            icon: 'fa-hands-praying',
            text: 'Come together with the church family for prayer, encouragement and spiritual growth.'
        },
        {
            title: 'Church Community',
            date: 'Ongoing',
            icon: 'fa-heart',
            text: 'We encourage every member to participate in ministry, fellowship and service within our community.'
        }
    ];

    return (
        <>
            <Navbar />

            <main style={{
                minHeight: '70vh',
                background: '#f8f9fa',
                padding: '80px 20px'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>

                    <div style={{
                        textAlign: 'center',
                        marginBottom: '55px'
                    }}>
                        <span style={{
                            color: '#b22222',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}>
                            Stay Connected
                        </span>

                        <h1 style={{
                            fontSize: '42px',
                            margin: '12px 0',
                            color: '#222'
                        }}>
                            Church Announcements
                        </h1>

                        <p style={{
                            maxWidth: '700px',
                            margin: '0 auto',
                            color: '#666',
                            lineHeight: '1.8'
                        }}>
                            Stay informed about activities, fellowship opportunities,
                            ministry programs and important updates from AIC Kibera.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '25px'
                    }}>
                        {announcements.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    background: '#fff',
                                    padding: '30px',
                                    borderRadius: '12px',
                                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                    borderTop: '4px solid #b22222'
                                }}
                            >
                                <div style={{
                                    width: '55px',
                                    height: '55px',
                                    borderRadius: '50%',
                                    background: '#f3e5e5',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '20px'
                                }}>
                                    <i
                                        className={`fa-solid ${item.icon}`}
                                        style={{
                                            color: '#b22222',
                                            fontSize: '22px'
                                        }}
                                    ></i>
                                </div>

                                <small style={{
                                    color: '#b22222',
                                    fontWeight: '700'
                                }}>
                                    {item.date}
                                </small>

                                <h2 style={{
                                    fontSize: '23px',
                                    margin: '10px 0'
                                }}>
                                    {item.title}
                                </h2>

                                <p style={{
                                    color: '#666',
                                    lineHeight: '1.7'
                                }}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        textAlign: 'center',
                        marginTop: '50px'
                    }}>
                        <Link
                            to="/events"
                            style={{
                                display: 'inline-block',
                                padding: '14px 28px',
                                background: '#b22222',
                                color: '#fff',
                                textDecoration: 'none',
                                borderRadius: '6px',
                                fontWeight: '700'
                            }}
                        >
                            View Church Events
                        </Link>
                    </div>

                </div>
            </main>

            <Footer />
            <WhatsAppFloat />
        </>
    );
}