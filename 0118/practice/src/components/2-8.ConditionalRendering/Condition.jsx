import React from 'react'

function UserGreeting(props) {
  return <h1>{props.name && `${props.name},`} Welcome {Boolean(props.count) && `It's ${props.count} times`}</h1>
}

function GuestGreeting(){
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  // if(props.isLoggedIn) {
  //   return <UserGreeting name='jimmy' count={0} />
  // }
  // return <GuestGreeting />
  return props.isLoggedIn ? <UserGreeting name='youngmin' count={0} /> : <GuestGreeting />
}


export default function Condition() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  )
}

// if => if(condition){return A} else{return B}
// && => condition && A  , 단 0같은 falsy 한경우 주의 
// 삼향연산자 => condition ? A : B
// 아예 안그리고 싶은 경우 => return null;