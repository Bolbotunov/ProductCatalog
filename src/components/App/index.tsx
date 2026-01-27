import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routesConfig } from '@/constants';

import ContentLayout from '../ContentLayout';
import ThemeProvider from '../ThemeProvider';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
