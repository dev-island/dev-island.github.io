import React from "react"
import Layout from "../components/Layout"
import NavTwo from "../components/NavTwo"
import ApplyForm from "../components/ApplyForm"
import Footer from "../components/Footer"

const Apply = () => {
  return (
    <Layout pageTitle="Apply | DevIsland">
      <NavTwo />
      <ApplyForm />
      <Footer />
    </Layout>
  )
}

export default Apply
