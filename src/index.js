import React from 'react'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import { render } from 'react-dom'
const store = configureStore()
import Home from 'containers/home/index'
import Page1 from 'containers/page1/index'
import Page2 from 'containers/page2/index'
import Moren from 'containers/moren/index'
render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/home">Hoeeme</Link></li>
          <li><Link to="/page1">eeeee</Link></li>
          <li><Link to="/page2">33sdddeees3</Link></li>
        </ul>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
          </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


