import './Styles/global.css';
import Layout from 'Layout';
import Pages from 'Pages';
import { StoreContextProvider } from 'Store/Context';

function App() {
  return (
    <StoreContextProvider>
      <Layout>
        <Pages />
      </Layout>
    </StoreContextProvider>
  );
}

export default App;
