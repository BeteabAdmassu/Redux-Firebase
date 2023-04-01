import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import fetchSaga from "../sagas/saga";

import data from "./data-slice";
import btnClicked from "./btn-slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { btnStore: btnClicked.reducer, DataStore: data },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(fetchSaga);

export default store;
