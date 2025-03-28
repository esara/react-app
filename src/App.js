import React, {Component} from 'react';
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0},
      { id: 2, value: 0},
      { id: 3, value: 0},
      { id: 4, value: 0},
    ]
  };
  render() {
    return(
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value >0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}/>
        </main>
      </React.Fragment>
    );
  }

  handleReset = () => {
    this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({ counters : this.state.counters });
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }
}
export default App;
