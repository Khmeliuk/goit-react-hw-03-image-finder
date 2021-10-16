import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Modal from "../Modal/Modal";
import s from "./App.module.css";

export default class App extends Component {
  state = {
    search: null,
    showModal: false,
    modalImg: null,
  };

  handlerImgsName = (value) => {
    this.setState({ search: value, page: 1 });
  };

  handlerImg = (url) => {
    this.setState({ modalImg: url });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { search, showModal, modalImg } = this.state;
    return (
      <div className={s.App}>
        <SearchBar onSubmit={this.handlerImgsName} />
        <ToastContainer autoClose={5000} position="top-center" />
        <ImageGallery
          search={search}
          onShowModal={this.toggleModal}
          modalImg={this.handlerImg}
        />

        {showModal && (
          <Modal close={this.toggleModal}>
            <img src={modalImg} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
