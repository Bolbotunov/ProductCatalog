import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from '@/store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ContentLayout from '../ContentLayout';
import ThemeProvider from '../ThemeProvider';
import { routesConfig } from './routesConfig';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route element={<ContentLayout />}>
                {routesConfig.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
