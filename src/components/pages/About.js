import React from 'react';
import "../styles/About.css";


export default function About() {
    return (
        <div>
            <h1>About</h1>
            <div>
            <img class="ProfilePic" src="Patrick_Selfie.jpg" alt="Selfie"/>
            </div>
            <div className="AboutContainer">
            <p className="Bio">
                Hello! I'm a recent graduate of UT Austin's Coding Bootcamp. 
                I am proficient in full-stack web development, and I'm looking 
                forward to developing my skills further!
            </p>
            </div>
        </div>
    );
}