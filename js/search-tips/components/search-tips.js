import React from "react";

const SearchTips = props => (
  <div className="search-tips-block">
    {props.wordsTips.map((item, index) => (
      <div
        key={index}
        className="search-tips"
        onMouseDown={() => props.onTipClickHandler(item)}
      >
        {item}
      </div>
    ))}
  </div>
);

export default SearchTips;
