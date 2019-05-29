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
              <p class="bio-text">I'm a full-stack developer who values collaborative work, open minds, and a desire to keep learning above all else.</p>
              <p class="bio-text">Besides coding, a typical week consists of exploring the great outdoors with my dog, learning new cooking skills, or curled up with a good book. </p>
              <p class="bio-text">If you're interested in working with me, or just want to say hello, feel free to contact me through phone, email, or Linkedin.</p>
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
            <div class="project-main"><h1>Projects</h1></div>
            
            <a class="project-link" href="https://farah-sustainachoice-app.now.sh">
              <div class="project-picture"></div>
            </a>
            
            <div class="project-title">SustainAChoice</div>
            <div class="project-description">An app that allows users in the Washington, D.C. area to find sustainably-sourced food in their area.</br>
              <p class="tech-stack">Technical stack: React, Node, PostgreSQL, Express, CSS</p>

              <a href="">Client-side repo</a></br>
              <a href="">Server-side repo</a></br>
            </div>
              
          </div>
        </section>
        
    </div>`;
}

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