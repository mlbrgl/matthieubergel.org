import React from "react"
import { graphql } from "gatsby"
import Layout from '../Layout/Layout'
import Head from '../Layout/Head/Head'
import './article.scss'

const Article = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Head title={frontmatter.title} />
      <main>
        {frontmatter.titleHide ? '' : <h1>{frontmatter.title}</h1>}
        {frontmatter.date ? <div className="date">{frontmatter.date}</div> : ''}
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </Layout>
  )
}

export default Article

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "dddd Do MMMM, YYYY")
        title
        titleHide
      }
    }
  }
`
