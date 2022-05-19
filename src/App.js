import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import IndexPost from "./pages/posts/Index";
import RouterUser from "./pages/users/Router";
import RouterPosts from "./pages/posts/Router";

function App() {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/users" component={RouterUser} />
        <Route path="/posts" component={RouterPosts} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
