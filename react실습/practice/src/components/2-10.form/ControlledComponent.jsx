import React, { useState } from 'react';

export default function ControlledComponent() {
  const [name, setName] = useState('');
  const [essay, setEssay] = useState('');
  const [flavor, setFlavor] = useState('');

  function handleChange(event) {
    const name = event.target.name;
    if (name === 'name'){
    setName(event.target.value);
  } if (name === 'essay') {
    setEssay(event.target.value);
  } if (name === 'flavor') {
    setFlavor(event.target.name)
  }
  }
  // function handleEssayChange(event) {
  //   setEssay(event.target.value);
  // }
  // function handleFlavorChange(event) {
  //   setFlavor(event.target.value);
  // }

  function handleSubmit(event) {
    alert(`name : ${name} essay : ${essay} flavor : ${flavor}`);
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea name='essay' type="text" value={essay} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
          Pick your favorite flavor:
          <select name='flavor' value={flavor} onChange={handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
// Controlled Component => input의 value를 state로 관리
// 다중입력 => event.target.name
// Uncontrolled Component => form element 자체의 내부 상태 활용
// defaultValue.ref => 기본값 / value 확인