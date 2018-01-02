import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './components/TodoItem.js';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todos:['I am learning ReactJS', 'I am learning Redux']
        }
    }

    render(){
        const {todos}=this.state;
        return(
            <section>
                <form onSubmit={(evt)=>{
                    //const {todos}=this.state;
                    //todos.push(this.refs.addTodo.value);
                    evt.preventDefault();
                    this.setState({
                        todos:todos.concat(this.refs.addTodo.value) // concat() method creates a new Array object and adds new value in this new array object. This way
                        // new value is only added in this new array object and not in original array.
                    })
                    this.refs.addTodo.value="";
                }}>
                    <input type="text" ref="addTodo" />
                    <button type="submit">Add Todo</button>
                </form>
                
                <TodoItem todos={todos} />
            </section> // Array todos is being passed to TodoItem as props. Array is always passed by referance. This means we have to use concate() method instead 
            // of push() to avoid immutability issue.            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));