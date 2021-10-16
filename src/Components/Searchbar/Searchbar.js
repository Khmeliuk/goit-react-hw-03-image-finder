import { Component } from "react/cjs/react.production.min";
import { toast } from "react-toastify";
import s from "./Searchbar.module.css";
import PropTypes from "prop-types";

export default class SearchBar extends Component {
  state = {
    searchValue: "",
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchValue.trim() === "") {
      toast.error("enter search word");
      return;
    }

    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: "" });
  };

  handlerSearch = (e) => {
    this.setState({ searchValue: e.currentTarget.value });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handlerSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            onChange={this.handlerSearch}
            value={this.state.searchValue}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

SearchBar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
