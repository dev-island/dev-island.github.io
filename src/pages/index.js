import React from "react"
import Layout from "../components/Layout"
import NavTwo from "../components/NavTwo"
import SliderTwo from "../components/SliderTwo"
import Footer from "../components/Footer"
import AboutOne from "../components/AboutOne"
import TeamOne from "../components/TeamOne"
import CallToActionTwo from "../components/CallToActionTwo"
import BlogThree from "../components/BlogThree"
// import CourseCatTwo from "../components/CourseCatTwo"
// import CourseTwo from "../components/CourseTwo"
// import Pricing from "../components/Pricing"
// import MeetingOne from "../components/MeetingOne"

const HomePageTwo = ({ path }) => (
  <Layout pageTitle="Home | DevIsland">
    <NavTwo path={path} />
    <SliderTwo />
    <AboutOne />
    <TeamOne />
    <BlogThree />
    <CallToActionTwo />
    <Footer />
    {/*
        <CourseCatTwo />
        <CourseTwo />
        <Pricing />
        <MeetingOne />
      */}
  </Layout>
)

export default HomePageTwo
