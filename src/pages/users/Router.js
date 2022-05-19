import { Switch,useRouteMatch,Route } from "react-router-dom";
import IndexUser from "./Index";
import ShowUser from "./Show";
const RouterUser = () => {
    const {path} = useRouteMatch()
    return(
        <Switch>
            <Route exact path={path} component={IndexUser} />
            <Route path={`${path}/:userId`} component={ShowUser} />
        </Switch>
    )
}

export default RouterUser;