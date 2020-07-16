import React from "react";
import styles from "./style.module.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "../Nav";
import Menu from "../Menu";
import Marks from "../Marks";
import Attendance from "../Attendance";
import Messages from "../Messages";
import Announcements from "../Announcements";

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Menu />
        <div className={styles.main}>
          <Switch>
            <Route path="/workinprogres">
              <Marks />
            </Route>
            <Route path="/atd">
              <Attendance />
            </Route>
            <Route path="/msg">
              <Messages />
            </Route>
            <Route parh="/anc">
              <Announcements />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
