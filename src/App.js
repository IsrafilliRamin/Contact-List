import './App.less';
import  Router  from "./containers/Router/Router";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router/>
      <ToastContainer />
    </div>
  );
}

export default App;
