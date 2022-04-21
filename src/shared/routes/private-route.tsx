import {Redirect, Route} from "react-router";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";

/**
 * Only if LogedIn
 * @param {any} children
 * @param {boolean} isAuthenticated
 * @param {{}} rest
 * @returns {any}
 * @constructor
 */
export function PrivateRoute ({ children, isAuthenticated, path, ...rest }: { children: any, isAuthenticated: boolean, path: string }){

    return (
        <Route
            path={path}
            render={({ location }) => {
                return isAuthenticated === true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: ALL_APP_ROUTES.HOME,
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
}
