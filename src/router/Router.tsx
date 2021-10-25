import { Route, Switch } from "react-router"
import { Home } from "../Home"
import { Page2 } from "../Page2"
import { page1Routes } from "./Page1Routes"
import { page2Routes } from "./Page2Routes"

export const Router = () => {
    return (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page1" render={( {match :  { url } } ) => {

            return (
                <Switch>
                {
                    page1Routes.map(route => {
                        const { path, exact, children} = route;
                        return(
                            <Route key={path} path={`${url}${path}`} exact={exact}>
                                {children}
                            </Route>
                        )
                    })
                }

                </Switch>
            )
        }} />
          <Route path="/page2" render={({ match: { url }}) => {
              return (
                  page2Routes.map(route => {
                      const { path, exact, children } = route;
                      return (
                          <Route key={path} path={`${url}${path}`} exact={exact}>
                              {children}
                            </Route>
                      )
                  })
              )
          }}/>
        </Switch>
    )
}
