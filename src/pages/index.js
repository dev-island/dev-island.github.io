import React from "react"
import Layout from "../components/Layout"
import NavTwo from "../components/NavTwo"
import SliderTwo from "../components/SliderTwo"
import Footer from "../components/Footer"
import CourseCatTwo from "../components/CourseCatTwo"
import AboutOne from "../components/AboutOne"
import CourseTwo from "../components/CourseTwo"
import TeamOne from "../components/TeamOne"
import Pricing from "../components/Pricing"
import MeetingOne from "../components/MeetingOne"
import CallToActionTwo from "../components/CallToActionTwo"
import BlogThree from "../components/BlogThree"

const HomePageTwo = () => {
  return (
    <Layout pageTitle="Home | DevIsland">
      <NavTwo />
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
}

export default HomePageTwo
