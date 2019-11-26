import React from "react";
import Link from "next/link";
import "../style.css";

const FacetBar = ({ parent, linkData }) => {
  
  return (
    <div className="facet-bar">
      {linkData.map((item, key) => {
        return (
          <Link key={key} href={`content/${parent}/${item.url}`}>
            <a>{item.title}</a>
          </Link>
        );
      })}
    </div>
  );
};

FacetBar.defaultProps = {
    parent: '',
    linkData : []
}

export default FacetBar;
