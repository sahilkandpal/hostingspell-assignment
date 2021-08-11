import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../store/actions/postActions";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    this.props.fetchPosts();
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    const postItems = this.props.posts.map((post, index) => (
      <Post post={post} key={index} />
    ));
    return (
      <section className="posts-section">
        <h1 className="posts-heading">Posts</h1>

        <div className="posts">
          {this.state.loading ? (
            <img src="postloading.gif" alt="" width="400" />
          ) : (
            <div className="posts">{postItems}</div>
          )}
        </div>
      </section>
    );
  }
}

Posts.propsTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
