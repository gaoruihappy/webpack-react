import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../containers/App'
import todoApp from './reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './app';
// import './index.css';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// function componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
// }
// function tick() {
//   this.setState({
//     date: new Date()
//   });
// }
// function componentWillUnmount() {
//   clearInterval(this.timerID);
// }
// ReactDOM.render(
//   <Clock/>,
//   document.getElementById('root')
// );

// // const element = (
// //   <h1>
// //     Hello, {formatName(user)}!
// //   </h1>
// // );
// // const element = React.createElement(
// //   'h1',
// //   {className: 'greeting'},
// //   'Hello, world!'
// // );
// // function tick() {
// //   const element = (
// //     <div>
// //       <h1>Hello, world!</h1>
// //       <h2>It is {new Date().toLocaleTimeString()}.</h2>
// //     </div>
// //   );
// //   ReactDOM.render(
// //     element,
// //     document.getElementById('root')
// //   );
// // }

// // setInterval(tick, 1000);

// // function Welcome(props) {
// //   return <h1>Hello, {props.name}</h1>;
// // }

// // const element = <Welcome name="Sara" />;
// // ReactDOM.render(
// //   element,
// //   document.getElementById('root')
// // );
// // ReactDOM.render(
// //   element,
// //   document.getElementById('root')
// // );
// // ReactDOM.render(<App />, document.getElementById('root'));

