import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Adding from './components/addition';
import Subtracting from './components/subtraction';
import ContSum from "./components/pluscont";
import ContSub from "./components/subtcont";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 3,
            rId: 0
        };
    }

    addin() {
        let c = this.state.value;
        if (c === 99) {
            this.setState({value: 0});
        }
        else {
            c = c + 1;
            this.setState({value: c});
        }

    }

    minus() {
        let b = this.state.value;
        if (b === 0) {
            this.setState({value: 0});
        }
        else {
            b = b - 1;
            this.setState({value: b});
        }
    }

    iteSum() {
        this.state.rId = setInterval(() => {
            if (this.state.value < 100)
                this.setState({value: this.state.value + 1});
            else
                this.setState({value: 0});
        }, 1000);
    }

    iteDiff() {
        this.state.rId = setInterval(() => {
            if (this.state.value > 0 )
                this.setState({value: this.state.value - 1});
            else
                this.setState({value: 100});
        }, 1000);
    }

    stopping() {
        clearInterval(this.state.rId);
    }

    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <Subtracting onsubtracting={()=>{this.minus()}}/>
                <Adding onadding={()=>{this.addin()}}/>
                <ContSum onconplu={() => {this.iteSum()}}/>
                <ContSub onconsub={() => {this.iteDiff()}}/>
                <button onClick={() => {this.stopping()}}>Exit</button>
            </div>
        );
    };
}

ReactDOM.render(<App/>, document.querySelector('.container-fluid'));
