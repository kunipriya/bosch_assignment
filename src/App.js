import React from 'react';
import Main from './Component/main';
import Setting from './Component/setting';
import UserList from './Component/userList';
import UserProfile from './Component/userProfile';
import { Route, Switch } from "react-router";

function App() {
    return (
      <div className="App">
      
       <Switch>
          <Route exact path="/" component={Main} />
          <Route
            path="/setting"
            component={Setting}
          />
          <Route
            path="/password"
            component={Setting}
          />
          <Route
            path="/privacy_policy"
            component={Setting}
          />
          <Route path="/about" 
          component={Setting} />
           <Route path="/userlist" 
          component={UserList} />
           <Route path="/userprofile" 
          component={UserProfile} />
        
        </Switch>
      </div>
    );
 
}

export default App;
