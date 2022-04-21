import {Redirect, Route} from "react-router";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";

/**
 * Only if LogedOut
 * @param {any} children
 * @param {boolean} isAuthenticated
 * @param {{}} rest
 * @returns {any}
 * @constructor
 */
export function PublicRoute ({ children, isAuthenticated, path,  ...rest }: { children: any, isAuthenticated: boolean, path: string }){

    console.log('props.isAuthenticated ', isAuthenticated);
    console.log('children ', children);
    return (
        <Route
            path={path}
            render={({ location }) => {
                return isAuthenticated === false ? (
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
