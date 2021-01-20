/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { AuthAction, AuthState } from './modules/auth/types';
import rootReducer from './modules/rootReducer';

export interface StoreState {
  auth: AuthState;
}

export type StoreAction =
  | AuthAction

const persistConfig = {
  version: 2,
  key: 'cncvarejo',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares);

  const store = createStore(persistedReducer, composeWithDevTools(enhancer));

  const persistor = persistStore(store);

  return { store, persistor };
};
