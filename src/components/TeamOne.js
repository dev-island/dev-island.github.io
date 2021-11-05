import React from "react"
import rich from "../assets/images/team-rich.png"
import aj from "../assets/images/team-aj.jpeg"
import dani from "../assets/images/team-dani.jpg"
import jason from "../assets/images/team-jason.jpg"
// TODO: Add Keoni's headshot
import keoni from "../assets/images/team-1-1.jpg"

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
                  Rich Uhl is an experienced technology consultant and executive
                  passionate about building—teams, products, and solutions. Rich
                  is the Founder and CTO of 1Strategy, AWS experts and
                  implementation partners. Founded in July of 2015, Rich grew
                  the 1Strategy team to a total 25 employees prior to its
                  acquisition by TEKsystems, a global IT services company, in
                  October of 2019. Since 2010, Rich has been a remote worker
                  living in multiple geographies including Salt Lake City, Utah,
                  Seattle, Washington, and Kalaheo, HI. 1Strategy is an entirely
                  remote business and has been since its founding. His extensive
                  remote work experience will be critical to help students
                  navigate the challenges of remote work. Rich will serve on the
                  Board of Directors and function as a President focused on
                  business development and partnerships required to build and
                  grow Dev-Island and its students.
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
                  Member <br /> Board of Directors
                </p>
                <p className="team-one__text">
                  AJ Webb is an experienced Principal Software Engineer with a
                  demonstrated history of working in the financial services
                  industry. He is skilled in Management, JavaScript applications
                  and Agile Methodologies. Strong engineering professional with
                  a BS focused in Digital Media from Utah Valley University. AJ
                  is a proud Hawaii resident and lives and works from the island
                  of Kaua'i. AJ will serve on the Board of Directors and will
                  lead the technical education of the students.
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
                  also has experience at the university level as a Graduate
                  Program Manager. In addition to her passion for continued
                  education, she has worked with several technology startups,
                  including 1Strategy, a Premier AWS Consulting company. Over
                  the last 5 years she has grown her knowledge and love for
                  technology. Danielle will serve as the Director of Operations
                  and focus on business development.
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
                <p className="team-one__designation">
                  Member <br /> Board of Directors
                </p>
                <p className="team-one__text">
                  Jason Bryant has over a decade of IT, Radar, RF Communications
                  and Cybersecurity experience. He is a subject matter export in
                  cybersecurity architecture, government architecture standards
                  and Agile. He has twelve years of experience in requirements
                  analysis, system architecture and MBSE. Jason has worked at
                  every level of Information Security (IAO, ISSO, ISSM, FSO and
                  CISO). Jason will serve on the Board of Directors
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
                <p className="team-one__designation">
                  Member <br /> Board of Directors
                </p>
                <p className="team-one__text">{/* TODO: Add Keoni's Bio */}</p>
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
        </div>
      </div>
    </section>
  )
}

export default TeamOne
