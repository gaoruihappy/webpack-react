var initState = {
  list:[{
        text:11
      },{
        text:22
      },{
        text:33
      }]
}
export default function(state = initState, action){
  switch(action.type){
    case 'addTodo':
      return [
        ...state,
        {
           text:77
        }
      ]
    default:
      return state;
  }
}