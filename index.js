'use strict';
/* global $ */

const STORE = {
  startPage: true,
  projectPage: false,
};

function generateMainPageHTML(){
  return ` 
    <div id="main-page">
        
        <section class="header">
            <header role="banner">

              <div class="name">
                <h1>Farah Gustafson</h1>
              </div>
              <div class="occupation">
                <h2>Full stack developer</h2>
              </div>

              <div class="contact">
                <div class="phone">
                  <p class="contact-title">phone</p>
                  <p class="contact-info">(301) 542 4486</p>
                </div>
                <div class="email">
                  <p class="contact-title">email</p>
                  <p class="contact-info">farah.gustafson@gmail.com</p>
                </div>
                <div class="location">
                  <p class="contact-title">location:</p>
                  <p class="contact-info">Washington, D.C.</p>
                </div>
                <div class="find-me">
                  <p class="contact-title">find me</p>
                  <a class="contact-info" href="https://github.com/Farahgus10">Git</a>
                  <a class="contact-info" href="https://www.linkedin.com/in/farah-gustafson/">li</a>
                </div>
              </div>

            </header>
        </section>

        <section class="about-me">
            <div class="about">
                <div class="about-box"><h1>About</h1></div>
                <div class="bio-box">
                  <h3>Bio</h3>
                  <p class="bio-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <p class="bio-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="skills-box">
                  <h3>Skills</h3>
                  <p class="skills-text">JavaScript, HTML5, CSS3</p>
                  <p class="skills-text">React, jQuery</p>
                  <p class="skills-text">Node, Express, PostgreSQL</p>
                </div>
            </div>
        </section>

        <section class="projects-section">
            <div class="projects">
                <div class="project-main">Projects</div>
                
                <a class="project-link" href="https://farah-sustainachoice-app.now.sh">
                  <div class="project-picture"></div>
                </a>
                
                <div class="project-title">SustainAChoice</div>
                <div class="project-description">An app that allows users in the Washington, D.C. area to find sustainably-sourced food in their area.</br>
                  <p class="tech-stack">Technical stack: React, Node, PostgreSQL, Express, CSS</p>

                  <a href="">See client-side repo</a></br>
                  <a href="">See server-side repo</a></br>
                </div>
                
            </div>
        </section>
        
    </div>`;
}

{/* <section class="block">
              
              
              <p>Technical stack: React, Node, Express, PostgreSQL, CSS</p>
              <div class="project-links">
                <a href="https://farah-sustainachoice-app.now.sh/">See project</a>
                <a href="https://farah-sustainachoice-app.now.sh/">See project2</a>
              </div>
        </section> */}

function renderPortfolio(){
    // if startPage is true, then load main page html
    if (STORE.startPage){
      $('.container').html(generateMainPageHTML());
    }
    // else (if start page is false) load contact page html
    else {
      $('.container').html(generateContactHTML());
    }
  
    if (STORE.projectPage){
      $('.container').html(generateProjectsHTML());
    }
  }
  

  function main(){
    renderPortfolio();
  }
  
  $(main);