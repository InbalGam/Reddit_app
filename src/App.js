import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Posts from './components/Posts';
import Community from './components/Community';
import Search from './components/Search';
import styles from './components/styles/App.css';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/:communityName?' element={ <Community /> } />
  ));

  return (
    <div className="App">
      <header className="App_header" styles={styles.App_header}>
        <Search />
      </header>
      <body className="App_body" styles={styles.App_body}>
        <RouterProvider router={ router } />
        <Posts />
      </body>
    </div>
  );
}

export default App;
