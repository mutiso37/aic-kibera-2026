import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
const leadershipRoles = [
'Chairman',
'Assistant Chairman',
'Secretary',
'Assistant Secretary',
'Treasurer',
'Assistant Treasurer',
'Music Director',
'Choir Leaders',
'Worship Leader',
'Other Approved Leaders'
];

const rules = [
'Members should maintain a Christ-centred attitude in all ministry activities.',
'Members should attend rehearsals and ministry programmes faithfully.',
'Members should respect ministry leadership and fellow members.',
'Music ministry activities should be carried out with humility, unity and discipline.',
'Members should handle church instruments and equipment responsibly.',
'Songs and performances should support the worship and mission of the church.',
'Members should maintain appropriate conduct during services, rehearsals and public ministry.',
'Any approved ministry rules should be observed by every member.'
];

const objectives = [
'Develop musical and worship gifts.',
'Encourage spiritual growth among members.',
'Promote unity among the different music teams.',
'Prepare members for effective ministry service.',
'Support worship services and church programmes.',
'Nurture upcoming musical talent.',
'Use music to communicate the Gospel.',
'Encourage excellence, humility and teamwork.'
];

const memories = [
{
image: '/ambassadors-choir.png',
title: 'Christ Ambassadors Choir',
text: 'A moment of fellowship, music and service.'
},
{
image: '/kiswahili-choir.png',
title: 'Kiswahili Choir',
text: 'Serving through Kiswahili praise and worship.'
},
{
image: '/aickibera-church-image.png',
title: 'Worship Together',
text: 'Celebrating fellowship as one church family.'
}
];

function WatermarkedImage({ src, alt }) {
return ( <div className="music-image-wrap"> <img src={src} alt={alt} />


        <div className="music-watermark">
            <img
                src="/aic-kibera-logo.png"
                alt="A.I.C. Kibera"
            />
        </div>
    </div>
);


}

