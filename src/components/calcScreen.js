import React from 'react';
import PropTypes from 'prop-types';

const CalcScreen = ({ answer }) => <div className="grid-item display">{answer}</div>;

CalcScreen.propTypes = {
  answer: PropTypes.string.isRequired,
};

export default CalcScreen;
