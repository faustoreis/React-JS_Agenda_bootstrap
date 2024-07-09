import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AppRoutes from './routes/routes';
import { Tabela } from './pages/tabela';
import Principal from './pages/principal';

function App() {
  return (
    <div className="App">
      <AppRoutes>
        <Principal>
          <Tabela />
        </Principal>
      </AppRoutes>
    </div>
  );
}

export default App;
