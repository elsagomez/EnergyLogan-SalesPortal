import React from 'react';
import { Form } from 'react-components-form';
import {
  Panel,
  Button,
  PageHeader,
  ControlLabel,
  FormControl,
  FormGroup,
  Checkbox,
   } from 'react-bootstrap';

//Children from React-Bootstrap
import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';

// submitHandler(event){
//   event.preventDefault();

// }
//need to put in methods for handling 
// const title = 'Form Component';
// const loginSchema = new Schema({
  
//   login:{
//     type: String, 
//     required: true
//   },

//   password:{
//     type: String, 
//     required: true
//   } 
// });

class FormComponent extends React.Component {
  
  constructor(model) {
        super(model);
        
        this.model = model || {};
        this.listeners = [];
    }
    set(name, value, callback, runWithoutListeners) {
        this.model[name] = value;
        if (runWithoutListeners) return;
        this.listeners.forEach(listener => listener(this.model, callback));
    }
    setModel(model, callback, runWithoutListeners) {
        this.model = model;
        if (runWithoutListeners) return;
        this.listeners.forEach(listener => listener(this.model, callback));
    }
    listen(listener) {
        this.listeners.push(listener);
    }
    unlisten(listener) {
        const index = this.listeners.indexOf(listener);
        if (index > -1) this.listeners.splice(index, 1);
    }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>New Project</PageHeader>
          </div>
        </div>
        
        <Panel header={<strong>Project Information</strong>} >

          <Form
          onSubmit={data => console.log(data)}
          onError={(errors, data) => console.log('error', errors, data)}
          >
              <fieldset>
                <h5>Project Name</h5>
                <div className="form-group">
                  <FormControl 
                    type="text"
                    className="form-control"
                    placeholder="Enter Project Name"
                    name="name"
                    id="project_name"
                   />
                </div>
                
                <h4>Customer</h4>
                <div className="form-group">
                  <FormControl 
                    type="text"
                    className="form-control"
                    placeholder="Customer"
                    name="name"
                    id="customer_name"
                   />
                </div>
                
                <h4>Address</h4>
                <div className="form-group">
                  <FormControl 
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    name="name"
                    id="address"
                   />
                </div>

                <h4>Contact Name</h4>
                <div className="form-group">
                  <FormControl 
                    type="text"
                    className="form-control"
                    placeholder="Contact Name"
                    name="name"
                    id="contact_name"
                   />
                </div>

                <h4>Contact Number</h4>
                <div className="form-group">
                  <FormControl 
                    type="text"
                    className="form-control"
                    placeholder="Contact Number"
                    name="name"
                    id="contact_number"
                   />
                </div>

                <h4>Account Number</h4>
                <div className="form-group">
                  <FormControl 
                    type="text"
                    className="form-control"
                    placeholder="Account Number"
                    name="name"
                    id="account_number"
                   />
                </div>

                <h4>Floors to be surveyed (please separate by comma)</h4>
                <div className="form-group">
                  <FormControl 
                    type="text"
                    className="form-control"
                    placeholder="Number of Floors"
                    name="name"
                    id="floors"
                   />
                </div>

                <h4>Scheduled Survey Date (YYYY-MM-DD)</h4>
                <div className="form-group">
                  <FormControl 
                    type="text"
                    className="form-control"
                    placeholder="Scheduled Date"
                    name="name"
                    id="scheduled_date"
                   />
                </div>

                <h4>Comments</h4>
                <div className="form-group">
                  <FormControl 
                    type="text"
                    className="form-control"
                    placeholder="Comments"
                    name="name"
                    id="err-commentsr"
                   />
                </div>

                 <Checkbox label="Remember Me" > Remember Me </Checkbox>
                 
                 <Button type="submit" bsSize="large" bsStyle="success" block>Submit</Button>
               </fieldset>
          </Form>
        </Panel>
      </div>
      )
  }
}

export default FormComponent