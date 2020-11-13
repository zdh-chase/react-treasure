import React from 'react';
import { Button } from 'antd';

// 继承反转（高阶组件继承自ComponentClass）
export default function HocCompHello(Comp) {
  class HelloComp extends Comp {
    constructor(props) {
      super(props);
      this.state = {
        text: '继承反转'
      };
    }
    componentDidMount() {
      console.log('init hoc', 'componentDidMount');
    }

    getComponent = () => {
      // 这样的方式比属性代理好的是，在外部组件可以调用被继承组件的方法。但不能将被继承的 state 和 钩子覆盖掉。
      return <Comp />;
      // 这样的方式，外部组件的 state 可以将，被继承组件的 state 和 钩子函数彻底覆盖掉。同时，外部组件也可以调用被继承组件的方法。
      // return super.render();
    }

    render () {
      return (
        <div>
          <div>hello hoc</div>
          {this.getComponent()}
          <Button
            type="primary"
            onClick={this.handleShowText}
          >按钮</Button>
        </div>
      );
    }
  }
  return HelloComp;
}

// 属性代理（高阶组件通过ComponentClass的props来进行相关操作）
// 工厂模式实现
export function HocPropsHello(Comp) {
  class HelloComp extends React.Component {
    render () {
      return (
        <div>
          <div>hello hoc</div>
          <Comp {...this.props} />
        </div>
      );
    }
  }
  return HelloComp;
}
