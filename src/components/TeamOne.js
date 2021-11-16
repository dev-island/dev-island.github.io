import React from "react"
import rich from "../assets/images/team-rich.png"
import aj from "../assets/images/team-aj.jpg"
import dani from "../assets/images/team-dani.jpg"
import jason from "../assets/images/team-jason.jpg"
import dave from "../assets/images/team-dave.jpeg"
// TODO: Add Keoni's headshot
import keoni from "../assets/images/team-blank.png"

const TeamOne = () => {
  return (
    <section className="team-one team-one__become-teacher">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">Meet The Team</h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={rich} alt="rich uhl" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="#teacher-details">Rich Uhl</a>
                </h2>
                <p className="team-one__designation">
                  President <br />
                  Board of Directors
                </p>
                <p className="team-one__text">
                  Rich Uhl is an experienced technology executive passionate
                  about building—teams, and solutions. Rich is the Founder and
                  CTO of 1Strategy, Amazon Web Services (AWS) experts and
                  implementation partners. Founded in July of 2015, Rich grew
                  the 1Strategy to become an AWS Premier Partner (only 75
                  partners among 100,000+). In October of 2019, Rich sold
                  1Strategy to TEKsystems Global Services, a global IT services
                  company. Rich will focus on business development and
                  partnerships.
                </p>
              </div>
              <div className="team-one__social">
                <a
                  href="http://LinkedIn.com/in/richuhl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={aj} alt="aj webb" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="#teacher-details">AJ Webb</a>
                </h2>
                <p className="team-one__designation">
                  Lead Instructor <br /> Board of Directors
                </p>
                <p className="team-one__text">
                  AJ Webb is an experienced software development instructor and
                  Principal Software Engineer in the financial services
                  industry. He is skilled in Management, mentoring and
                  JavaScript applications and Agile Methodologies. AJ is a
                  strong engineering professional with a BS focused in Digital
                  Media from Utah Valley University. AJ is a proud Hawaii
                  resident and lives and works from the island of Kaua'i. AJ
                  will serve on the Board of Directors and will lead the
                  technical education of the students.
                </p>
              </div>
              <div className="team-one__social">
                <a
                  href="https://www.linkedin.com/in/aj-webb/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/webbushka"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img
                  src={dani}
                  alt="Danielle Steed"
                  style={{ objectPosition: "left -22px" }}
                />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="#teacher-details">Danielle Steed</a>
                </h2>
                <p className="team-one__designation">Director of Operations</p>
                <p className="team-one__text">
                  Danielle Steed received a bachelor’s degree in education. She
                  has experience at the university level as a Graduate Program
                  Manager. In addition to her passion for continued education,
                  she has worked with several technology startups, including
                  1Strategy, a Premier AWS Consulting company. Over the last 5
                  years she has grown her knowledge and love for technology.
                  Danielle will focus on business development.
                </p>
              </div>
              <div className="team-one__social">
                <a
                  href="https://www.linkedin.com/in/danielle-steed-8aa173154"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={jason} alt="Jason Bryant" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="#teacher-details">Jason Bryant</a>
                </h2>
                <p className="team-one__designation">Board of Directors</p>
                <p className="team-one__text">
                  Jason Bryant is an experienced Systems Engineer with over a
                  decade of IT, Radar, RF Communications and Cybersecurity
                  experience. He is a subject matter export in cybersecurity
                  architecture, government architecture standards and Agile
                  methodologies. He is comfortable in performing requirements
                  analysis, designing system architecture and MBSE. Jason’s
                  education is highly focused on IT and business management. 
                  His BS is in Network Administration and Integrated Computing
                  Systems. Born and raised on the westside of Kauai, Jason is an
                  active member of his local community.  As a local business
                  owner, father, and coach he is committed to investing into the
                  island that raised him. Jason will serve on the Board of
                  Directors.
                </p>
              </div>
              <div className="team-one__social">
                <a
                  href="https://www.linkedin.com/in/jason-bryant-60b33b20a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={keoni} alt="Keoni Pau" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="#teacher-details">Keoni Pau</a>
                </h2>
                <p className="team-one__designation">Board of Directors</p>
                <p className="team-one__text">
                  Keoni Pau is an educator at Chiefess Kamakahelei Middle
                  School, teaching both STEM and Hawaiiana classes. Keoni will
                  serve on the board of directors.
                </p>
              </div>
              <div className="team-one__social">
                {/* TODO: Add Keoni's socials
                  <a
                  href="https://www.linkedin.com/in/jason-bryant-60b33b20a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              */}
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={dave} alt="David Dooley" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="#teacher-details">David Dooley</a>
                </h2>
                <p className="team-one__designation">Board of Directors</p>
                <p className="team-one__text">
                  Dave is an education administrator with over twenty years
                  combined experience in university and secondary education
                  environments including: leadership, administration,
                  supervision, program management, curriculum development,
                  mentoring, teaching, and coaching. Dave is proficient in
                  working with, and coaching in, a variety of leadership styles.
                  Dave will serve on the board of directors.
                </p>
              </div>
              <div className="team-one__social">
                <a
                  href="https://www.linkedin.com/in/ddooley/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamOne
