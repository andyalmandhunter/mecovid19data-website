import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

const MOBILE_BREAKPOINT = 640

function useWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return width
}

const Plots = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: ASC, fields: frontmatter___order }
          filter: { frontmatter: { type: { eq: "plot" } } }
        ) {
          edges {
            node {
              html
              frontmatter {
                filename
                slug
              }
            }
          }
        }
      }
    `
  )

  const width = useWidth()

  return (
    <>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Plot
          key={node.frontmatter.slug}
          filename={node.frontmatter.filename}
          html={node.html}
          width={width}
        />
      ))}
    </>
  )
}

const Plot = ({ filename, html, width }) => {
  const size = width < MOBILE_BREAKPOINT ? "small" : "large"

  return (
    <>
      <figure>
        <embed type="image/svg+xml" src={`/plot/${filename}?size=${size}`} />
      </figure>
      <div
        className="plot-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}

export default Plots
