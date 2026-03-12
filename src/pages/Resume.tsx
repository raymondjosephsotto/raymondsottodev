import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ResumeSection from "../features/resume/ResumeSection";

const Resume = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Back link */}
            <Link to="/" style={{ width: 'fit-content', margin: '24px var(--px) 0', color: 'var(--sand)', fontSize: '13px', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                ← Home
            </Link>

            <ResumeSection />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Resume