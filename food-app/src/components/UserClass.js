import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h5>Coded By:{name}</h5>
        <p>count: {count}</p>
        <button
          onClick={() =>
            this.setState({
              count: count + 1,
            })
          }
        >
          Increase the count
        </button>
        <button
          onClick={() =>
            this.setState({
              count: count - 1,
            })
          }
        >
          decrease the count
        </button>
      </div>
    );
  }
}

export default UserClass;

// 7803087702
