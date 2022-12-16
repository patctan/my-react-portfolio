import React from 'react';
import "../styles/Portfolio.css"

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>

            <div className="CardHolder">
                <div className="Card">
                    <a href="https://github.com/patctan/Project-2"><img class="portfolioPic" src="roadtripstock.png" alt="stock" /></a>
                    <div class="projectTitle">
                        <h4><b> <a id="herokuLink1" href="https://roadtrip-planner-project.herokuapp.com/">Road Trip Planner</a></b></h4>
                    </div>
                </div>
                <div className="Card">
                    <a href="https://github.com/patctan/Module_19_Challenge"><img class="portfolioPic" src="text-editor.png" alt="stock" /></a>
                    <div class="projectTitle">
                        <h4><b> <a id="herokuLink2" href="https://lit-ridge-46238.herokuapp.com/">Text Editor</a></b></h4>
                    </div>
                </div>
                <div className="Card">
                    <a href="https://github.com/patctan/Module_11_Challenge"><img class="portfolioPic" src="note-taker.png" alt="stock" /></a>
                    <div class="projectTitle">
                        <h4><b>Note Taker</b></h4>
                    </div>
                </div>
                <div className="Card">
                    <a href="https://github.com/patctan/Module_3_Challenge"><img class="portfolioPic" src="Password_Generator_Screenshot.png" alt="stock" /></a>
                    <div class="projectTitle">
                        <h4><b>Password Generator</b></h4>
                    </div>
                </div>
                <div className="Card">
                    <a href="https://github.com/patctan/Module_5_Challenge"><img class="portfolioPic" src="workday-scheduler.png" alt="stock" /></a>
                    <div class="container">
                        <h4><b>Workday Scheduler</b></h4>
                    </div>
                </div>
                <div className="Card">
                    <a href="https://github.com/patctan/Module_13_Challenge"><img class="portfolioPic" src="back-end-db.png" alt="stock" /></a>
                    <div class="container">
                        <h4><b> E-Commerce Back End</b></h4>
                    </div>
                </div>
            </div>

            
        </div>
    );
}