import React from "react"
import { Link } from "gatsby"

const PageHeader = props => {
  return (
    <section className="inner-banner">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="#none">{props.title}</a>
          </li>
        </ul>
        <h2 className="inner-banner__title">{props.title}</h2>
      </div>
      <span
        style={{
          position: "absolute",
          right: "10px",
          bottom: 0,
          fontSize: "10px",
        }}
      >
        Photo by{" "}
        <a href="https://unsplash.com/@gkumar2175?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Ganapathy Kumar
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/poipu-beach?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </section>
  )
}

export default PageHeader
