import React from "react"
// import blog1 from "../assets/images/blog-1-1.jpg"
// import blog2 from "../assets/images/blog-1-2.jpg"
// import blog3 from "../assets/images/blog-1-3.jpg"
const BlogThree = () => {
  return (
    <section className="blog-one  blog-one__home-two">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">In The News</h2>
        </div>
        <div className="row justify-content-around">
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img
                  src="https://scontent.fhnl3-1.fna.fbcdn.net/v/t1.6435-9/s960x960/249965030_176683817987912_3705710972850746753_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=37d4d5&_nc_ohc=Bvtu9uFgLEQAX_1DF99&_nc_ht=scontent.fhnl3-1.fna&oh=4e5c8d2de5757d903ac3fd68059b804f&oe=61A0AE28"
                  alt=""
                />
                <a
                  className="blog-one__plus"
                  href="https://hawaii.bulletin.com/1774451602739006/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
              <div className="blog-one__content text-center">
                {/*
                <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted On Jan 19"
                    href="#none"
                  >
                    <i className="fa fa-calendar-alt"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="No Comments"
                    href="#none"
                  >
                    <i className="fa fa-comments"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted By Admin"
                    href="#none"
                  >
                    <i className="fa fa-user"></i>
                  </a>
                </div>
              */}
                <h2 className="blog-one__title">
                  <a
                    href="https://hawaii.bulletin.com/1774451602739006/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Coding bootcamp coming to Kauai
                  </a>
                </h2>
                <p className="blog-one__text">
                  Rich Uhl puts down roots and plans to lift up Garden Island
                  residents with Dev Island.
                </p>
                <a
                  href="https://hawaii.bulletin.com/1774451602739006/"
                  target="_blank"
                  rel="noreferrer"
                  className="blog-one__link"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/*
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src={blog2} alt="" />
                <a className="blog-one__plus" href="news-details.html">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
              <div className="blog-one__content text-center">
                <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted On Jan 19"
                    href="#none"
                  >
                    <i className="fa fa-calendar-alt"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="No Comments"
                    href="#none"
                  >
                    <i className="fa fa-comments"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted By Admin"
                    href="#none"
                  >
                    <i className="fa fa-user"></i>
                  </a>
                </div>
                <h2 className="blog-one__title">
                  <a href="news-details.html">
                    Get a tips to develop a quality education
                  </a>
                </h2>
                <p className="blog-one__text">
                  Aelltes port lacus quis enim var sed efficitur turpis gilla
                  sed sit amet finibus eros.
                </p>
                <a href="news-details.html" className="blog-one__link">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src={blog3} alt="" />
                <a className="blog-one__plus" href="news-details.html">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
              <div className="blog-one__content text-center">
                <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted On Jan 19"
                    href="#none"
                  >
                    <i className="fa fa-calendar-alt"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="No Comments"
                    href="#none"
                  >
                    <i className="fa fa-comments"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted By Admin"
                    href="#none"
                  >
                    <i className="fa fa-user"></i>
                  </a>
                </div>
                <h2 className="blog-one__title">
                  <a href="news-details.html">
                    Learn variety of programs and courses
                  </a>
                </h2>
                <p className="blog-one__text">
                  Aelltes port lacus quis enim var sed efficitur turpis gilla
                  sed sit amet finibus eros.
                </p>
                <a href="news-details.html" className="blog-one__link">
                  Read More
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

export default BlogThree
