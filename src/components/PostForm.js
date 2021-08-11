import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../store/actions/postActions";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      titleError: "",
      bodyError: "",
      loading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    if (this.state.title.trim() !== "" && this.state.body.trim() !== "") {
      this.setState({ loading: true });
      this.props.createPost(post);
      setTimeout(() => {
        this.setState({ loading: false });
        this.setState({
          title: "",
          body: "",
          titleError: "",
          bodyError: "",
        });
      }, 1000);
    } else {
      if (this.state.title.trim() === "") {
        this.setState({ titleError: true });
      } else {
        this.setState({ titleError: false });
      }
      if (this.state.body.trim() === "") {
        this.setState({ bodyError: true });
      } else {
        this.setState({ bodyError: false });
      }
    }
  };

  render() {
    return (
      <section className="form-section">
        <form method="POST" className="form" onSubmit={this.onSubmit}>
          <h1>Add Post</h1>
          <label htmlFor="title">Title </label>

          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={this.onChange}
            value={this.state.title}
            autoComplete="off"
          />
          {this.state.titleError ? <p>* This field is mandatory</p> : null}

          <label htmlFor="body">Body </label>

          <textarea
            name="body"
            placeholder="description"
            onChange={this.onChange}
            value={this.state.body}
            rows="5"
            autoComplete="off"
          />
          {this.state.bodyError ? <p>* This field is mandatory</p> : null}

          <button type="submit">
            {!this.state.loading ? (
              "Publish"
            ) : (
              <img src="uploading.gif" alt="" width="70" />
            )}
          </button>
        </form>
      </section>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
