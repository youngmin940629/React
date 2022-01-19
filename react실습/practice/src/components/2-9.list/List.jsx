import React from 'react';

export default function List() {
  // const numbers = [1,2,3,4,5];
  // return (
  // <ul>
  //   {numbers.map((item) => (
  //     <li key={item.toString()}>{item}</li>
  //   ))}
  // </ul>);

  const todos = [
    {id:1, text:'Drink Water'},
    {id:2, text:'Wash Car'},
    {id:3, text:'Listen Lecture'},
    {id:4, text:'Go to bed'},
  ];

  const Item = (props) => {
    return <li>
      {props.id}
      {props.text}
      </li>
  }

  const TodoList = todos.map((todo) => <Item key={todo.id} id={todo.id} text={todo.text}/>)

  return <>{TodoList}</>;
}

// default key를 안주면 index를 쓴다
// key props => key는 props로 넘어가지 않음, 기본적으로 index를 key로 사용