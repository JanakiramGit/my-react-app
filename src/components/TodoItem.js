import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';


export class TodoItem extends React.Component {

	getStyle = () => {
		return{
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}
	

	render() {

		const { id, title } = this.props.todo;

		return (
			//<div style={{ backgroundColor: '#f4f4f4' }}>

			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" checked={this.props.todo.completed} onChange={this.props.markComplete.bind(this, id)}/> {' '}
					{ title }				

					<btn class="btn btn-info float-right" onClick={this.props.delTodo.bind(this, id)}>Delete</btn>
				</p>			
			</div>
		)
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}

const itemStyle = {
	backgroundColor: '#f4f4f6'
}

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 10 px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

export default TodoItem