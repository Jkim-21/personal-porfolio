import {user, userMobile} from '../assets'

const Hero = () => {
    return (
        <div className="header-content section">
            <div className="header-text">
                <h1 className='header-text-one'>
                    Hi, I{"'"}m <span>Jonathan</span> Kim
                </h1>
                <h4>
                    An Aspiring Software Developer From Boston, Massachusetts
                </h4>
            </div>
            <div className="image-container">
                <img 
                    src = {user} 
                    alt = "Jonathan Kim photo" className="image-full"
                />
                <img 
                    src={userMobile}
                    alt = "Jonathan Kim photo" className="image-mobile"
                />
            </div>
        </div>
    );
};

export default Hero;