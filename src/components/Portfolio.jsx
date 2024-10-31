import {lyfordResearch, comingSoon, mentorMenteeSystem, automatedEmailFinder} from '../assets';

const Portfolio = () => {
    return (
        <div className='section'>
            <h1 className="subt-title">
                My Work
            </h1>
            <div className="work-list">
            <div className="work">
                <img
                    src = {automatedEmailFinder}
                />
                <div className="layer">
                    <h3>
                        Automated Email Finder System
                    </h3>
                    <p>
                        The AEFS (Automated Email Finder System) finds emails from websites of over 90,000 K-12 public schools across the United States.
                    </p>
                    <a
                        href = "https://crescendoforacause.com/tools/email-finder-system"
                    >
                        <i
                            className="fa-solid fa-arrow-up-right-from-square">
                        </i>
                    </a>
                </div>
            </div>
            <div className="work">
                    <img
                        src = {mentorMenteeSystem}
                    />
                    <div className="layer">
                        <h3>
                            Mentor Mentee Matchmaking System
                        </h3>
                        <p>
                            The MMMS (Mentor Mentee Matchmaking System) matches all potential pairs between mentors and mentees based on availability and compatibility using various factors
                        </p>
                        <a
                            href = "https://crescendoforacause.com/tools/mentor-mentee-matching-system"
                        >
                            <i
                                className="fa-solid fa-arrow-up-right-from-square">
                            </i>
                        </a>
                    </div>
                </div>
                <div className="work">
                    <img
                        src = {lyfordResearch}
                    />
                    <div className="layer">
                        <h3>
                            Lyford Lab Eye Gaze Research
                        </h3>
                        <p>
                            We use random forest ML modles to predict students{"'"} strategies when analyzing histograms
                        </p>
                        <a
                            href = "#"
                        >
                            <i
                                className="fa-solid fa-arrow-up-right-from-square">
                            </i>
                        </a>
                    </div>
                </div>
                <div
                    className="work"
                >
                    <img
                        src={comingSoon}
                    />
                    <div
                        className="layer"
                    >
                        <h3>
                            More projects coming soon!
                        </h3>
                        <a
                            href ="#">
                                <i
                                    className="fa-solid fa-arrow-up-right-from-square">
                                </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;