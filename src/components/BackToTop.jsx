import React, {useState} from 'react'
import { FaAngleUp } from 'react-icons/fa';

function BackToTop() {  
    
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };
  
    const scrollTop = (e) =>{
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    window.addEventListener('scroll', checkScrollTop)

    return (
        <span onClick={scrollTop} className={`back-to-top ${showScroll ? 'show' : ''}`}>
            <FaAngleUp />
        </span>
    )
}

export default BackToTop
