import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                        (this, id)}/> {'  '}
                    { title }
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={buttonStyle}>X</button>
                </p>
            </div>
        )
    }
}

//Prop Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}


const buttonStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    width: '40px',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '60%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
