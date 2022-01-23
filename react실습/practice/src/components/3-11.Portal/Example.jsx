import React from 'react';
import ThankyouDialog from './ThankyouDialog';
import {createPortal} from 'react-dom'

const Portal = (props) => {
  return createPortal(props.children, document.getElementById("portal"))
}

export default function Example() {
  return (
    <div onClick={() => console.log('div')}>
      <Portal>
        <ThankyouDialog />
      </Portal>
      <div style={{position: "absolute"}}>
        <button>하하하</button>
      </div>
    </div>
  )
}

// createPortal => 부모 컴포넌트 DOM 트리로부터 벗어나기
// 이벤트 => Portal에 있더라도 Event는 트리로 전파