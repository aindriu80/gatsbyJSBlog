import React from "react"
import {graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data}) => {
  console.log({data})
  return(
  <Layout>     
    <SEO title="Home" />
    <div>
      <h1>Aindriú's Thoughts</h1>
      <h4>{ data.allMarkdownRemark.totalCount}</h4>
      {
        data.allMarkdownRemark.edges.map(({node})=>(
          <div key={node.id}>
            <h3>{node.frontmatter.title} {node.frontmatter.data}</h3>
            <p>{node.excerpt}</p>
            <br></br>
          </div>
        ))
      }
    </div>
    
  </Layout>
)}



export const query = graphql`
query{
    allMarkdownRemark {
      totalCount
    edges {
      node {
        id
        frontmatter {
          date
          description
          title
        }
        excerpt
      }
    }
  }
}
`
