import React from "react"
import Layout from "../components/Layout"
import NavTwo from "../components/NavTwo"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import Contact from "../components/Contact"

const GalleryPage = () => {
  return (
    <Layout pageTitle="Contact | DevIsland">
      <NavTwo />
      <PageHeader title="Contact" />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default GalleryPage
