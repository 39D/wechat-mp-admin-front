import PropTypes from 'prop-types';

const propTypes = {
  headerMenu: PropTypes.array,
  menu: PropTypes.array,
  collapse: PropTypes.bool
};

const defaultProps = {
  headerMenu: [
    {
      name: '管理员系统',
      icon: 'icon-location-pin'
    },
    {
      name: '我的工作台',
      icon: 'icon-speedometer',
      href: 'dashboard'
    }
  ],
  menu: [

  ],
  collapse: false
};

export { propTypes, defaultProps };
