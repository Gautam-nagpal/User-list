import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Routes from './routes/routes';
import { getData } from './utils';
import * as userActions from "./redux/actions/users"


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let data = getData("user-list")
    if (data) {
      dispatch(userActions.setInitialData(JSON.parse(data)))
    }
  }, [])

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
