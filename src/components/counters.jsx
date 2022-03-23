import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {
    render() {
        const { counters, onReset, onIncrement, onDelete } = this.props;
        return (
            <div>
                <button onClick={onReset} className={"btn btn-primary btn-sm m-2"}> Reset </button>
                {counters.map(counter => (
                    <Counter key={counter.id }
                             onIncrement={() => onIncrement(counter)}
                             onDelete={() => onDelete(counter.id)}
                             counter={counter}
                             selected={true} />
                ))}
            </div>
        );
    }
}

export default Counters;