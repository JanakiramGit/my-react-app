import React from 'react'

import ReactFormInputValidation from 'react-form-input-validation'

class AddTodo extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			title: "",
			touched: {
				title: false
			},
			errors:{}
		}

		this.form = new ReactFormInputValidation(this);
    	this.form.useRules({
	        title: "required",
	        // email: "required|email",
	        // phone_number: "required|numeric|digits_between:10,12",
	    });
    	this.form.onformsubmit = (fields) => {
      		// Do you ajax calls here.
    	}
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: ''});
	}

	onChange = (e) => this.setState({
		[e.target.name]: e.target.value
	});		

	render() {		

		return (
			// <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
			<form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
				
				<input					
					type="text"
					name="title"
					style={{ flex: '10', padding: '5px'}}
					placeholder="Add Todo ..."
					value={this.state.title}
					onChange={this.onChange}
					data-attribute-name="Title"/>

				<label className="error">
                	{this.state.errors.name ? this.state.errors.name : ""}
              	</label>

				<input
					type="submit"
					name="Submit"
					className="btn"
					style={{flex: '1'}}/>
			</form>
		)
	}
}

export default AddTodo;