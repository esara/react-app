import React, {Component} from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
    };
    render() {
        return(
        <div>
            <span className={this.getBadgeClasses.call(this)}> {this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2"> Increment</button>
            <button onClick={() => this.props.onDelete()} className="btn btn-danger btn-sm m-2"> Delete</button>
        </div>
        );
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    }

    getBadgeClasses() {
        let classes = "badge";
        classes += (this.state.value === 0) ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        return this.state.value;
    }
}

export default Counter;