'use strict';
/* global $ */

const STORE = {
  startPage: true,
  projectPage: false,
};

function generateMainPageHTML(){
  return ` 
    <div id="main-page">

        <nav role="navigation" class="contact">
            <button class="js-contact-button" type="button">Contact me</button>
          </nav>


        <div class="line">hello
        
        
        <section class="header">
            <header role="banner">
                <h1>Farah Gustafson</h1>
                <h2>Full stack developer</h2>
            </header>
        </section>

        

        <section class="About-me">
            <div class="about">
                <div class="about-box">About</div>
                <div class="skills-box">Skills</div>
                <div class="bio-box">Bio</div>
            </div>
        </section>

        <section class="projects-section">
            <div class="projects">
                <div class="project-main">project-main</div>
                <div class="project-description">project-description</div>
                <div class="project-title">project-title</div>
                <div class="project-picture">project-picture</div>
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