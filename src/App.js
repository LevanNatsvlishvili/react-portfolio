import './Styles/global.css';
import Layout from 'Layout';
import { StoreContextProvider } from 'Store/Context';
import RenderRoutes from 'Routing/Routing';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <StoreContextProvider>
        <Layout>
          <RenderRoutes />
        </Layout>
      </StoreContextProvider>
    </Router>
  );
}

export default App;
