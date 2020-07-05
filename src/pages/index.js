import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="max-w-screen-sm mx-auto">
      <p className="px-4 py-1 mt-2">
        We've stopped updating this page (life just got too busy). Meanwhile,
        the Maine CDC has made a lot more data available on their COVID-19
        dashboard. Please check there for up-to-date information, or check out
        the references listed below. Thanks for your continued interest!
      </p>
    </div>
    <div className="max-w-screen-sm mx-auto">
      <h1 id="references" className="px-4 mt-4 text-3xl font-semibold">
        References
      </h1>
      <div className="p-4">
        {data.allReferencesYaml.edges.map(({ node }, i) => (
          <Reference
            key={node.slug}
            slug={node.slug}
            text={node.text}
            link={node.link}
            index={i}
          />
        ))}
      </div>
    </div>
  </Layout>
)

const Reference = ({ slug, text, link, index }) => (
  <div
    className={`${
      index > 0 ? "pt-2" : ""
    } pb-2 flex leading-normal text-base sm:text-lg`}
    id={slug}
  >
    <div className="tracking-wider">{`[${index + 1}]`}</div>
    <div className="ml-2 sm:ml-4">
      {text}{" "}
      <a className="text-blue-700 underline hover:no-underline" href={link.url}>
        {link.label}
      </a>
      .
    </div>
  </div>
)

export const query = graphql`
  query IndexPageQuery {
    allReferencesYaml {
      edges {
        node {
          slug
          text
          link {
            label
            url
          }
        }
      }
    }
  }
`

export default IndexPage
