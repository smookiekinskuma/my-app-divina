import react from 'react';
import PropTypes from  'prop-types';

function Greeting(props) {
    return <h2>Welcome, {props.name} and {props.name2}</h2>;
}

Greeting.propTypes = {
    name: PropTypes.number.isRequired,
    greeting: PropTypes.string.isRequired,
}

export default Greeting;