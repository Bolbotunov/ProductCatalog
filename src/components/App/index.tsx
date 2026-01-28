import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ContentLayout from '../ContentLayout';
import ThemeProvider from '../ThemeProvider';
import { routesConfig } from './routesConfig';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<ContentLayout />}>
              {routesConfig.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
