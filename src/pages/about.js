// Import React
import * as React from "react";
import Layout from "../components/layout";
import Accordion from "../components/accordion";
import {
  aboutUsHeader,
  aboutUsIntro,
  aboutUsMap,
  aboutUsAccordion,
} from "../styles/about.module.css";
import { pagesHeroBanner } from "../styles/layout.module.css";
import { accordionData } from "../data/content";
// Plugin for resposive images
import { StaticImage } from "gatsby-plugin-image";

// Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <StaticImage
        alt="Balham common, trees, green grass and a row of Edwardian houses overlooking the common."
        src="../images/hyde-farm.jpeg"
        className={pagesHeroBanner}
      />
      <section className={aboutUsHeader}>
        <h1>About Common people</h1>
        <p>We are a community of nice people living in the common</p>
      </section>
      <section className={aboutUsIntro}>
        <h3>Brief introduction to Hyde Farm Conservation Area</h3>
        <p>
          The Hyde Farm Conservation Area is located on the western edge of
          Lambeth at the borough boundary with the London Borough of Wandsworth;
          immediately north of Tooting Bec Common.
        </p>
        <p>
          {" "}
          The conservation area was designated following a campaign by local
          residents in February 1996; and the boundary was redrawn following
          another campaign in October 2015. The designation covers part of the
          Hyde Farm Estate, which was developed from the late 1890’s and
          completed in 1916; a good quality housing estate constructed solely
          for rent, along with some associated community buildings. Its
          architectural interest derives from the property types (mostly
          Tyneside flats), the high quality of construction and refinement and
          unity of architectural details. Design coherence on the residential
          properties is achieved through common property types, the use of a
          consistent palette of robust materials and repetitive architectural
          detailing which is both well designed and of good quality.
        </p>
        <p>
          {" "}
          Its historic interest derives from its primary construction by Edward
          Hayes Dashwood who set aside some properties for veterans of the Boer
          War and First World War and later the Dashwood Foundation which he set
          up to provide homes for ex-service people. Only the most noteworthy
          parts of the estate have been included within the Conservation Area;
          the boundary being tightly drawn to primarily include the Tyneside
          Flats.
        </p>
      </section>
      <section className={aboutUsAccordion}>
        <h3>Contact us</h3>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </section>
      <section className={aboutUsMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6149.856921046316!2d-0.14387346340457982!3d51.44405769119526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605d3f956e5fd%3A0xf88717591516f189!2sTooting%20Bec%20Common!5e0!3m2!1sen!2suk!4v1660407129800!5m2!1sen!2suk"
          width="100%"
          height="450"
          title="map of hyde farm"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </Layout>
  );
};

// Export your component
export default AboutPage;
