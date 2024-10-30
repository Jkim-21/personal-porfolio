import {work1, work2} from '../assets';

const Portfolio = () => {
    return (
        <div>
            <h1 className="subt-title">My Work</h1>
            <div className="work-list">
                <div className="work">
                    <img
                        src = {work1}
                    />
                    <div className="layer">
                        <h3>
                            Lyford Lab Eye Gaze Research
                        </h3>
                        <p>
                            Predicting Students{"'"} Strategies when Analyzing Histograms Through
                            Machine Learning
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
                    className="work img2"
                >
                    <img
                        src={work2}
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
            <a
                href="#"
                className ="btn">
                    See more
            </a>
        </div>
    );
};

export default Portfolio;