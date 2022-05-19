import IndexPost from "./Index";
import ShowPosts from "./Show";
import CreatePost from "./Create";
import EditPost from "./Edit";
import { Switch,Route, useRouteMatch } from "react-router-dom";
const RouterPosts = ()=>{
   const {path} = useRouteMatch();
    return(
          <Switch>
              <Route exact path={path} component={IndexPost} />
              <Route exact path={`${path}/create`} component={CreatePost} />
              <Route exact path={`${path}/Edit/:postId`} component={EditPost} />
              <Route exact path={`${path}/:postId`} component={ShowPosts} />
          </Switch>
    )
}
export default RouterPosts;