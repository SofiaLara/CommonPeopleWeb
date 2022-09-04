import * as React from "react";
import { Link } from "gatsby";
import { button } from "../styles/button.module.css";

export default function Button({ title, btnClass, btnLink }) {
  return (
    <Link to={btnLink} className={`${button} ${btnClass}`}>
      {title}
    </Link>
  );
}
