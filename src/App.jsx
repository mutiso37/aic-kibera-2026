import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// =========================
// MAIN PAGES
// =========================
import Home from './pages/home';
import About from './pages/about';
import Leadership from './pages/leadership';

import Ministries from './pages/ministries';
import MusicMinistry from './pages/MusicMinistry';
import MinistryDetail from './pages/MinistryDetail';

import Departments from './pages/departments';
import Events from './pages/Events';
import Announcements from './pages/Announcements';
import WatchLive from './pages/WatchLive';
import Registration from './pages/Registration';
import Give from './pages/give';
import Contact from './pages/contact';
import Gallery from './pages/Gallery';

// =========================
// SERVICES
// =========================
import FirstTime from './pages/FirstTime';
import Welcome from './pages/welcome';
import Programme from './pages/programme';

// ScrollToTop helper component to reset scroll position on route change
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return null;
}

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>

                {/* =========================
                    HOME
                ========================= */}
                <Route
                    path="/"
                    element={<Home />}
                />


                {/* =========================
                    ABOUT
                ========================= */}
                <Route
                    path="/about"
                    element={<About />}
                />


                {/* =========================
                    LEADERSHIP
                ========================= */}
                <Route
                    path="/leadership"
                    element={<Leadership />}
                />


                {/* =========================
                    MINISTRIES
                ========================= */}

                <Route
                    path="/ministries"
                    element={<Ministries />}
                />

                <Route
                    path="/ministries/music"
                    element={<MusicMinistry />}
                />

                <Route
                    path="/ministries/women"
                    element={<MinistryDetail ministry="women" />}
                />

                <Route
                    path="/ministries/men"
                    element={<MinistryDetail ministry="men" />}
                />

                <Route
                    path="/ministries/youth"
                    element={<MinistryDetail ministry="youth" />}
                />

                <Route
                    path="/ministries/children"
                    element={<MinistryDetail ministry="children" />}
                />

                <Route
                    path="/ministries/media"
                    element={<MinistryDetail ministry="media" />}
                />

                <Route
                    path="/ministries/projection"
                    element={<MinistryDetail ministry="projection" />}
                />

                <Route
                    path="/ministries/evangelism"
                    element={<MinistryDetail ministry="evangelism" />}
                />


                {/* =========================
                    CHURCH GALLERY
                ========================= */}
                <Route
                    path="/gallery"
                    element={<Gallery />}
                />


                {/* =========================
                    DEPARTMENTS
                ========================= */}
                <Route
                    path="/departments"
                    element={<Departments />}
                />


                {/* =========================
                    EVENTS
                ========================= */}
                <Route
                    path="/events"
                    element={<Events />}
                />

                <Route
                    path="/events/youth-conference"
                    element={<Events />}
                />

                <Route
                    path="/events/baptism-service"
                    element={<Events />}
                />

                <Route
                    path="/events/thanksgiving"
                    element={<Events />}
                />


                {/* =========================
                    ANNOUNCEMENTS
                ========================= */}
                <Route
                    path="/announcements"
                    element={<Announcements />}
                />


                {/* =========================
                    WATCH LIVE
                ========================= */}
                <Route
                    path="/watch-live"
                    element={<WatchLive />}
                />


                {/* =========================
                    MEMBERSHIP
                ========================= */}
                <Route
                    path="/register"
                    element={<Registration />}
                />


                {/* =========================
                    GIVING
                ========================= */}
                <Route
                    path="/give"
                    element={<Give />}
                />


                {/* =========================
                    CONTACT
                ========================= */}
                <Route
                    path="/contact"
                    element={<Contact />}
                />


                {/* =========================
                    SERVICES
                ========================= */}
                <Route
                    path="/first-time"
                    element={<FirstTime />}
                />

                <Route
                    path="/welcome"
                    element={<Welcome />}
                />

                <Route
                    path="/programme"
                    element={<Programme />}
                />


                {/* =========================
                    FALLBACK
                ========================= */}
                <Route
                    path="*"
                    element={<Home />}
                />

            </Routes>
        </Router>
    );
}