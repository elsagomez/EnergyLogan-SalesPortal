import React from 'react';
import {
  Panel,
  Button,
  Col,
  PageHeader,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormGroup,
  Checkbox,
  Form,
  Radio,
  InputGroup,
  Glyphicon } from 'react-bootstrap';

import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';

const Login = (props) => {


  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="text-center">
        <h1 className="login-brand-text">Energy Laura Login</h1>
       
      </div>

      <Panel header className="login-panel">

        <form role="form">
          <fieldset>
            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="Username"
                name="name"
              />
            </div>

            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
              />
            </div>
            <Checkbox label="Remember Me" > Remember Me </Checkbox>
            <Button type="submit" bsSize="large" bsStyle="success" block>Login</Button>
          </fieldset>
        </form>

      </Panel>

    </div>

  );
}


export default Login