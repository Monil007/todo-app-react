import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import {v4 as uuidv4} from 'uuid';
import About from './components/pages/About';
// import axios from 'axios';

class App extends Component {

    // state = {
    //     todos: []
    // }
    state = {
        todos: [
            {
                id: uuidv4(),
                title: 'qwerty',
                completed: false
            },
            {
                id: uuidv4(),
                title: 'asdfgh',
                completed: false
            },
            {
                id: uuidv4(),
                title: 'zxcvbn',
                completed: false
            }
        ]
    }

    // componentDidMount() {
    //     axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5')
    //         .then(res => this.setState({ todos: res.data }))
    // } 

    markComplete = (id) => {
        this.setState({todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })});
    }

    // deleteTodo = (id) => {
    //     axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    //         .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
        
    // }
    deleteTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

    // addTodo = (title) => {
    //     axios.post('http://jsonplaceholder.typicode.com/todos', {
    //         title,
    //         completed: false
    //     })
    //         .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    // }
    addTodo = (title) => {
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                    <Header />
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}/>
                            <Todos todos={this.state.todos} markComplete={this.markComplete}
                            deleteTodo={this.deleteTodo}
                            />
                        </React.Fragment>
                    )} 
                    />
                    <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
