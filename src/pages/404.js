import React from "react"

import Layout from "../components/globals/layout"
import SEO from "../components/globals/seo"

// const StyledSection = styled.section`
//   width: 100%;
//   max-width: 62.5rem;
//   margin: 0 auto;
//   padding: 0 2.5rem;
//   height: auto;
//   background: ${({ theme }) => theme.colors.background};
//   h1 {
//     font-size: 1.5rem;
//   }
// `;

// const StyledContentWrapper = styled(ContentWrapper)`
//   && {
//     width: 100%;
//     max-width: 36rem;
//     margin: 0;
//     padding: 0;
//     height: 100%;
//   }
// `;

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="404: Not found"
        meta={[{ name: "robots", content: "noindex" }]}
      />
      <h1 data-testid="heading">NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}

export default NotFoundPage
