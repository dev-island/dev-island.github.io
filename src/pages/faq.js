import React from "react"
import Layout from "../components/Layout"
import NavTwo from "../components/NavTwo"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import Faq from "../components/Faq"

const FaqPage = ({ path }) => {
  return (
    <Layout pageTitle="FAQ | DevIsland">
      <NavTwo path={path} />
      <PageHeader title="FAQ" />
      <Faq />
      <Footer />
    </Layout>
  )
}

export default FaqPage
