import * as React from "react";

export default function Search({ onChange, value }) {
  return (
    <>
      Search by name
      <input onChange={(e) => onChange(e.target.value)} value={value}></input>
    </>
  );
}
