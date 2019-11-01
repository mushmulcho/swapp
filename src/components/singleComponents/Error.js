import React from 'react';
import { Text } from 'rebass';
import NavBar from '../NavBar';
import PropTypes from 'prop-types';

const Error = ({ text }) => {
    return (
        <>
            <NavBar />
            <Text color="red">{text}</Text>
        </>
    );
};
Error.propTypes = {
    text: PropTypes.string,
};
Error.defaultProps = {
    text: '',
};
export default Error;
