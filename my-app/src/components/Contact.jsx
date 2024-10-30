const Contact = () => {
    return (        
        <>
            <div className="row">
                <div className="contact-left">
                    <h1 
                        className = "sub-title"
                    >
                        Contact Me
                    </h1>
                    <p>
                        <i 
                            className="fa-solid fa-paper-plane"
                        >
                        </i>
                        jonathan.j.kim@vanderbilt.edu
                    </p>
                    <p>
                        <i className="fa-solid fa-square-phone">
                        </i>
                        617-932-9770
                    </p>
                    <div 
                        className="social-icons"
                    >
                        <a 
                            href="https://www.linkedin.com/in/jonathanjiyukim/"
                        >
                            <i 
                                className="fa-brands fa-linkedin">
                            </i>
                        </a>
                        <a 
                            href="https://www.instagram.com/jkim.21/"
                        >
                            <i 
                                className="fa-brands fa-instagram">
                            </i>
                        </a>
                        <a 
                            href="https://twitter.com/Jkim_21"
                        >
                            <i 
                                className="fa-brands fa-square-twitter"
                            >
                            </i>
                        </a>
                    </div>
                </div>
            </div>
            <div 
                className="copyright">
                    <p>
                        Copyright &copy; 2024 Jonathan Kim
                    </p>
            </div>
        </>
    );
};

export default Contact;