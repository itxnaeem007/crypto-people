import './utils/style.css';
import Navbar from './components/Navbar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'


import Sidebar from './components/Sidebar';
import Home from './pages';
import Presale from './pages/presalePage';
import { getLibrary } from './utils/web3React'

import "bootstrap/dist/css/bootstrap.min.css";

const NetworkContextName = 'NETWORK'
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <BrowserRouter>
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/pre-sale"} component={Presale} />
          </Switch>

        </BrowserRouter>

      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
}

export default App;
