import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ResumeSection from "../features/resume/ResumeSection";

const Resume = () => {
    return (
        <div className="page-shell">
            {/* Back link */}
            <Link to="/" className="btn-back">
                ← Home
            </Link>

            <ResumeSection />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Resume