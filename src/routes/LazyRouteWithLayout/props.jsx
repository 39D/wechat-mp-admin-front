import PropTypes from 'prop-types';

const propTypes = {
  getLayout: PropTypes.func,
  getComponent: PropTypes.func,
  rest: PropTypes.array
};

const defaultProps = {
  getLayout: null,
  getComponent: null,
  rest: []
};

export { propTypes, defaultProps };
