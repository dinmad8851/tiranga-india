// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Project">
        <p>3.3 Performance Assessment: Create the React Project into Git</p>
        <p>Dinesh Venkata Manikanta Maddirala</p>
        <p>ECPI University</p>
        <p>CIS 453 : DMW Interface Design II</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Project" />
// Step 3: Export your component
export default AboutPage