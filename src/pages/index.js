// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h2>Introduction</h2>
        <p>The Indian National Flag, also known as the "Tiranga," holds immense significance and symbolism
        for the people of India. Comprising three horizontal stripes of saffron, white, and green, with
        the Ashoka Chakra in the center, the flag represents the unity, diversity, and aspirations of 
        a nation that has a rich history and a promising future. The colors of the Tiranga are not just 
        visual elements; they embody the essence of India's struggle for independence, its cultural
        diversity, and its enduring commitment to peace and progress.</p>
      
      <h3>Ashoka Chakra: The Wheel of Progress</h3>
        <p>The Ashoka Chakra, a navy blue wheel with 24 spokes, represents the dynamic progress and constant
         movement of the nation. Inspired by the Lion Capital of Ashoka, the Ashoka Chakra embodies values 
         such as righteousness, justice, and dharma. It serves as a reminder of India's rich heritage and 
         its commitment to ethical governance and social harmony.</p>
      <StaticImage
        alt="Tiranga, with the Ashoka Chakra"
        src="../images/indian-flag-short.jpg"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage