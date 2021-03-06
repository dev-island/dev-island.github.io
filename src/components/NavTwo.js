import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo.svg"

class NavTwo extends Component {
  constructor() {
    super()
    this.state = {
      sticky: false,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)

    //Mobile Menu
    this.mobileMenu()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      })
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      })
    }
  }

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler")
    let mainNav = document.querySelector(".main-navigation")

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display !== "block" ? "block" : "none"
    })
  }

  render() {
    const { path } = this.props
    return (
      <header className="site-header site-header__header-two ">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  className="main-logo"
                  width="128"
                  style={{ marginTop: "-20px" }}
                  alt="Awesome alter text"
                />
              </Link>
              <button className="menu-toggler" data-target=".main-navigation">
                <span className="kipso-icon-menu"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" navigation-box">
                <li className={`${path === "/" ? "current" : ""}`}>
                  <Link to="/">Home</Link>
                  {/*<ul className="sub-menu">
                    <li>
                      <Link to="/">Home 01</Link>
                    </li>
                    <li>
                      <Link to="/index-2">Home 02</Link>
                    </li>
                    <li>
                      <Link to="/index-3">Home 03</Link>
                    </li>
                    <li>
                      <a href="#none">Header Versions</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/">Header 01</Link>
                        </li>
                        <li>
                          <Link to="/index-2">Header 02</Link>
                        </li>
                        <li>
                          <Link to="/index-3">Header 03</Link>
                        </li>
                      </ul>
                    </li>
        </ul>*/}
                </li>
                {/*
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                  <a href="#none">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/about">About Page</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing Plans</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ'S</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="courses.html">Courses</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                      <Link to="/course-details">Courses Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="teachers.html">Teachers</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/teachers">Teachers</Link>
                    </li>
                    <li>
                      <Link to="/teacher-details">Teachers Details</Link>
                    </li>
                    <li>
                      <Link to="/become-teacher">Become Teacher</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="news.html">News</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/news">News Page</Link>
                    </li>
                    <li>
                      <Link to="/news-details">News Details</Link>
                    </li>
                  </ul>
                </li>
              */}
                <li className={`${path === "/contact/" ? "current" : ""}`}>
                  <Link to="/contact">Contact</Link>
                </li>
                <li className={`${path === "/apply/" ? "current" : ""}`}>
                  <Link to="/apply">Apply</Link>
                </li>
                <li className={`${path === "/faq/" ? "current" : ""}`}>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="right-side-box">
              <div className="header__social">
                <a
                  href="https://linkedin.com/company/hidev-island"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/dev-island"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="site-header__decor">
          <div className="site-header__decor-row">
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-1"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-2"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-3"></div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
export default NavTwo
