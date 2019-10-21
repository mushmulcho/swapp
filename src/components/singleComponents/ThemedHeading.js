import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'rebass';
import { themes, ThemeContext } from '../Themes';

const ThemedHeading = ({ text, style }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Heading
            sx={style}
            color={themes[theme].primaryHeading.fontColor}
            fontWeight={800}
        >
            {text}
        </Heading>
    );
};
ThemedHeading.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
};
ThemedHeading.defaultProps = {
    style: {},
};
export default ThemedHeading;
