import React from 'react';
import PropTypes from 'prop-types'

function PropComponent(props) {
  return <div>{props.name}</div>
}

PropComponent.defaultProps = {
  name: 'Jimmy',
  age: 8,
}

PropComponent.propTypes = {
  name: PropTypes.string,
  age:  function(props, propName, componentName) {
    if (!/7/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },
}

export default function Component() {
  return (
    <div>
      <PropComponent />
    </div>
  )
}

// PropTyeps
// 개발 모드에서만 동작 => 유효하지 않은 prop에 대한 경고
// custom => RegExp 등으로 사용자 정의 가능
// children 제한 => 원래 제약없던 갯수 제약 가능