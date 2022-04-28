import './Styles/global.css';
import Layout from 'Layout';
import { StoreContextProvider } from 'Store/Context';
import RenderRoutes from 'Routing/Routing';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <StoreContextProvider>
      <Router>
        <Layout>
          <RenderRoutes />
        </Layout>
      </Router>
    </StoreContextProvider>
  );
}

export default App;
