import "../css/GlobalStyle.css";
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";

const Sidebar = () => {
    const [active,setActive] = useState('');
    // Set the active state to the clicked button and selected the active class
    const addActiveClass = (e) => {
        const clicked = e.target.id;
        if(active === clicked) {
            setActive(clicked);
        } 
        else {
            setActive(clicked);
            window.location.href = clicked || '404';
        }

    }

   
    return (
        <div class="Sidebar">
            <div class="profile">
                <a href="#"><img className="avatar" src="/assets/Images/Avatar/avatar.jpg" /></a>
                <h3>Ánh Ngọc, 18</h3>
                <button><img className="iconLogout" src="/assets/SVG/Logout.svg"/></button>
            </div>
            <div class="match">
                <div class="images">
                    <img src="/assets/Images/Avatar/avatar.jpg" />
                </div>
            </div>
            <div class="menu">
                <button className={`${active === 'home' ? 'selected' : ''}`} id="home" onClick={addActiveClass}><img src="/assets/SVG//Home.svg"/> <h3 className={`${active === 'home' ? 'selected' : ''}`} id="home" onClick={addActiveClass}>#Home</h3></button>
                <button className={`${active === 'messages' ? 'selected' : ''}`} id="messages" onClick={addActiveClass} ><img src="/assets/SVG//Messages.svg"/> <h3>#Messages</h3></button>
                <button className={`${active === 'profile' ? 'selected' : ''}`} id="profile" onClick={addActiveClass}><img src="/assets/SVG//Profile.svg"/> <h3>#Profile</h3></button>
                <button className={`${active === 'global' ? 'selected' : ''}`} id="global" onClick={addActiveClass}><img src="/assets/SVG//Global.svg"/> <h3>#Global</h3></button>
                <button className={`${active === 'support' ? 'selected' : ''}`} id="support" onClick={addActiveClass}><img src="/assets/SVG//Support.svg"/> <h3>#Support</h3></button>
                <button className={`${active === 'premium' ? 'selected' : ''}`} id="premium" onClick={addActiveClass}><img src="/assets/SVG//Settings.svg"/> <h3>#Setting</h3></button>
            </div>
        </div>
     );
};

export default Sidebar;