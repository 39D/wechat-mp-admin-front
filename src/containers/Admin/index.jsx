import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
// import TransactionForm from 'containers/TransactionForm';
// import TransactionSummary from 'containers/TransactionSummary';
import * as AppActions from 'actions';
import 'normalize.css';
import './style.sass';

class Admin extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div className="wrapper">
        <header className="header-wrapper">
          <div className="logo-wrapper">
            <div className="logo-icon" />
            <div className="logo-text">公众号管理平台</div>
          </div>
        </header>
        <div className="body-wrapper">
          <nav className="sidebar-wrapper">
            <Sidebar />
            <div className="collapse-controller" />
          </nav>
          <main className="content-wrapper">
            { this.props.children }
          </main>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { transactions } = state;
  return {
    transactions: transactions.transactions,
    summary: transactions.summary,
    gridFields: transactions.transactionsGrid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));
