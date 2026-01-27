import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';

function ContentLayout() {
  return (
    <div className="appContainer">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default ContentLayout;
