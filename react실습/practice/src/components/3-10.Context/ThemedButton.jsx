// import React, { Component } from 'react';
// import { ThemeContext } from './ThemeContext'

// class ThemedButton extends Component {
//   render() {
//     let props = this.props;
//     let theme = this.context;
//     return (
//       <button 
//       {...props} 
//       onClick={props.changeTheme}
//       style={{backgroundColor: theme.background, color:theme.foreground}}>
//         Button
//       </button>
//     )
//   }
// }

// ThemedButton.contextType = ThemeContext

// export default ThemedButton;

import React, {useContext} from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemedButton(props) {
  const theme = useContext(ThemeContext)
  return (
    <button 
       {...props} 
       onClick={props.changeTheme}
       style={{backgroundColor: theme.background, color:theme.foreground}}>
         Button
       </button>
  )
}

// 컴포넌트 트리 제약 => props driling의 한계 해소를 위해 나옴
// 재사용성 => Context를 사용하면 재사용하기 어려움
// API => createContext, Provider, Consumer
// useContext => Consumer 대체