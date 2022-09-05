// Import React
import * as React from "react";
import { cards, card } from "../styles/cards.module.css";

export default function Cards({ data }) {
  return (
    <>
      <div className={cards}>
        {data.map((post) => (
          <div key={post.id} className={card}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
