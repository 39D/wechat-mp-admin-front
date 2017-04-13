import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props, match) {
    super(props);
    console.log(this.props.match);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <p>Dashboard</p>
      </div>
    );
  }
}

Dashboard.propTypes = {

};

export default Dashboard;
