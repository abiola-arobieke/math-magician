import React from 'react';
import PropTypes from 'prop-types';

const CalcScreen = ({ answer }) => (
  <div className="grid-item display">
    {answer.total}
    {answer.operation}
    {answer.next}
  </div>
);

CalcScreen.propTypes = {
  answer: PropTypes.instanceOf(Object).isRequired,
};

export default CalcScreen;
