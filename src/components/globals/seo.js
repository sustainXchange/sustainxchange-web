import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import SchemaOrg from "./schema-org"

const SEO = ({ description, image, url, isBlogPost, datePublished, title }) => {
  let { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  site = site.siteMetadata

  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title ? title : site.title}</title>
        <meta
          name="description"
          content={description ? description : site.description}
        />
        {image && <meta name="image" content={image} />}

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image ? image : undefined}
        description={description}
        datePublished={datePublished}
        canonicalUrl={site.siteUrl}
        author={site.author}
        organization={site.organization}
        defaultTitle={site.title}
      />
    </>
  )
}

export default SEO
