import React from 'react'

export default function Event() {

  const handleButtonClick = (e) => {
    console.dir(e)
    console.log('handleButtonClick')
  }

  const handleClickCapture = () => {
    console.log('handleClickCapture')
  }

  const handleClickCapture2 = () => {
    console.log('handleClickCapture2')
  }

  const handleClickBubble = () => {
    console.log('handleClickBubble')
  }

  const onMouseLeave = (e) => {
    console.dir(e)
  }

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={onMouseLeave}>Button</button>
      </div>
    </div>
  )
}
// 합성 이벤트 => 인터페이스는 같지만 직접 대응되지 않음
// Bubble / Capture => Capture > target > Bubble
// return false => e.preventDefault() 해줘야함