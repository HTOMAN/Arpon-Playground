import React from 'react';

type Props = {
  // using `interface` is also ok
  message: string;
};

type State = {
  count: number; // like this
};

class UIElement extends React.Component<Props, State> {
  state: State = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    // eslint-disable-next-line no-console
    console.log('UIElement');
    return (
      <div onClick={() => this.increment(1)}>
        {this.props.message} {this.state.count}
      </div>
    );
  }
  increment = (amt: number) => {
    // like this
    this.setState((state) => ({
      count: state.count + amt,
    }));
  };
}

export default UIElement;
