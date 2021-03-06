import React from "react";
import SearchTips from "../components/search-tips";

const SearchForm = props => {
  return (
    <section onFocus={() => props.onFocus()} onBlur={() => props.onBlur()}>
      <h1>Поисковые подсказки</h1>
      <input
        className="search-input"
        type="search"
        onChange={e => props.onInputChange(e.target.value)}
        value={props.inputSearchValue}
        placeholder={"Что вы хотите найти?"}
      />
      {props.showTips && (
        <SearchTips
          wordsTips={props.wordsTips}
          onTipClickHandler={props.onTipClick}
        />
      )}
    </section>
  );
};

export default SearchForm;
