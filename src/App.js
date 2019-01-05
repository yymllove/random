import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
class App extends Component {
  add() {
    alert('add')
  }
  choose() {
    alert(Math.random() > 0.5 ? "我们选择决策1" : "我们选择决策2")
  }
  render() {
    return (
      <div>
        <h1>决策选择器</h1>
        <Button variant="contained" onClick={this.add} disabled>
          添加选项
        </Button>
        <p> 决策1
        <Input></Input>
        </p> 
        <p>决策2
        <Input></Input>
        </p>
        <Button variant="contained" onClick={this.choose}>
          开始随机选择
        </Button>
      </div>
    );
  }
}

export default App;
