import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Departments() {
    return (
        <div>
            <Navbar />

            <div style={{ background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/kiswahili-choir.png")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '5rem 0', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '38px', marginBottom: '10px' }}>Ministries & Departments</h1>
                    <p style={{ fontSize: '16px', color: '#ddd' }}>Explore our active church departments and find where God is calling you to serve.</p>
                </div>
            </div>

            <section className="py-5" style={{ background: '#ffffff' }}>
                <div className="container">
                    <div className="grid-3">
                        <div style={{ background: '#f9f9f9', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #b71c1c' }}>
                            <h3 style={{ marginBottom: '10px', color: '#1a1a1a' }}>Music Ministry</h3>
                            <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>Comprising the Ambassadors Choir and Kiswahili Choir, leading powerful worship during Sunday services.</p>
                            <span style={{ color: '#b71c1c', fontWeight: 'bold', fontSize: '13px' }}>Active Every Sunday</span>
                        </div>
                        <div style={{ background: '#f9f9f9', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #1a1a1a' }}>
                            <h3 style={{ marginBottom: '10px', color: '#1a1a1a' }}>Youth & Teens Ministry</h3>
                            <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>Equipping the youth with godly counsel, mentorship, and Friday evening cell fellowship sessions.</p>
                            <span style={{ color: '#1a1a1a', fontWeight: 'bold', fontSize: '13px' }}>Friday: 5:00 PM</span>
                        </div>
                        <div style={{ background: '#f9f9f9', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #b71c1c' }}>
                            <h3 style={{ marginBottom: '10px', color: '#1a1a1a' }}>Women Ministry (WOFAK / Dorcas)</h3>
                            <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>Fostering spiritual growth, welfare support, and home-building initiatives among women.</p>
                            <span style={{ color: '#b71c1c', fontWeight: 'bold', fontSize: '13px' }}>Thursday Fellowship</span>
                        </div>
                        <div style={{ background: '#f9f9f9', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #1a1a1a' }}>
                            <h3 style={{ marginBottom: '10px', color: '#1a1a1a' }}>Men Ministry (PKF)</h3>
                            <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>Building godly fathers, husbands, and societal leaders through prayer and brotherhood.</p>
                            <span style={{ color: '#1a1a1a', fontWeight: 'bold', fontSize: '13px' }}>Saturday Meetings</span>
                        </div>
                        <div style={{ background: '#f9f9f9', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #b71c1c' }}>
                            <h3 style={{ marginBottom: '10px', color: '#1a1a1a' }}>Children Church</h3>
                            <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>Nurturing little ones in Sunday School with foundational scriptural teachings and fun activities.</p>
                            <span style={{ color: '#b71c1c', fontWeight: 'bold', fontSize: '13px' }}>Sunday: 9:00 AM</span>
                        </div>
                        <div style={{ background: '#f9f9f9', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #1a1a1a' }}>
                            <h3 style={{ marginBottom: '10px', color: '#1a1a1a' }}>Media & Tech Ministry</h3>
                            <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>Handling live streaming, public address, sound engineering, and digital communications.</p>
                            <span style={{ color: '#1a1a1a', fontWeight: 'bold', fontSize: '13px' }}>Every Service</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppFloat />
        </div>
    );
}