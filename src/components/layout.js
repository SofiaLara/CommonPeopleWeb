import * as React from "react";
// The Link component is an example of a pre-built component that you can use in your site.
// In other words, the Link component is defined and maintained by another package
// The Gatsby Link component provides a performance feature called preloading.
// This means that the resources for the linked page are requested when the link scrolls into view or when the mouse hovers on it.
// That way, when the user actually clicks on the link, the new page can load super quickly.
// Use the Link component for linking between pages within your site.
// For external links to pages not created by your Gatsby site, use the regular HTML < a > tag.

// Gatsby uses graphql to pull data into the website.
// To pull data into a component, we use the graphQL useStaticQuery hook.
import { Link, useStaticQuery, graphql } from "gatsby";
// when you use CSS Modules with Gatsby, you can have both! Your kebab-case class names in your .module.css
// files will automatically be converted to camel -case variables that you can import in your.js files.
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "../styles/layout.module.css";

// destructure the props object
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    // To apply classes to React components, we use the className prop.
    <div className={container}>
      <header className={siteTitle}>
        {pageTitle} | {data.site.siteMetadata.title}
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/directory" className={navLinkText}>
                Directory
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/events" className={navLinkText}>
                Events
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>Common people all rigths reserved</footer>
    </div>
  );
};

export default Layout;
