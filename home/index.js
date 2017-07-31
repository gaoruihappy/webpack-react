import React, {Component} from 'react'
import {connect} from 'react-redux'
import "./home.less"
import * as action from './action';
class Home extends Component {
    constructor (props) {
        super(props);
    }
    render() {
      var {addTodo} = this.props;
      var list = this.props.data.list;
      return ( 
        <div >
        <input />
      		<div onClick={addTodo}>123</div>
          <ul >
            {
              list.map((item,i)=>{
                return (
                  <li key={i}>
                    {item.text}
                  </li>
                  )
              })
            }
      		</ul>
          <div className="a">color</div>
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