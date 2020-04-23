import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import renderRemark from "../components/remark"

const DataDetails = () => {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { slug: { eq: "data-details" } }) {
          frontmatter {
            slug
          }
          htmlAst
        }
      }
    `
  )

  return (
    <div
      id={data.markdownRemark.frontmatter.slug}
      className="max-w-screen-sm mx-auto"
    >
      {renderRemark(data.markdownRemark.htmlAst)}
    </div>
  )
}

export default DataDetails
