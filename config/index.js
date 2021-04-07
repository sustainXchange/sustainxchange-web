module.exports = {
  //-- SITE SETTINGS -----
  author: "@jasperanders",
  siteTitle: "Gatsby Starter Portfolio Minimal",
  siteShortTitle: "Gatsby", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "A modern one-page portfolio with a clean yet expressive design.",
  siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio Minimal", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/konstantin-muenster/"
    },
    {
      name: "Github",
      url:
        "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal"
    }
  ],

  //-- NAVIGATION SETTINGS -----

  footerLinks: [
    {
      name: "Datenschutzerklärung",
      url: "/privacy"
    },
    {
      name: "Impressum",
      url: "/imprint"
    }
  ]
}
