import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import accessorizeReducer from './features/accessorizeSlice';


// Using store here not creating another store..
const store = configureStore({
  reducer: {
    accessorize: accessorizeReducer
  }
});

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);