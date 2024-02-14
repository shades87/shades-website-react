import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBar from "../components/AppBar.jsx"
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import SleepyheadApp from "../pages/SleepyheadApp.js";
import SleepyheadPrivacy from "../pages/SleepyheadPrivacyPolicy.js"

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route element={<AppBar/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/sleepyhead-app" element={<SleepyheadApp />} />
                    <Route path="/sleepyhead-privacy-policy.html" element={<SleepyheadPrivacy />} />
                </Route>
            </Routes>
        </Router>
    )
}