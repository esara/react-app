import React, {Component} from 'react';

class Counter extends Component {
    render() {
        return(
        <div>
            <span className={this.getBadgeClasses.call(this)}> {this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement()} className="btn btn-secondary btn-sm m-2"> Increment</button>
            <button onClick={() => this.props.onDelete()} className="btn btn-danger btn-sm m-2"> Delete</button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge";
        classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";
        classes += "badge-sm m-2";
        return classes;
    }

    formatCount() {
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }
}

export default Counter;