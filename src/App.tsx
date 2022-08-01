import './App.css';
import ContainerCounter from './containers/ContainerCounter';
import GithubProfileLoader from './containers/GithubProfileLoader';
import TodoApp from './containers/TodoApp';

function App() {
  return (
    <div className="App">
      <ContainerCounter/>
      <TodoApp/>
      <GithubProfileLoader/>
    </div>
  );
}

export default App;
