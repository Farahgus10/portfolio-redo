'use strict';
/* global $ */

const STORE = {
  startPage: true,
  projectPage: false,
};

function generateMainPageHTML(){
  return ` 
    <div id="main-page">
      <nav>
        <div id="about-top">About</div>
        <div id="projects-top">Projects</div>
        <div id="contact-top">Contact</div>
      </nav>
        
        <section id="contact">
          <div class="header">
            
            
              <div class="name">
                <h1>Farah Gustafson</h1>
              </div>
              <div class="occupation">
                <h2>Full stack developer</h2>
              </div>
           

              <div class="contact-wrapper">
              <div class="contact">
                <div class="phone">
                  <p class="contact-title title">phone</p>
                  <p class="contact-info info">(301) 542 4486</p>
                </div>
                <div class="email">
                  <p class="contact-title title">email</p>
                  <p class="contact-info info">farah.gustafson@gmail.com</p>
                </div>
                <div class="location">
                  <p class="contact-title title">location:</p>
                  <p class="contact-info info">Washington, D.C.</p>
                </div>
                <div class="find-me">
                  <p class="contact-title title">find me</p>
                  <a class="contact-info info" href="https://github.com/Farahgus10">GitHub</a>
                  <a class="contact-info" href="https://www.linkedin.com/in/farah-gustafson/">Linkedin</a>
                </div>
              </div>
              </div>
              
            
          </div>
        </section>

        <section class="about-me">
          <div class="about" id="about">
            <div class="about-box">
              <h1>About</h1>
            </div>
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
          <div class="projects" id="projects">
            
            <div class="project-main"><h1>Projects</h1></div>

            <section>
            <div class="project-right">

               <a href="https://farah-sustainachoice-app.now.sh"><img src="./Images/NavbarHeader.png" class="project1-picture" alt="foo alt" /></a>
            
                <div class="project-right-info">
                  <div class="project-right-title"> SustainAChoice </div>
                  <div class="project-right-description"> An app for eco-minded individuals in the Washington, D.C. area to find sustainably-sourced food in their area. </br>
                    <p class="tech-stack"> Technical stack: React, Node, PostgreSQL, Express, HTML, CSS </p>
                    <a href="https://github.com/Farahgus10/SustainaChoice-client"> Client-side repo </a></br>
                    <a href="https://github.com/Farahgus10/SustainaChoice-server"> Server-side repo </a></br>
                  </div>
                </div>
              </div>
            <section>
            
            <section>
              <div class="project-left">

              <a href="https://farah-quonn-spaced-repetition-app.now.sh/register"><img src="./Images/Spaced-rep.png" class="project2-picture" alt="foo alt" /></a>

                <div class="project2-info">
                  <div class="project-left-title"> Spaced Repetition </div>
                  <div class="project-left-description"> Learn new French words using the spaced repetition technique. </br>
                    <p class="tech-stack"> Technical stack: React, Node, PostgreSQL, Express, HTML, CSS </p>
                    <a href="https://github.com/thinkful-ei-bee/Farah-Quonn-Spaced-Repetition-Client"> Client-side repo </a></br>
                    <a href="https://github.com/thinkful-ei-bee/Farah-Quonn-Spaced-Repetition-Api"> Server-side repo </a></br>
                  </div>
                </div>
              </div>
            </section>


            <section>
              <div class="project-right">

              <a href="https://rendezvous-app.now.sh/landingPage"><img src="./Images/Rendezvous.png" class="project3-picture" alt="foo alt" /></a>

                <div class="project-right-info">
                  <div class="project-right-title"> Rendezvous </div>
                  <div class="project-right-description"> A dating app that connects people through mutual interests and events in their area. </br>
                    <p class="tech-stack"> Technical stack: React, Node, PostgreSQL, Express, HTML, CSS </p>
                    <a href="https://github.com/thinkful-ei-bee/EastCoast-Team-Project-Client"> Client-side repo </a></br>
                    <a href="https://github.com/thinkful-ei-bee/EastCoast-Team-Project-Capstone3-Server"> Server-side repo </a></br>
                  </div>
                </div>
              </div>
            </section>

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

  function scrollToSection(section) {
    var x = $('#' + section + "-top")
    

    $("#" + section + "-top").click(function() {
      console.log(x);
      $('html, body').animate({
        scrollTop: $("#" + section).offset().top
      }, 350);
    });
  }

  function main(){
    renderPortfolio();
    scrollToSection("about");
    scrollToSection("projects");
    scrollToSection("contact");
  }
  
  $(main);