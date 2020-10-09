import { createStore, combineReducers } from "redux";
import toggleFavorite from "./Reducers/favoriteReducer";
import toggleProfile from "./Reducers/profileReducer";
import toggleRating from "./Reducers/ratingReducer";

export default createStore(
  combineReducers({ toggleFavorite, toggleProfile, toggleRating })
);
