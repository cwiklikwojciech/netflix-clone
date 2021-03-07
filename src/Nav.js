import React ,{useEffect, useState} from 'react'
import './Nav.css';

function Nav() {
    
    const [show,handleShow] = useState(false);


    useEffect(() => {
       window.addEventListener("scroll", () => {
           if(window.scrollY > 100) {
            handleShow(true);
           }else handleShow(false);
       });
       return () => {
           window.removeEventListener("scroll");
       };
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
                <img 
                className="nav_logo"
                src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
                alt="netflix logo"/>

<img 
                className="nav_avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
                alt="netflix logo"/>
        </div>
    )
}

export default Nav
