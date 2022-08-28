import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const isloggedin = useSelector((state) => state.auth.loggedin);
  return (
    <Fragment>
      <Header />
      {!isloggedin && <Auth />}
      {isloggedin && (
        <>
          <UserProfile />
          <Counter />
        </>
      )}
    </Fragment>
  );
}

export default App;
