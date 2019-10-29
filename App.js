import React from "react";

import PlacesNavigator from "./navigation/PlacesNavigator";
import { combineReducers, createStore, applyMiddleware } from "redux";
import placesReducer from "./store/places-reducer";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  places: placesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
