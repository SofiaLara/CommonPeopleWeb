import * as React from "react";
import { useEffect, useState } from "react";
// importing special font from fontsource
import "@fontsource/abril-fatface";
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
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  headerScroll,
} from "../styles/layout.module.css";

// destructure the props object
const Layout = ({ pageTitle, children }) => {
  const [liked, setLike] = useState({
    state: false,
    number: "0",
  });

  const handleToggle = () => {
    setLike((prevState) => ({
      state: !prevState.state,
      number: +!+prevState.number + "",
    }));
  };

  const [scrollColor, setColor] = useState();

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <header className={scrollColor ? headerScroll : ""}>
        <title className={siteTitle}>CP | {data.site.siteMetadata.title}</title>
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
      <main>{children}</main>
      <footer>
        {data.site.siteMetadata.title} 2022 - All rigths reserved
        <button onClick={handleToggle}>Like?{liked.number}</button>
      </footer>
    </div>
  );
};

export default Layout;
