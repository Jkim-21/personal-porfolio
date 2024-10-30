import {useState} from 'react';
import {hero} from '../assets'

const About = () => {
    const [activeTab, setActiveTab] = useState('experiences');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <div className="row">
            <div className="about-col-1">
                <img 
                    src= {hero} 
                    alt="Jonathan Kim photo two"
                />
            </div>

            <div className="about-col-2">
                <h1 className = "sub-title">About Me</h1>
                <p>
                    I am a junior student at Vanderbilt University majoring in computer science 
                    and minoring in Data Science. I am looking to enhance my knowledge and skills in software development through real-world opportunities and experiences. 
                </p>

                <div 
                    className="tab-titles"
                >
                    <p 
                        onClick = {() => openTab('skills')}
                        className = {`${activeTab ? 'active-tab active-link' : ''} tab-links`}
                    >
                        Skills
                    </p>
                    <p 
                        onClick = {() => openTab('experience')}
                        className = {`${activeTab ? 'active-tab active-link' : ''} tab-links`}
                    >
                        Experience
                    </p>
                    <p 
                        onClick = {() => openTab('education')}
                        className = {`${activeTab ? 'active-tab active-link' : ''} tab-links`}
                    >
                        Education
                    </p>
                </div>
                <div 
                    id = "skills"
                    className="tab-contents active-tab" 
                >
                    <ul>
                        <li>
                            <span>
                                Object Oriented Programming
                            </span>
                            <br/>Python, Java, C
                        </li>
                        <li>
                            <span>
                                Web Development
                            </span>
                            <br/>HTML/CSS, JavaScript
                        </li>
                        <li>
                            <span>
                                Statistical Analysis &amp; ML
                            </span>
                            <br/> R
                        </li>
                        <li>
                            <span>
                                Version Control
                            </span>
                            <br/> 
                            Git, Github
                        </li>
                    </ul>
                </div>
                <div className="tab-contents" id = "experience">
                    <ul>
                        <li>
                            <span>
                                June 2023 - Present
                            </span><br/> 
                        Machine learning research intern at Lyford Labs at Middlebury College
                        </li>
                        <li>
                            <span>
                                February 2022 - Present
                            </span><br/>
                            Computer science teacher assistant at the Middlebury College Center for Teaching, Learning, and Research. 
                        </li>
                        <li>
                            <span>
                                June 2022 - August 2022
                            </span><br/>
                            Cancer biology research 
                            assistant for Maitra Lab at MD Anderson Cancer Center 
                        </li>
                        <li>
                            <span>
                                May 2020 - August 2021
                            </span><br/> 
                            Psychiatric biology research assistant for Karmacharya Lab at Massachusetts General Hospital 
                        </li>
                    </ul>
                </div>
                <div 
                    id = "education"
                    className="tab-contents" 
                >
                    <ul>
                        <li>
                            <span>
                                September 2021 - May 2026
                            </span>
                            <br/>Middlebury College
                        </li>
                        <li>
                            <span>
                                September 2017 - May 2021
                            </span><br/>
                            Buckingham Browne &amp; Nichols High School
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default About;
