import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as action from './action';
class Home extends Component {
    constructor (props) {
        super(props);
    }
    render() {
      var {addTodo} = this.props;
      return ( 
        <div >
      		<div onClick={addTodo}>123</div>
          <ul>
      		</ul>
      	</div>    
      )
  }
}
function mapStateToProps(state) {
  return {
    data:state.List,
  };
}
export default connect(mapStateToProps, action)(Home)