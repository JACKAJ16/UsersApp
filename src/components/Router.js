import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import Posts from './Posts/Posts.js'
import Post from './Post/Post.js'
import Topost from './Create/create.js'
import Put from './Edit/put.js'
import Delete from './Delete/delete.js'
import Users from './Users/Users.js'



const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Users} />
      <Route path="/user/:id" component={Posts} />
      <Route path="/post/:id" component={Post} />
      <Route path="/topost/" component={Topost} />     
      <Route path="/toedit/" component={Put} />     
      <Route path="/todelete/" component={Delete} />     
    </Switch>
  </HashRouter>
);

export default Router;