import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";


function PrivateRoute({ children, ...rest }) {
    const { user, isLoading } = useAuth();
    
    if (isLoading) {
      return (<div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>)
    }

    return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;