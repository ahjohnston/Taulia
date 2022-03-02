import React from 'react';
import styled from 'styled-components';

const Strike = styled.div`
  text-decoration: line-through;
`

class Validators extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { testInfo } = this.props;
    var mapTests = testInfo.map((test) => {
      if (!test.testBool) {
        return <div className="row test" key={test.testName}>
        <div className="circle"></div>
        {test.testName}</div>
      }
      return <Strike className="row test" key={test.testName}>
      <div className="circle"></div>{test.testName}</Strike>
    })
    return (
      <div id="tests" className="row">
        {mapTests}
      </div>
    )
  }
}

export default Validators;