import React from 'react';
import HocCompHello from '@/component/hoc/HocHello';

@HocCompHello
export default class Tabs1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '当前组件'
    };
  }
  componentDidMount() {
    console.log('init', 'componentDidMount');
  }

  handleShowText = () => {
    console.log(this.state.text);
  }

  render() {
    return (
      <div>
        <h4>11111</h4>
      </div>
    );
  }
}

