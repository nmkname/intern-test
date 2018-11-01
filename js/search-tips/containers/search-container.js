import { connect } from "react-redux";

import {
  onInputChange,
  onTipClick,
  onFocus,
  onBlur
} from "../actions/search-actions";

import SearchForm from "../components/search-form";

const mapStateToProps = state => ({
  showTips: state.search.showTips,
  inputSearchValue: state.search.inputSearchValue,
  wordsTips: state.search.wordsTips
});

const mapDispatchToProps = dispatch => ({
  onInputChange: value => dispatch(onInputChange(value)),
  onTipClick: tipsText => dispatch(onTipClick(tipsText)),
  onFocus: () => dispatch(onFocus()),
  onBlur: () => dispatch(onBlur())
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

export default SearchContainer;
