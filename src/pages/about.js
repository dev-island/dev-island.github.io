import React from "react"
import Layout from "../components/Layout"
import NavTwo from "../components/NavTwo"
import PageHeader from "../components/PageHeader"
import AboutOne from "../components/AboutTwo"
import Footer from "../components/Footer"
import TeamOne from "../components/TeamOne"
import VideoOne from "../components/VideoOne"
import BrandsTwo from "../components/BrandsTwo"
import TestimonialOne from "../components/TestimonialOne"
import CallToActionOne from "../components/CallToActionOne"

const AboutPage = () => {
  return (
    <Layout pageTitle="About | DevIsland">
      <NavTwo />
      <PageHeader title="About" />
      <AboutOne />
      <TeamOne />
      <VideoOne />
      <BrandsTwo />
      <TestimonialOne />
      <CallToActionOne />
      <Footer />
    </Layout>
  )
}

export default AboutPage
