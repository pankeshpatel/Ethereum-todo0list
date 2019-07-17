import React, { Component } from 'react';
import './App.css';
import todolist from './todolist';
import web3 from './web3';


class App extends Component{

  // This is a state initialization
    state = {
        taskCount: '',
        value: '',
        message: ''
    };

  async componentDidMount(){

    const taskCount = await todolist.methods.taskCount().call();
    // We use taskCount.ToNumber() becase the function call returns Big Value.
    const taskCountToNumber = taskCount.toNumber();
    this.setState({taskCount : taskCountToNumber});
  }

  onSubmit = async (event) => {
     event.preventDefault();
     const accounts = await web3.eth.getAccounts();
     this.setState({message: 'Waiting on transaction success for the new task...'});
     await todolist.methods.createTask(this.state.value).send({
       from: accounts[0],
       gas: '1000000'
    });

     this.setState({message: 'you successfully added new task!!!'});

   };

  render(){
    return(
    <div class="container-fluid">
      <p>
          There are currently {this.state.taskCount} tasks in TODO List.
      </p>
      <hr/>
      <form onSubmit={this.onSubmit}>
        <h4> Want to Add your Todo Task</h4>
          <div>
            <label>Enter your TODO Task : </label>
              <input
                value = {this.state.value}
                onChange={event => this.setState({ value: event.target.value })}
                />
            </div>
            <button>Enter TODO</button>
            <h4>{this.state.message}</h4>
      </form>
      <hr/>
      </div>
    );
  }
}

export default App;
