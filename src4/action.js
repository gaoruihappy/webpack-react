import fetch from "./util.js"
export var addTodo = () => (dispatch, getState) => {
	fetch('http://127.0.0.1:3000/msg',{method:"get"}).then(
		result=>{
			 dispatch({
			    type:'addTodo'
			  })
		}
	)
	dispatch({
	    type:'addTodo'
	})
}

