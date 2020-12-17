import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

// Used for debugging redux code
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

// Removing redux-logger from production build
const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };
