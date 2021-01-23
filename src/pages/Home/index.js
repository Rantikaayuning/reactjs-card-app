import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
    return (
        <div className='home'>
            <p className='welcome'>Welcome to Ran Website</p>
            <p className='count'>Count from Counter Page: {props.count}</p>
        </div>
    )
}

const stateToProps = (state) => {
    return {
        count: state.count,
    };
};

export default connect(stateToProps)(Home);