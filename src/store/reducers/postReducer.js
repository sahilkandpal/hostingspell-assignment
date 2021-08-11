const initialState = {
  items: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      if (localStorage.getItem("posts")) {
        let posts = JSON.parse(localStorage.getItem("posts"));
        var finalPosts = [...posts, ...action.payload];
      } else {
        var fetchedposts = action.payload;
      }
      return {
        ...state,
        items: finalPosts || fetchedposts,
      };

    case "NEW_POST":
      if (localStorage.getItem("posts")) {
        var posts = JSON.parse(localStorage.getItem("posts"));
        posts = [action.payload, ...posts];
        localStorage.setItem("posts", JSON.stringify(posts));
      } else {
        var newpost = [action.payload];
        localStorage.setItem("posts", JSON.stringify(newpost));
      }

      return {
        ...state,
        items: [action.payload, ...state.items],
      };

    default:
      return state;
  }
};

export default postReducer;
