import createSagaMiddleware from 'redux-saga';
import { Middleware } from 'redux';

import createStore from './createStore';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

const { store, persistor } = createStore(middlewares);

sagaMiddleware.run(rootSaga);

export { store, persistor };
