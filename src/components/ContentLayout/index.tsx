import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

import { SUCCESS_DELAY } from '@/constants';

import Footer from '../Footer';
import Header from '../Header';

function ContentLayout() {
  return (
    <div className="appContainer">
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: SUCCESS_DELAY,
        }}
      />

      <Footer />
    </div>
  );
}

export default ContentLayout;
