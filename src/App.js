import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Add from './Add';
import Table from './Table';

class App extends Component {
    state = {
        decisions : [
        ]
    };

    addDecision = decision => {
        this.setState({
            decisions : [...this.state.decisions, decision]
        })
    };

    removeDecision = index => {
        const {decisions} = this.state;
        this.setState({
            decisions : decisions.filter((decision, i) => {
                return i !== index;
            })
        });
    };

    choose = () => {
        const finalDecision = Math.floor(Math.random() * this.state.decisions.length) + 1;
        alert("我们选择决策" + finalDecision);
    };

    render() {
        return (
            <div>
                <h1>决策选择器</h1>
                <Add addDecision={this.addDecision} />
                <Table decisions={this.state.decisions} removeDecision={this.removeDecision} />
                <Button variant="contained" onClick={this.choose} disabled={this.state.decisions.length < 2}>
                    开始随机选择
                </Button>
            </div>
        );
    }
}

export default App;
