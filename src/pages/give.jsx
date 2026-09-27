import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Give() {
    const [selectedCategory, setSelectedCategory] = useState('Tithe');
    const [customCategory, setCustomCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [mpesaCode, setMpesaCode] = useState('');

    const categories = ['Tithe', 'Offering', 'Thanksgiving', 'Dedication', 'Pledge', 'Donation', 'Building Fund'];

    const handleWhatsAppConfirm = (e) => {
        e.preventDefault();
        const accountType = selectedCategory === 'Other' ? (customCategory || 'Donation') : selectedCategory;
        const reverendPhone = "254757127975";
        
        const message = encodeURIComponent(
            ` Shalom AIC Kibera Finance Office,\n\n` +
            `I have made a contribution via M-Pesa Paybill:\n` +
            `🏢 *Paybill:* 657530\n` +
            `📂 *Account / Category:* ${accountType}\n` +
            `💰 *Amount:* KES ${amount || 'Not Specified'}\n` +
            `📱 *M-Pesa Code:* ${mpesaCode || 'Pending Code'}`
        );

        window.open(`https://wa.me/${reverendPhone}?text=${message}`, '_blank');
    };

    return (
        <div style={{ background: '#f4f6f8', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            {/* Embedded CSS Animations & Hover Styles */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
                .hover-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .hover-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 30px rgba(0,0,0,0.08) !important;
                }
                .hover-step {
                    transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
                }
                .hover-step:hover {
                    transform: translateY(-3px);
                    background-color: #fff !important;
                    border-color: #2d6a4f !important;
                    box-shadow: 0 6px 20px rgba(45, 106, 79, 0.08);
                }
                input:focus, select:focus, textarea:focus {
                    border-color: #2d6a4f !important;
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(45, 106, 79, 0.15);
                }
            `}</style>

            {/* Hero Header */}
            <div style={{ background: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("/aickibera-church-image.png")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '4.5rem 1rem', color: '#fff', textAlign: 'center' }}>
                <div className="container animate-fade-in" style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: 'clamp(28px, 4vw, 38px)', marginBottom: '10px', fontWeight: '800' }}>Tithes, Offerings & Giving</h1>
                    <p style={{ fontSize: '16px', color: '#ddd', lineHeight: '1.5' }}>"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7</p>
                </div>
            </div>

            {/* Main Giving Section */}
            <section className="py-5" style={{ background: '#f4f6f8', flex: 1, padding: '50px 15px' }}>
                <div className="container animate-fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    
                    {/* Main Paybill Banner */}
                    <div className="hover-card" style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.05)', borderTop: '5px solid #2d6a4f', marginBottom: '30px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                            <div style={{ display: 'inline-block', background: '#e8f5e9', color: '#2d6a4f', padding: '14px', borderRadius: '50%', marginBottom: '12px' }}>
                                <i className="fa-solid fa-mobile-screen-button" style={{ fontSize: '32px' }}></i>
                            </div>
                            <h2 style={{ color: '#1a1a1a', fontSize: '24px', fontWeight: '800', margin: '0 0 8px 0' }}>Official M-Pesa Giving Channel</h2>
                            <p style={{ color: '#666', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>
                                AIC Kibera utilizes a single official Paybill number for all tithes, offerings, thanksgivings, and church projects.
                            </p>
                        </div>

                        {/* Soft Green Paybill Card with Hover Effect */}
                        <div className="hover-card" style={{ background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)', color: '#fff', padding: '35px 20px', borderRadius: '10px', textAlign: 'center', marginBottom: '35px', boxShadow: '0 6px 20px rgba(27, 67, 50, 0.2)' }}>
                            <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#d8f3dc', display: 'block', marginBottom: '8px' }}>M-Pesa Business Paybill</span>
                            <div style={{ fontSize: 'clamp(36px, 6vw, 48px)', fontWeight: '800', letterSpacing: '3px', color: '#fff', marginBottom: '10px' }}>657530</div>
                            <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', marginBottom: '12px' }}>
                                <strong>Account Name:</strong> Specify category (Tithe, Offering, Thanksgiving, etc.)
                            </div>
                            <div style={{ fontSize: '13px', color: '#d8f3dc', fontStyle: 'italic' }}>
                                Available categories to type in account: <em>Tithe, Offering, Thanksgiving, Dedication, Pledge, Donation, Building Fund</em>
                            </div>
                        </div>

                        {/* Step-by-Step Instructions with Hover Effect */}
                        <h3 style={{ fontSize: '18px', color: '#1a1a1a', marginBottom: '15px', fontWeight: '700' }}>How to Give via M-Pesa:</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '35px' }}>
                            <div className="hover-step" style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                <span style={{ background: '#2d6a4f', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '13px', marginBottom: '10px' }}>1</span>
                                <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', color: '#1a1a1a' }}>Go to M-Pesa Menu</h4>
                                <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>Select Lipa na M-Pesa, then choose Paybill.</p>
                            </div>
                            <div className="hover-step" style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                <span style={{ background: '#2d6a4f', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '13px', marginBottom: '10px' }}>2</span>
                                <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', color: '#1a1a1a' }}>Enter Business No.</h4>
                                <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>Enter Business Paybill number <strong>657530</strong>.</p>
                            </div>
                            <div className="hover-step" style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                <span style={{ background: '#2d6a4f', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '13px', marginBottom: '10px' }}>3</span>
                                <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', color: '#1a1a1a' }}>Specify Account Name</h4>
                                <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>Type your giving category: Tithe, Offering, Thanksgiving, etc.</p>
                            </div>
                        </div>

                        {/* Interactive WhatsApp Confirmation Assistant */}
                        <div className="hover-card" style={{ background: '#f4f9f6', padding: '25px', borderRadius: '8px', border: '1px solid #c7e5d0', marginBottom: '30px' }}>
                            <h3 style={{ color: '#2d6a4f', fontSize: '18px', margin: '0 0 8px 0', fontWeight: '700' }}><i className="fa-solid fa-receipt"></i> Notify Finance Office via WhatsApp</h3>
                            <p style={{ fontSize: '13px', color: '#555', marginBottom: '20px' }}>
                                After completing your M-Pesa transaction, fill out the details below to generate and send a confirmation message to our church administration.
                            </p>

                            <form onSubmit={handleWhatsAppConfirm}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px', marginBottom: '15px' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#333' }}>Select Giving Category / Account *</label>
                                        <select 
                                            value={selectedCategory} 
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                            style={{ width: '100%', padding: '11px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px', background: '#fff', boxSizing: 'border-box' }}
                                        >
                                            {categories.map((cat, idx) => (
                                                <option key={idx} value={cat}>{cat}</option>
                                            ))}
                                            <option value="Other">Other (Specify)</option>
                                        </select>
                                    </div>

                                    {selectedCategory === 'Other' && (
                                        <div>
                                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#333' }}>Specify Custom Account *</label>
                                            <input 
                                                type="text" 
                                                value={customCategory} 
                                                onChange={(e) => setCustomCategory(e.target.value)} 
                                                placeholder="e.g. Special Project" 
                                                required 
                                                style={{ width: '100%', padding: '11px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px', background: '#fff', boxSizing: 'border-box' }}
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#333' }}>Amount (KES)</label>
                                        <input 
                                            type="number" 
                                            value={amount} 
                                            onChange={(e) => setAmount(e.target.value)} 
                                            placeholder="e.g. 1000" 
                                            style={{ width: '100%', padding: '11px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px', background: '#fff', boxSizing: 'border-box' }}
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#333' }}>M-Pesa Confirmation Code (Optional)</label>
                                    <input 
                                        type="text" 
                                        value={mpesaCode} 
                                        onChange={(e) => setMpesaCode(e.target.value)} 
                                        placeholder="e.g. QHX789PL2K" 
                                        style={{ width: '100%', padding: '11px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px', background: '#fff', boxSizing: 'border-box' }}
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    style={{ background: '#25d366', color: '#fff', border: 'none', padding: '13px 24px', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', transition: 'background 0.2s' }}
                                    onMouseOver={(e) => e.target.style.background = '#20ba5a'}
                                    onMouseOut={(e) => e.target.style.background = '#25d366'}
                                >
                                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i> Send Giving Notification via WhatsApp
                                </button>
                            </form>
                        </div>

                        {/* Bank Details Section with Hover Effect */}
                        <div className="hover-card" style={{ background: '#f9f9f9', padding: '25px', borderRadius: '8px', border: '1px solid #eee' }}>
                            <h3 style={{ color: '#1a1a1a', fontSize: '16px', margin: '0 0 8px 0', fontWeight: '700' }}>
                                <i className="fa-solid fa-building-columns" style={{ color: '#2d6a4f', marginRight: '8px' }}></i> Bank Transfer Information
                            </h3>
                            <p style={{ fontSize: '14px', color: '#333', margin: '0 0 6px 0' }}><strong>Account Number:</strong> XXXXXXX</p>
                            <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>
                                Enquire from administrator, or Reverend Fredrick Kiema for more details.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            <Footer />
            <WhatsAppFloat />
        </div>
    );
}