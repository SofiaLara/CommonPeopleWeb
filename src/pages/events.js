// Import React
import * as React from "react";
import Layout from "../components/layout";
import Button from "../components/button";
import { StaticImage } from "gatsby-plugin-image";
import {
  eventsHeader,
  eventsGrid,
  eventCard,
  eventBtn,
} from "../styles/events.module.css";
import { pagesHeroBanner } from "../styles/layout.module.css";
import { eventsData } from "../data/content";

// Define your component
const EventsPage = () => {
  const btnText = "Learn more";
  const btnClassName = eventBtn;

  return (
    <Layout pageTitle="Events">
      <StaticImage
        alt="Balham common, trees, green grass and a row of Edwardian houses overlooking the common."
        src="../images/hyde-farm.jpeg"
        className={pagesHeroBanner}
      />
      <section className={eventsHeader}>
        <h1>Events</h1>
        <p>Stay up to date with what's going on in your community.</p>
      </section>
      <section>
        <h3>Current events happening in your area</h3>
        <div className={eventsGrid}>
          {eventsData.map(({ id, title, link, date, content }) => (
            <div key={id} className={eventCard}>
              <p>{date}</p>
              <h4>{title}</h4>
              <p>{content}</p>
              <Button title={btnText} btnClass={btnClassName} btnLink={link} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

// Export your component
export default EventsPage;
