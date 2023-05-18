import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import Root, { ROUTES } from "./components/Root";
import Posts from './components/Posts';
import Community from './components/Community';
import Search from './components/Search';
import styles from './components/styles/App.css';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route path='/:communityName?' element={ <Community /> } />
    </Route>
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
