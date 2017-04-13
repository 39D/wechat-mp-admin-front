import React, { Component } from 'react';
import { propTypes, defaultProps } from './props';
import NavItem from './NavItem';
import './style.sass';

class Sidebar extends Component {
  constructor(props) {
    super(props);
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
    const { headerMenu, menu, collapse } = this.props;
    console.log(headerMenu, menu, collapse);
    return (
      <div className="sidebar">
        <ul className="sidebar-header">
          {
            headerMenu && headerMenu.map((item) => (
              <NavItem {...item} key={item.name} />
            ))
          }
        </ul>
        <div className="sidebar-body">
          <ul className="sidebar-nav">
            <li className="nav-item">
              <a className="nav-title">
                <i className="icon-folder" />
                <span>规范</span>
                <i className="icon-arrow-down" />
              </a>
              <ul className="nav-toggle-menu">
                <li className="nav-header">规范</li>
                <li className="nav-item">
                  <a href="#!/specifications/typo" className="nav-title">字体</a>
                </li>
                <li className="nav-item">
                  <a href="#!/specifications/color" className="nav-title">颜色</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-title">
                <i className="icon-folder" />
                <span>组件</span>
                <i className="icon-arrow-down" />
              </a>
              <ul className="nav-toggle-menu">
                <li className="nav-header">组件</li>
                <li className="nav-item">
                  <a href="#!/components/panel" className="nav-title">Panel</a>
                </li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    );
  }
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
