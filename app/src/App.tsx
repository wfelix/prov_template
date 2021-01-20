import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from './store';
import '@repay/react-credit-card/dist/react-credit-card.css';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from './styles/global';
import Routes from './routes';

import { skeletonTheme } from '../package.json';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <SkeletonTheme
          color={skeletonTheme.color}
          highlightColor={skeletonTheme.highlightColor}
        >
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Routes />
            </PersistGate>
          </Provider>
        </SkeletonTheme>
      </AppProvider>
      <ToastContainer />
      <GlobalStyles />
    </Router>
  );
};
export default App;
