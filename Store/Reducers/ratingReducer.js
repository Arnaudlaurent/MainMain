// Store/Reducers/ratingReducer.js

const initialState = {
  ratingStories: [],
};

function toggleRating(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "TOGGLE_RATING":
      const ratingStoriesIndex =
        state.ratingStories &&
        state.ratingStories.findIndex(
          (item) => item.title === action.value.title
        );
      if (ratingStoriesIndex !== -1) {
        // L'histoire est déjà noté, on le modifie
        state.ratingStories[ratingStoriesIndex] = action.value;
        nextState = {
          ...state,
          ratingStories: state.ratingStories,
        };
      } else {
        // L'histoire n'est pas encore noté, on l'ajoute à la liste
        nextState = {
          ...state,
          ratingStories: [...state.ratingStories, action.value],
        };
      }
      return nextState || state;
    default:
      return state;
  }
}

export default toggleRating;
