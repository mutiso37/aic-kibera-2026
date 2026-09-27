import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import SecureImage from '../components/SecureImage';

const ministryData = {
    women: {
        title: 'Women Ministry',
        icon: 'fa-person-dress',
        image: '/kiswahili-choir.png',
        intro: 'A fellowship where women grow spiritually, encourage one another and serve God and the church together.',
        vision: 'To nurture spiritually strong women who influence their families, church and community positively.',
        mission: 'To provide fellowship, prayer, mentorship and opportunities for women to serve God.',
        aim: 'To encourage spiritual growth, unity, service and meaningful fellowship among women.',
        activities: [
            'Prayer and fellowship',
            'Bible study',
            'Mentorship',
            'Community support',
            'Church service',
            'Special women programmes'
        ]
    },
    men: {
        title: 'Men Ministry',
        icon: 'fa-person',
        image: '/aickibera-church-image.png',
        intro: 'A ministry encouraging men to grow in faith, responsibility, leadership and Christian service.',
        vision: 'To raise godly men who serve Christ faithfully in their families, church and community.',
        mission: 'To strengthen men through fellowship, discipleship, prayer, mentorship and service.',
        aim: 'To build responsible, spiritually mature and committed Christian men.',
        activities: [
            'Men fellowship',
            'Prayer',
            'Bible study',
            'Mentorship',
            'Community service',
            'Leadership development'
        ]
    },
    youth: {
        title: 'Youth Ministry',
        icon: 'fa-people-group',
        image: '/ambassadors-choir.png',
        intro: 'A ministry helping young people grow in Christ, discover purpose and participate actively in church life.',
        vision: 'To see young people rooted in Christ and equipped to positively influence their generation.',
        mission: 'To provide spiritual growth, mentorship, fellowship, service and opportunities for young people.',
        aim: 'To develop young Christians who know Christ, serve faithfully and live with purpose.',
        activities: [
            'Bible study',
            'Youth fellowship',
            'Prayer',
            'Music and worship',
            'Outreach',
            'Mentorship',
            'Cadets',
            'Battalion'
        ]
    },
    children: {
        title: 'Children Ministry',
        icon: 'fa-child',
        image: '/aickibera-church-image.png',
        intro: 'A Christ-centred environment where children can learn the Word of God, worship and grow together.',
        vision: 'To nurture children who know, love and follow Christ.',
        mission: 'To teach children biblical truth while developing their gifts, character and relationship with God.',
        aim: 'To provide a safe, joyful and spiritually meaningful environment for children.',
        activities: [
            'Sunday School',
            'Bible teaching',
            'Prayer',
            'Worship',
            'Talent development',
            'Children fellowship',
            'Special children programmes'
        ]
    },
    media: {
        title: 'Media Ministry',
        icon: 'fa-camera',
        image: '/aickibera-church-image.png',
        intro: 'Serving A.I.C. Kibera through photography, videography, livestreaming, social media and digital communication.',
        vision: 'To use responsible technology and creative communication to extend the message of Christ beyond the church walls.',
        mission: 'To capture, preserve and communicate the ministry of A.I.C. Kibera through modern media.',
        aim: 'To provide reliable, professional and responsible media support for church services and activities.',
        activities: [
            'Photography',
            'Videography',
            'Livestreaming',
            'Social media',
            'Church announcements',
            'Digital content',
            'Event coverage',
            'Media archives'
        ]
    },
    projection: {
        title: 'Projection Ministry',
        icon: 'fa-display',
        image: '/aickibera-church-image.png',
        intro: 'Supporting worship services through projection, visual presentation and technical coordination.',
        vision: 'To provide clear, reliable and excellent visual support for worship and church communication.',
        mission: 'To faithfully operate projection systems and support church services through technology.',
        aim: 'To ensure that worshippers can clearly see lyrics, Scriptures, announcements and other approved content.',
        activities: [
            'Service projection',
            'Lyrics display',
            'Scripture display',
            'Announcements',
            'Presentation support',
            'Technical preparation',
            'Event projection'
        ]
    },
    evangelism: {
        title: 'Evangelism Ministry',
        icon: 'fa-bullhorn',
        image: '/aickibera-church-image.png',
        intro: 'Taking the Gospel beyond the church through outreach, evangelism, discipleship and community engagement.',
        vision: 'To see people reached with the Gospel and encouraged to become committed followers of Christ.',
        mission: 'To proclaim Christ, reach communities and support people in their journey of faith.',
        aim: 'To make the Gospel accessible through personal evangelism, outreach and practical service.',
        activities: [
            'Evangelistic outreach',
            'Community visits',
            'Personal evangelism',
            'Prayer outreach',
            'Discipleship',
            'Community engagement'
        ]
    }
};

