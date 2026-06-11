import { Provider } from 'react-redux';
import { store } from '../store/store.js';
import { ThemeProvider } from './ThemeProvider.jsx';

export function AppProviders({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}
