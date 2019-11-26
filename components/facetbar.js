import React from "react";
import Link from "next/link";
import "../style.css";

const FacetBar = ({ linkData }) => {
  console.log(linkData);
  return (
    <div className="facet-bar">
      {linkData.map((item, key) => {
        return (
          <Link key={key} href={`content/${item.url}`}>
            <a>{item.title}</a>
          </Link>
        );
      })}
    </div>
  );
};
// const FacetBar = () => (
//   <div class='facet-bar'>
//     <a href="facet/link1">Link 1</a>
//     <a href="facet/link2">Link 2</a>
//     <a href="facet/link3">Link 3</a>
//     <a href="facet/link4">Link 4</a>
//   </div>
// );

export default FacetBar;
