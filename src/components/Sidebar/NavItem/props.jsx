import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  href: PropTypes.string,
  active: PropTypes.bool
};

const defaultProps = {
  icon: 'icon-puzzle',
  name: 'NULL',
  href: '',
  active: false
};

export { propTypes, defaultProps };
