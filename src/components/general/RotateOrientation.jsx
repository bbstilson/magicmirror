import { rotateOrientation } from 'redux/modules/layout';
import './RotateOrientation.css';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const RotateOrientation = ({ rotateOrientation }) => (
  <div className="rotate-orientation">
    <button onClick={rotateOrientation}></button>
  </div>
);

RotateOrientation.propTypes = {
  rotateOrientation: PropTypes.func.isRequired
}

/**
 * Redux
 */

function mapStateToProps () {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {
    rotateOrientation() {
      dispatch(rotateOrientation());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RotateOrientation);
