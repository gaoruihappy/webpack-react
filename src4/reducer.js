var initState = {
  list:[{
        text:11
      },{
        text:88
      },{
        text:0
      }]
}
export default function(state = initState, action){
  switch(action.type){
    case 'addTodo':
    debugger
      return {
        ...state,
        list:[...state.list,{
          text:77
        }
        ]
      }
    default:
      return state;
  }
}