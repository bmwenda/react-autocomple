import '../styles/App.css';
import { BASE_URL } from '../utils';
import AutoComplete from './AutoComplete';

function App() {
  const url = `${BASE_URL}?title=`
  return (
    <div className="App">
      <h1>Search Public APIs by Name</h1>
      <AutoComplete url={url} />
    </div>
  );
}

export default App;
