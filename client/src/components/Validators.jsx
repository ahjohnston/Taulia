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
        return <div key={test.testName}>{test.testName}</div>
      }
      return <Strike key={test.testName}>{test.testName}</Strike>
    })
    return <div>{mapTests}</div>
  }
}

export default Validators;