import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class Add extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            decision : ''
        };

        this.state = this.initialState;
    }

    handleSubmit = () => {
        this.props.addDecision(this.state);
        this.setState(this.initialState);
    };

    handleChange = event => {
        const {value} = event.target;
        this.setState({ decision : value });
    };

    render() {
        const {decision} = this.state;
        return (
            <form>
                <Input
                    type="text"
                    value={decision}
                    onChange={this.handleChange} />
                <Button variant="contained" onClick={this.handleSubmit}>
                    添加选项
                </Button>
            </form>
        )
    }
}

export default Add;
