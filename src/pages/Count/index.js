import React from "react";
import "../../assets/css/counter.css";
import { connect } from 'react-redux';

const Counter = (props) => {
    return (
      <div className="app">
        <div>
          <div className="count">
            <h3>Count :</h3>
            <h1>{props.count}</h1>
          </div>
          <div class="buttons">
            <button onClick={props.handleMinus}>-</button>
            <button onClick={props.handlePlus}>+</button>
          </div>
        </div>
      </div>
    );
  }

const stateToProps = (state) => {
    return {
        count: state.count,
    };
};

const dispatchToProps = (dispatch) => {
    return {
        handleMinus: () => dispatch({type: 'MINUS_COUNT'}),
        handlePlus: () => dispatch({type: 'PLUS_COUNT'}),
    };
}

export default connect(stateToProps, dispatchToProps)(Counter);
