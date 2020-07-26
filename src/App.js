import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import About from './components/About';

import TodosDataService from './services/todo-service';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

class App extends Component{

  state = {
    todos:[]
  }

  componentDidMount() {
    this.retrieveTodos();
  }

  retrieveTodos() {
    TodosDataService.getAll()
      .then(response => {
        this.setState({
          todos: [...response.data]
        });        
      })
      .catch(e => {
        console.log(e);
      });
  }
  

  //Toggle Completed
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed;

        TodosDataService.updateTodo(id, todo);
      }
      return todo;
    })
    });
  }

  //Delete Todo
  delTodo = (id) => {

    TodosDataService.deleteTodo(id).
      then(response => {
        this.retrieveTodos();
        this.setState({
          id: response.data.id,
          title: response.data.title,
          completed: response.data.completed
        })
      }).catch(e => {
        console.log(e);
      }); 
  }

  addTodo = (title) => {
    
    var newTodo = {      
      title
    }

    TodosDataService.create(newTodo).
      then(response => {
        this.retrieveTodos();        
        this.setState({
          id: response.data.id,
          title: response.data.title,
          completed: response.data.completed          
        });        
      }).catch(e => {
        console.log(e);
      });    
  }

  render(){

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            
            <Route path="/about" component={About}/>         
          </div>       
        </div>
      </Router>
    );
  }
}

export default App;
