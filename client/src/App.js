import './App.css';
import Body from './components/GeneralBody/body';
import Header from './components/Header/header';
import {Route} from "react-router-dom"
import RecipeDetail from './components/RecipeDetail/recipeDetail';
import Form from './components/Form/form';
import Landing from './components/Landing/Landing';
import About from './components/About/about';


function App() {


  return (

    <div className="App">
      <Route exact path={"/"}> <Landing></Landing> </Route>
      <Route  path={"/home"}><Header /></Route>
      <Route exact path={"/home"}><Body /></Route>
      <Route exact path={"/recipes/:id"}><RecipeDetail /></Route>
      <Route path={"/home/createRecipe"}> <Form /> </Route>
      <Route path={"/home/about"}> <About></About> </Route>
    </div>
  );
}

export default App;
