import ContentLayout from '../ContentLayout';
import ThemeProvider from '../ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <ContentLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
