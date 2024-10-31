import {useState} from 'react';
import {hero} from '../assets'

const About = () => {
    const [activeTab, setActiveTab] = useState('experience');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <div className="top-row section">
            <div className="image-container">
                <img 
                    src= {hero} 
                    alt="Jonathan Kim photo two"
                />
            </div>

            <div className='about-text'>
                <h1 className = "about-title">About Me</h1>
                <p>
                    I am a developer from the Greater Boston area and currently a junior at Vanderbilt University majoring in computer science and minoring in data science.
                </p>
                <p>
                    Through technology, I want to create scalable solutions with a global reach. I am especially interested in full-stack and web development. 
                </p>

                <div 
                    className="about-subtitles"
                >
                    <p 
                        onClick = {() => openTab('experience')}
                        className = {`${activeTab == 'experience' ? 'active-link' : ''}`}
                    >
                        Experience
                    </p>
                    <p 
                        onClick = {() => openTab('education')}
                        className = {`${activeTab === 'education' ? 'active-link' : ''}`}
                    >
                        Education
                    </p>
                    <p 
                        onClick = {() => openTab('skills')}
                        className = {`${activeTab == 'skills' ? 'active-link tab-links' : ''} `}
                    >
                        Skills
                    </p>
                </div>
                <div 
                    id = "skills"
                    className={`${activeTab === 'skills' ? 'active-content' : ''} tab-contents`}
                >
                    <ul>
                        <li>
                            <h6>
                                Languages
                            </h6>
                            <p>
                                JavaScript, Java, Python, C++, C, R, HTML/CSS, SQL
                            </p>
                        </li>
                        <li>
                            <h6>
                                Frameworks/Libraries
                            </h6>
                            <p>
                                Node.js, React.js, Express.js, MySQL, MongoDB, Scrapy, PyTorch, Git
                            </p>
                        </li>
                    </ul>
                </div>
                <div 
                    className={`${activeTab === 'experience' ? 'active-content' : ''} tab-contents`}
                >
                    <ul>
                        <li>
                            <h6>
                                January 2024 - September 2024
                            </h6>
                            <p>
                                Full-stack software development intern for Crescendo for a Cause
                            </p>
                        </li>
                        <li>
                            <h6>
                                June 2023 - August 2024
                            </h6>
                            <p>
                                Machine learning research intern at Lyford Labs at Middlebury College
                            </p>
                        </li>
                        <li>
                            <h6>
                                February 2022 - May 2023
                            </h6>
                            <p>
                                Computer science teacher assistant at Middlebury College
                            </p>
                        </li>
                        <li>
                            <h6>
                                June 2022 - August 2022
                            </h6>
                            <p>
                                Cancer biology research assistant for Maitra Lab at MD Anderson Cancer Center
                            </p> 
                        </li>
                    </ul>
                </div>
                <div 
                    className={`${activeTab === 'education' ? 'active-content' : ''} tab-contents`}
                >
                    <ul>
                    <li>
                            <h6>
                                September 2024 - May 2026
                            </h6>
                            <p>
                                Vanderbilt University
                            </p>
                        </li>
                        <li>
                            <h6>
                                September 2021 - May 2023
                            </h6>
                            <p>
                                Middlebury College
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default About;
