// Import React
import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/layout";
import Search from "../components/search";
import Cards from "../components/cards";
// Plugin for resposive images
import { StaticImage } from "gatsby-plugin-image";
import {
  directoryHeader,
  directorySearch,
} from "../styles/directory.module.css";
import { pagesHeroBanner } from "../styles/layout.module.css";
import { cardsDirectoryData } from "../data/content";

// Define your component
const DirectoryPage = () => {
  //Save initial data
  const [cardData, setCardData] = useState([]);
  //Save copy to filter
  const [filteredDirData, setFilteredData] = useState(cardData);
  //Track the input value to be able to reset it
  const [ivalue, setValue] = useState("");

  //Function to filter by searching
  const searchCard = (word) => {
    setValue(word);
    word.toLowerCase();
    const result = cardData.filter((data) => {
      return data.title.toLowerCase().search(word) !== -1;
    });
    setFilteredData(result);
  };

  //Same as didMount, perfect for fetching data on load
  useEffect(() => {
    setCardData(cardsDirectoryData);
    setFilteredData(cardsDirectoryData);
    setValue("");
  }, []); //Add dependencies to check if useEffect should run or not (It compares previous state with changes if they ocurred).
  //If left empty, it will run endlessly

  return (
    <Layout pageTitle="Directory">
      <StaticImage
        alt="Illustration of a family buying bread at a shop."
        src="../images/shops-news.jpg"
        className={pagesHeroBanner}
      />
      <section className={directoryHeader}>
        <h1>Shops directory</h1>
        <p>
          Search for recommended people and businesses to help you with house
          maintenance, grocery shopping and many more.
        </p>
      </section>
      <section className={directorySearch}>
        <Search onChange={(value) => searchCard(value)} value={ivalue} />
        <Cards data={filteredDirData} />
      </section>
    </Layout>
  );
};

// Export your component
export default DirectoryPage;
