import {user} from '../assets'

const Hero = () => {
    return (
        <div className="header-content">
            <div className="header-text">
                <p>Aspiring Software Developer</p>
                <h1>
                    Hi, I{"'"}m <span>Jonathan</span><br/> Kim from Boston
                </h1>
            </div>
            <div className="image-container">
                <img 
                    src = {user} 
                    alt = "Jonathan Kim photo" className="image-full"
                />
                <img 
                    src="images/user-mobile.jpeg" 
                    alt = "Jonathan Kim photo" className="image-mobile"
                />
            </div>
        </div>
    );
};

export default Hero;