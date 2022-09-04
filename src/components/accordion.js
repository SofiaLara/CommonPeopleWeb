import * as React from "react";
import { useState } from "react";
import {
  accordion,
  accordionTitle,
  accordionContent,
} from "../styles/accordion.module.css";

// Define your component
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={accordion}>
      <div
        tabindex="0"
        role="button"
        aria-pressed="false"
        className={accordionTitle}
        onClick={() => setIsActive(!isActive)}
        onKeyDown={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className={accordionContent}>{content}</div>}
    </div>
  );
};

// Export your component
export default Accordion;
