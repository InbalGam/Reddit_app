import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import Root, { ROUTES } from "./components/Root";
import Posts from './components/Posts';
import Community from './components/Community';
import Search from './components/Search';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route path={ROUTES.Community} element={ <Community /> }/>
    </Route>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
      <body className="App-body">
        <RouterProvider router={ router } />
      </body>
    </div>
  );
}

export default App;
