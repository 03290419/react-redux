import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from '../components/Counter';

function CounterContainer({ number, increase, decrease }) {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
}

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
