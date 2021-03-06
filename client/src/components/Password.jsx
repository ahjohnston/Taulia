import React from 'react';
import Validators from './Validators.jsx';
import exports from './functions.js';
import axios from 'axios';

class Password extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      showPassword: 'password',
      testInfo: [
        { testName: "8-72 Characters", testBool: false },
        { testName: "1 Uppercase Character", testBool: false },
        { testName: "1 Lowercase Character", testBool: false },
        { testName: "1 Number", testBool: false },
        { testName: "Should Not Match Email Address", testBool: false }
      ]
    }
    this.toggleView = this.toggleView.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }
  componentDidMount() {
    // axios('https://run.mocky.io/v3/09e642b5-b52f-43c1-837b-8ebf70c10813')
    exports.getEmail()
      .then((data) => {
        this.setState({
          userName: data.data.user.email.split('@')[0]
        })
      })
  }

  toggleView() {
    if(this.state.showPassword === 'password'){
      this.setState({
        showPassword: 'text'
      })
    } else {
      this.setState({
        showPassword: 'password'
      })
    }
  }

  async updatePassword(e) {
    var { password, userEmail, userName } = this.state
    e.preventDefault;
    const charCount = e.target.value.length < 60 && e.target.value.length >= 8 ? true : false;
    var lowercase = false;
    var uppercase = false;
    var email = e.target.value.toLowerCase().indexOf(userName.toLowerCase()) === -1;
    var number = false;

   for (var i = 0; i < e.target.value.length; i++) {
      if (!isNaN(Number(e.target.value[i]))) {
        number = true
      } else if (e.target.value[i].toLowerCase() === e.target.value[i]) {
        lowercase = true
      } else if (e.target.value[i].toUpperCase() === e.target.value[i]) {
        uppercase = true
      }
    }

    await this.setState({
      password: e.target.value,
      testInfo: [
        { testName: "8-72 Characters", testBool: charCount },
        { testName: "1 Uppercase Character", testBool: uppercase },
        { testName: "1 Lowercase Character", testBool: lowercase },
        { testName: "1 Number", testBool: number },
        { testName: "Should Not Match Email Address", testBool: email }
      ]
    })

  }
  render() {
    const {password, showPassword, testInfo} = this.state

    return (
      <div>
        Password
        <form>
          <input id="password" type={showPassword} placeholder="enter your password here" onChange={this.updatePassword} value={password}></input>
          <div id="show" className="row">
            <input id="checkbox"  type="checkbox" onChange={this.toggleView}></input>
            <label for="checkbox">Show</label>
          </div>
        </form>
        <Validators testInfo={testInfo} />
      </div >
    )
  }
}

export default Password;