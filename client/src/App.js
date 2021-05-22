import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Upload from "./components/Uploads/Upload";
import SignIn from "./components/Form/SignIn/SignIn";
import SignUp from "./components/Form/SignUp/SignUp";
import SignOut from "./components/signOut/SignOut";
import StartPage from "./components/StartPage/StartPage";

function App() {
  return (
    <React.Fragment>
      <Route exact path="/home" component={Dashboard} />
      <Route exact path="/video/:videoTitle" component={VideoPlayer} />
      <Route exact path="/upload" component={Upload} />
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/signOut" component={SignOut} />
      <Route exact path="/" component={StartPage} />
    </React.Fragment>
  );
}

export default App;
