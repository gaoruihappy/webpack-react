import React, {Component} from 'react'
import {BrowserRouter ,Router,Route,Link} from 'react-router-dom'
import "./index.less"
export default class extends Component {
    constructor (props) {
        super(props);
        this.state = {
          
        }
    }
    render() {
      console.log(this.props.match)
      let match = this.props.match
      return ( 
        <div className="aa">qq
          <Link to={`${match.url}/?aa=1`}>Page1</Link>
        </div>
      )
  }
}