const standardRules = [
    'Respect church leadership and fellow members.',
    'Attend ministry meetings and programmes faithfully.',
    'Serve with humility, integrity and unity.',
    'Observe approved church policies and ministry guidelines.',
    'Use church property and equipment responsibly.',
    'Maintain appropriate Christian conduct during ministry activities.',
    'Protect the dignity and privacy of fellow members.',
    'Represent A.I.C. Kibera respectfully when serving outside the church.'
];

export default function MinistryDetail({ ministry: propMinistry }) {
    const { ministry: routeMinistry } = useParams();
    
    // Normalize to lowercase to prevent case-sensitivity mismatches in URLs
    const rawMinistry = propMinistry || routeMinistry || '';
    const ministryKey = rawMinistry.toLowerCase();
    const data = ministryData[ministryKey];

    if (!data) {
        return (
            <>
                <Navbar />
                <main className="ministry-not-found">
                    <div className="container">
                        <div className="not-found-content">
                            <div className="not-found-icon">
                                <i className="fa-solid fa-church"></i>
                            </div>

                            <span className="section-kicker">
                                A.I.C. KIBERA
                            </span>

                            <h1>Ministry Not Found</h1>

                            <p>
                                The ministry you are looking for could not be found.
                                Please return to the Ministries page and select an
                                available ministry.
                            </p>

                            <Link to="/ministries" className="btn-primary">
                                <i className="fa-solid fa-arrow-left"></i>
                                Return to Ministries
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
                <WhatsAppFloat />
            </>
        );
    }

    return (
        <>
            <Navbar />

            <main className="ministry-detail-page">

                <section className="ministry-detail-hero">
                    <div
                        className="ministry-detail-bg"
                        style={{
                            backgroundImage: `url("${data.image}")`
                        }}
                    ></div>

                    <div className="ministry-detail-overlay"></div>

                    <div className="container ministry-detail-content">
                        <div className="ministry-detail-icon">
                            <i className={`fa-solid ${data.icon}`}></i>
                        </div>

                        <span className="eyebrow-light">
                            A.I.C. KIBERA MINISTRY
                        </span>

                        <h1>{data.title}</h1>

                        <p>{data.intro}</p>
                    </div>
                </section>

                <section className="ministry-about">
                    <div className="container ministry-two-column">

                        <div className="ministry-about-text">
                            <span className="section-kicker">
                                ABOUT THE MINISTRY
                            </span>

                            <h2>Serving God Together</h2>

                            <p>{data.intro}</p>

                            <p>
                                This ministry provides opportunities for members
                                to grow spiritually, build meaningful relationships
                                and contribute their gifts to the work of God and
                                the A.I.C. Kibera church family.
                            </p>
                        </div>

                        <div className="ministry-quote-box">
                            <i className="fa-solid fa-quote-left"></i>

                            <p>
                                Serving together, growing together and building
                                one another in Christ.
                            </p>

                            <span>A.I.C. Kibera</span>
                        </div>

                    </div>
                </section>

                <section className="ministry-purpose">
                    <div className="container">

                        <div className="section-heading-center">
                            <span className="section-kicker">
                                OUR PURPOSE
                            </span>

                            <h2>Vision, Mission &amp; Aim</h2>
                        </div>

                        <div className="ministry-purpose-grid">

                            <div className="purpose-card">
                                <div className="purpose-icon">
                                    <i className="fa-solid fa-eye"></i>
                                </div>

                                <span>VISION</span>

                                <h3>Our Vision</h3>

                                <p>{data.vision}</p>
                            </div>

                            <div className="purpose-card">
                                <div className="purpose-icon">
                                    <i className="fa-solid fa-bullseye"></i>
                                </div>

                                <span>MISSION</span>

                                <h3>Our Mission</h3>

                                <p>{data.mission}</p>
                            </div>

                            <div className="purpose-card">
                                <div className="purpose-icon">
                                    <i className="fa-solid fa-heart"></i>
                                </div>

                                <span>AIM</span>

                                <h3>Our Aim</h3>

                                <p>{data.aim}</p>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="ministry-activities">
                    <div className="container">

                        <div className="section-heading-center">
                            <span className="section-kicker">
                                WHAT WE DO
                            </span>

                            <h2>Ministry Activities</h2>

                            <p>
                                These are some of the key activities through which
                                this ministry serves A.I.C. Kibera.
                            </p>
                        </div>

                        <div className="activities-grid">
                            {data.activities.map((activity, index) => (
                                <div className="activity-card" key={`${activity}-${index}`}>
                                    <span className="activity-number">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <div className="activity-icon">
                                        <i className="fa-solid fa-check"></i>
                                    </div>

                                    <h3>{activity}</h3>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                <section className="ministry-leadership">
                    <div className="container">

                        <div className="section-heading-center">
                            <span className="section-kicker">
                                LEADERSHIP
                            </span>

                            <h2>Ministry Leadership</h2>

                            <p>
                                Official leadership information and photographs
                                will be added after confirmation by A.I.C. Kibera
                                administration.
                            </p>
                        </div>

                        <div className="generic-leadership-grid">

                            <div className="generic-leader-card">
                                <div className="generic-leader-photo">
                                    <i className="fa-solid fa-user"></i>
                                </div>

                                <span>MINISTRY LEADER</span>

                                <h3>Name to be confirmed</h3>
                            </div>

                            <div className="generic-leader-card">
                                <div className="generic-leader-photo">
                                    <i className="fa-solid fa-user"></i>
                                </div>

                                <span>ASSISTANT LEADER</span>

                                <h3>Name to be confirmed</h3>
                            </div>

                            <div className="generic-leader-card">
                                <div className="generic-leader-photo">
                                    <i className="fa-solid fa-user"></i>
                                </div>

                                <span>SECRETARY</span>

                                <h3>Name to be confirmed</h3>
                            </div>

                            <div className="generic-leader-card">
                                <div className="generic-leader-photo">
                                    <i className="fa-solid fa-user"></i>
                                </div>

                                <span>TREASURER</span>

                                <h3>Name to be confirmed</h3>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="ministry-gallery">
                    <div className="container">

                        <div className="section-heading-center">
                            <span className="section-kicker">
                                MEMORABLE MOMENTS
                            </span>

                            <h2>Ministry Memories</h2>

                            <p>
                                Ministry photographs can be added here as
                                activities and events take place.
                            </p>
                        </div>

                        <div className="generic-gallery-grid">

                            {[1, 2, 3].map((number) => (
                                <div className="gallery-placeholder" key={number}>
                                    <SecureImage
                                        src={data.image}
                                        alt={`${data.title} memory ${number}`}
                                        watermarkText="A.I.C. KIBERA"
                                    />

                                    <div className="gallery-overlay">
                                        <span>A.I.C. KIBERA</span>

                                        <i className="fa-solid fa-image"></i>

                                        <p>Ministry Memory</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                <section className="ministry-video">
                    <div className="container">

                        <div className="section-heading-center">
                            <span className="section-kicker">
                                VIDEO MEMORIES
                            </span>

                            <h2>Ministry Reels &amp; Videos</h2>

                            <p>
                                Select a video to play it. Videos do not autoplay.
                            </p>
                        </div>

                        <div className="video-placeholder-grid">

                            {[1, 2, 3].map((number) => (
                                <button
                                    className="video-placeholder"
                                    key={number}
                                    type="button"
                                    onClick={() => {
                                        alert(`Ministry video ${number} will be added here.`);
                                    }}
                                >
                                    <span className="video-play-icon">
                                        <i className="fa-solid fa-play"></i>
                                    </span>

                                    <span className="video-title">
                                        Play Ministry Video
                                    </span>

                                    <span className="video-subtitle">
                                        Video {number}
                                    </span>
                                </button>
                            ))}

                        </div>
                    </div>
                </section>

                <section className="ministry-rules">
                    <div className="container">

                        <div className="section-heading-center">
                            <span className="section-kicker">
                                MINISTRY STANDARDS
                            </span>

                            <h2>Rules &amp; Regulations</h2>

                            <p>
                                Ministry members are expected to observe the
                                following standards while serving within
                                A.I.C. Kibera.
                            </p>
                        </div>

                        <div className="rules-grid">

                            {standardRules.map((rule, index) => (
                                <div className="standard-rule" key={`${rule}-${index}`}>
                                    <span className="rule-number">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <i className="fa-solid fa-check"></i>

                                    <p>{rule}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                <section className="ministry-join">
                    <div className="container">

                        <div className="ministry-join-box">

                            <div className="ministry-join-content">
                                <span className="section-kicker">
                                    GET INVOLVED
                                </span>

                                <h2>
                                    Join {data.title}
                                </h2>

                                <p>
                                    Use your gifts, serve others and grow together
                                    as part of the A.I.C. Kibera family.
                                </p>
                            </div>

                            <Link
                                to="/registration"
                                className="btn-primary"
                            >
                                Join Ministry
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                        </div>
                    </div>
                </section>

            </main>

            <Footer />
            <WhatsAppFloat />
        </>
    );
}