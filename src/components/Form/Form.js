import React, {Component} from 'react';
import { Bootstrap } from 'react-bootstrap';

class Form extends Component {

	constructor(props) {
    super(props);
    this.state = {selectedOption: 'option1'};

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleOptionChange(changeEvent) {
  this.setState({
    selectedOption: changeEvent.target.value
  });
}
handleFormSubmit(formSubmitEvent) {
  alert('A button was submitted: ' + this.state.value);
    event.preventDefault();
}

	render(){
		return(
<div className="container">
  <div className="row">
    <div className="col-sm-12">

      <form  onSubmit={this.handleFormSubmit}>
        <div className="radio">
          <label>
            <input type="radio" value="option1" 
            		checked={this.state.selectedOption === 'option1'}
            		onChange={this.handleOptionChange} />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" 
				  checked={this.state.selectedOption === 'option2'}
				  onChange={this.handleOptionChange} />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" 
            		checked={this.state.selectedOption === 'option3'}
            		onChange={this.handleOptionChange} />
            Option 3
          </label>
        </div>
      </form>

    </div>
    <button className="btn btn-default" type="submit">Save</button>
  </div>
</div>


			)
	}
}

export default Form