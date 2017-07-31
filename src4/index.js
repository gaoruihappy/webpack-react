import React from 'react'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import { render } from 'react-dom'
const store = configureStore()
import Home from '../home/index'
import Page1 from '../page1/index'
import Page2 from '../page2/index'
render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page1">Page1</Link></li>
          <li><Link to="/page2">Page2</Link></li>
        </ul>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
          </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

