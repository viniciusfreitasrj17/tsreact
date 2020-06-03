import { createStore, applyMiddleware, Store } from "redux";
import createSataMiddleware from "redux-saga";
import { RepositoriesState } from "./ducks/repositories/types";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  repositories: RepositoriesState;
}

const sagaMiddleware = createSataMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