function SongOfTheYear({
choir,
description,
image,
youtube
}) {
const getYouTubeEmbedUrl = (url) => {
if (!url) {
return '';
}


    try {
        const parsedUrl = new URL(url);

        let videoId = '';

        if (parsedUrl.hostname.includes('youtu.be')) {
            videoId = parsedUrl.pathname.replace('/', '');
        } else if (parsedUrl.hostname.includes('youtube.com')) {
            videoId = parsedUrl.searchParams.get('v') || '';
        }

        if (!videoId) {
            return '';
        }

        return `https://www.youtube.com/embed/${videoId}`;
    } catch {
        return '';
    }
};

const embedUrl = getYouTubeEmbedUrl(youtube);

return (
    <article className="song-year-card">

        <div className="song-year-media">

            <WatermarkedImage
                src={image}
                alt={choir}
            />

            <div className="song-play-icon">
                <i className="fa-solid fa-music"></i>
            </div>

        </div>

        <div className="song-year-content">

            <span className="section-kicker">
                FEATURED SONG
            </span>

            <h3>
                {choir}
            </h3>

            <h4>
                Song of the Year
            </h4>

            <p>
                {description}
            </p>

            {embedUrl && (
                <div className="song-video">

                    <iframe
                        src={embedUrl}
                        title={`${choir} Song of the Year`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />

                </div>
            )}

            {youtube && (
                <a
                    href={youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="youtube-button"
                >
                    <i className="fa-brands fa-youtube"></i>
                    Watch on YouTube
                </a>
            )}

        </div>

    </article>
);


}

export default function MusicMinistry() {
return (
<> <Navbar />


        <main className="music-ministry-page">

            {/* HERO */}
            <section className="music-hero">

                <div className="music-hero-overlay"></div>

                <div className="container music-hero-content">

                    <span className="eyebrow-light">
                        A.I.C. KIBERA
                    </span>

                    <h1>
                        Music Ministry
                    </h1>

                    <p>
                        Worshipping God, nurturing gifts and
                        proclaiming the Gospel through music.
                    </p>

                    <div className="music-hero-buttons">

                        <a
                            href="#song-of-the-year"
                            className="music-btn-primary"
                        >
                            Explore Our Music
                        </a>

                        <a
                            href="#join-music"
                            className="music-btn-outline"
                        >
                            Join the Ministry
                        </a>

                    </div>

                </div>

            </section>

            {/* INTRO */}
            <section className="music-about">

                <div className="container music-two-column">

                    <div>

                        <span className="section-kicker">
                            ABOUT THE MINISTRY
                        </span>

                        <h2>
                            Music That Serves a Purpose
                        </h2>

                        <p>
                            The Music Ministry brings together people
                            gifted and passionate about worship, praise,
                            singing and musical service.
                        </p>

                        <p>
                            Through Praise &amp; Worship, Kiswahili Choir
                            and Christ Ambassadors Choir, the ministry
                            creates opportunities for members to use
                            their gifts in service to God and the church.
                        </p>

                    </div>

                    <div className="music-scripture-card">

                        <i className="fa-solid fa-quote-left"></i>

                        <blockquote>
                            "Let everything that has breath praise
                            the Lord."
                        </blockquote>

                        <span>
                            Psalm 150:6
                        </span>

                    </div>

                </div>

            </section>

            {/* VISION / MISSION / AIM */}
            <section className="music-purpose">

                <div className="container">

                    <div className="purpose-grid">

                        <div className="purpose-card">

                            <i className="fa-solid fa-eye"></i>

                            <h3>
                                Vision
                            </h3>

                            <p>
                                To cultivate a Christ-centred music
                                ministry that glorifies God and
                                encourages people through worship.
                            </p>

                        </div>

                        <div className="purpose-card">

                            <i className="fa-solid fa-bullseye"></i>

                            <h3>
                                Mission
                            </h3>

                            <p>
                                To serve God faithfully through music,
                                develop musical gifts and help lead
                                people toward Christ.
                            </p>

                        </div>

                        <div className="purpose-card">

                            <i className="fa-solid fa-heart"></i>

                            <h3>
                                Aim
                            </h3>

                            <p>
                                To raise disciplined, united and
                                spiritually growing worshippers who
                                serve with excellence and humility.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* OBJECTIVES */}
            <section className="music-objectives">

                <div className="container">

                    <div className="section-heading-center">

                        <span className="section-kicker">
                            OUR OBJECTIVES
                        </span>

                        <h2>
                            Growing Through Music Ministry
                        </h2>

                    </div>

                    <div className="objectives-grid">

                        {objectives.map((objective, index) => (
                            <div
                                className="objective-item"
                                key={objective}
                            >

                                <span>
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <p>
                                    {objective}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* TEAMS */}
            <section className="music-teams">

                <div className="container">

                    <div className="section-heading-center">

                        <span className="section-kicker">
                            OUR TEAMS
                        </span>

                        <h2>
                            Three Expressions of Worship
                        </h2>

                    </div>

                    <div className="music-team-grid">

                        <article className="music-team-card">

                            <WatermarkedImage
                                src="/ambassadors-choir.png"
                                alt="Christ Ambassadors Choir"
                            />

                            <div>

                                <span>
                                    CHOIR
                                </span>

                                <h3>
                                    Christ Ambassadors Choir
                                </h3>

                                <p>
                                    Serving God through gospel music,
                                    fellowship and ministry.
                                </p>

                                <a
                                    href="https://www.youtube.com/@ChristAmbassadorsChoirkibera"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit YouTube
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>

                            </div>

                        </article>

                        <article className="music-team-card">

                            <WatermarkedImage
                                src="/kiswahili-choir.png"
                                alt="Kiswahili Choir"
                            />

                            <div>

                                <span>
                                    CHOIR
                                </span>

                                <h3>
                                    Kiswahili Choir
                                </h3>

                                <p>
                                    Serving through Kiswahili songs
                                    of praise, worship and fellowship.
                                </p>

                                <a
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Watch Music
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>

                            </div>

                        </article>

                        <article className="music-team-card">

                            <WatermarkedImage
                                src="/aickibera-church-image.png"
                                alt="Praise and Worship"
                            />

                            <div>

                                <span>
                                    WORSHIP TEAM
                                </span>

                                <h3>
                                    Praise &amp; Worship
                                </h3>

                                <p>
                                    Leading the congregation in praise,
                                    worship and musical ministry.
                                </p>

                                <a href="#join-music">
                                    Join the Team
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>

                            </div>

                        </article>

                    </div>

                </div>

            </section>

            {/* PROGRAMME */}
            <section className="music-programme">

                <div className="container">

                    <div className="section-heading-center">

                        <span className="section-kicker">
                            MUSIC PROGRAMME
                        </span>

                        <h2>
                            When We Practice &amp; Serve
                        </h2>

                    </div>

                    <div className="music-schedule">

                        <div>
                            <span>
                                Tuesday
                            </span>

                            <strong>
                                Christ Ambassadors Choir Practice
                            </strong>
                        </div>

                        <div>
                            <span>
                                Wednesday
                            </span>

                            <strong>
                                Kiswahili Choir Practice
                            </strong>
                        </div>

                        <div>
                            <span>
                                Thursday
                            </span>

                            <strong>
                                Praise &amp; Worship Practice — From 5:00 PM
                            </strong>
                        </div>

                        <div>
                            <span>
                                Saturday
                            </span>

                            <strong>
                                All Choirs Practice — From 5:00 PM
                            </strong>
                        </div>

                    </div>

                </div>

            </section>

            {/* SONG OF THE YEAR */}
            <section
                className="song-of-year"
                id="song-of-the-year"
            >

                <div className="container">

                    <div className="section-heading-center">

                        <span className="section-kicker">
                            MUSIC HIGHLIGHTS
                        </span>

                        <h2>
                            Songs of the Year
                        </h2>

                        <p>
                            Celebrate the songs currently highlighted
                            by our choir ministries.
                        </p>

                    </div>

                    <div className="songs-year-grid">

                        <SongOfTheYear
                            choir="Christ Ambassadors Choir"
                            image="/ambassadors-choir.png"
                            description="Featured music from the A.I.C. Kibera Christ Ambassadors Choir."
                            youtube="https://youtu.be/nvE4iYpYO2w?list=PLfd4v8Y6Ciy4pxRa8ldRySWXSoBOw3nZG"
                        />

                        <SongOfTheYear
                            choir="Kiswahili Choir"
                            image="/kiswahili-choir.png"
                            description="Featured Kiswahili music from the A.I.C. Kibera choir ministry."
                            youtube="https://youtu.be/pVgUurOD4ZM?list=RDpVgUurOD4ZM"
                        />

                    </div>

                </div>

            </section>

            {/* LEADERSHIP */}
            <section className="music-leadership">

                <div className="container">

                    <div className="section-heading-center">

                        <span className="section-kicker">
                            LEADERSHIP
                        </span>

                        <h2>
                            Ministry Leadership
                        </h2>

                        <p>
                            Leadership names and photographs will be
                            added after they are confirmed by the
                            church administration.
                        </p>

                    </div>

                    <div className="leadership-placeholder-grid">

                        {leadershipRoles.map((role) => (
                            <div
                                className="leader-placeholder"
                                key={role}
                            >

                                <div className="leader-photo">

                                    <i className="fa-solid fa-user"></i>

                                    <div className="leader-watermark">
                                        A.I.C. KIBERA
                                    </div>

                                </div>

                                <span>
                                    {role}
                                </span>

                                <h3>
                                    Name to be confirmed
                                </h3>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* MEMORABLE MOMENTS */}
            <section className="music-memories">

                <div className="container">

                    <div className="section-heading-center">

                        <span className="section-kicker">
                            MEMORABLE MOMENTS
                        </span>

                        <h2>
                            Moments We Treasure
                        </h2>

                    </div>

                    <div className="memory-grid">

                        {memories.map((memory) => (
                            <article
                                className="memory-card"
                                key={memory.title}
                            >

                                <WatermarkedImage
                                    src={memory.image}
                                    alt={memory.title}
                                />

                                <div className="memory-content">

                                    <h3>
                                        {memory.title}
                                    </h3>

                                    <p>
                                        {memory.text}
                                    </p>

                                </div>

                            </article>
                        ))}

                    </div>

                </div>

            </section>

            {/* VIDEO / REELS */}
            <section className="music-reels">

                <div className="container">

                    <div className="section-heading-center">

                        <span className="section-kicker">
                            VIDEO MEMORIES
                        </span>

                        <h2>
                            Reels &amp; Worship Moments
                        </h2>

                        <p>
                            Videos will play only when visitors choose
                            to watch them.
                        </p>

                    </div>

                    <div className="reels-placeholder-grid">

                        <div className="reel-placeholder">

                            <i className="fa-solid fa-play"></i>

                            <h3>
                                Worship Reel
                            </h3>

                            <p>
                                Video placeholder
                            </p>

                        </div>

                        <div className="reel-placeholder">

                            <i className="fa-solid fa-play"></i>

                            <h3>
                                Choir Performance
                            </h3>

                            <p>
                                Video placeholder
                            </p>

                        </div>

                        <div className="reel-placeholder">

                            <i className="fa-solid fa-play"></i>

                            <h3>
                                Ministry Memory
                            </h3>

                            <p>
                                Video placeholder
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* RULES */}
            <section className="music-rules">

                <div className="container music-two-column">

                    <div>

                        <span className="section-kicker">
                            MINISTRY STANDARDS
                        </span>

                        <h2>
                            Rules &amp; Regulations
                        </h2>

                        <p>
                            These guidelines are intended to help the
                            ministry serve with unity, discipline,
                            humility and excellence.
                        </p>

                    </div>

                    <div className="rules-list">

                        {rules.map((rule) => (
                            <div
                                className="rule-row"
                                key={rule}
                            >

                                <span>
                                    <i className="fa-solid fa-check"></i>
                                </span>

                                <p>
                                    {rule}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* JOIN */}
            <section
                className="join-music"
                id="join-music"
            >

                <div className="container">

                    <div className="join-music-box">

                        <div>

                            <span className="section-kicker">
                                SERVE WITH US
                            </span>

                            <h2>
                                Join the Music Ministry
                            </h2>

                            <p>
                                If you have a heart for worship,
                                singing, instruments or supporting
                                music ministry, we would love to hear
                                from you.
                            </p>

                        </div>

                        <Link
                            to="/register"
                            className="btn-primary"
                        >
                            Join Music Ministry
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
