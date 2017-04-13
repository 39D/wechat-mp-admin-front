import PropTypes from 'prop-types';
import Default from 'containers/Default';

const propTypes = {
  layout: PropTypes.func,
  component: PropTypes.func,
  rest: PropTypes.array
};

const defaultProps = {
  layout: Default,
  component: Default,
  rest: []
};

export { propTypes, defaultProps };
