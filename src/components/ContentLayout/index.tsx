import { Outlet } from 'react-router-dom';

import Header from '../Header';

function ContentLayout() {
  return (
    <div className="appContainer">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ContentLayout;
