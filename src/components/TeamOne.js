import React from "react"
import team1 from "../assets/images/team-rich.png"
import team2 from "../assets/images/team-aj.jpeg"
import team3 from "../assets/images/team-1-3.jpg"
import team4 from "../assets/images/team-1-4.jpg"
const TeamOne = () => {
  return (
    <section className="team-one team-one__become-teacher">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">Meet The Team</h2>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={team1} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="/teacher-details">Rich Uhl</a>
                </h2>
                <p className="team-one__designation">Founder & CEO</p>
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
                  Board of Directors and function as a Chief Executive Officer,
                  focused on business development and partnerships required to
                  build and grow Dev-Island and its students.
                </p>
              </div>
              <div className="team-one__social">
                <a href="http://LinkedIn.com/in/richuhl" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={team2} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="/teacher-details">AJ Webb</a>
                </h2>
                <p className="team-one__designation">Founder & CTO</p>
                <p className="team-one__text">
                  AJ Webb is an experienced Principal Software Engineer with a
                  demonstrated history of working in the financial services
                  industry. He is skilled in Management, JavaScript applications
                  and Agile Methodologies. Strong engineering professional with
                  a BS focused in Digital Media from Utah Valley University. AJ
                  is a proud Hawaii resident and lives and works from the island
                  of Kaua'i. AJ will serve on the Board of Directors and as the
                  CTO and will lead the technical education of the students.
                </p>
              </div>
              <div className="team-one__social">
                <a href="https://www.linkedin.com/in/aj-webb/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/webbushka" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.instagram.com/thehaoleaj/" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/webbushka" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          {/*TODO: Add Dani
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={team4} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="/teacher-details">Austin Caldwell</a>
                </h2>
                <p className="team-one__designation">Teacher</p>
                <p className="team-one__text">
                  There are many varia of passages of lorem.
                </p>
              </div>
              <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
          </div>
          </div>
        */}
        </div>
      </div>
    </section>
  )
}

export default TeamOne
