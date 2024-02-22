import '../styles/App.css';
import { BASE_URL } from '../constants';
import AutoComplete from './AutoComplete';
import ErrorBoundary from './ErrorBoundary';
import ErrorPage from './shared/ErrorPage';

function App() {
  const url = `${BASE_URL}?title=`
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <div className="App">
      <h1>Search Public APIs by Name</h1>
        <AutoComplete url={url} />
    </div>
    </ErrorBoundary>
  );
}

export default App;
