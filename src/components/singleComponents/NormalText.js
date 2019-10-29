import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'rebass';
import { themes, ThemeContext } from '../../Themes';

const NormalText = ({ text, className, style }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Text
            p={2}
            className={className}
            color={themes[theme].defaultFontColor}
            sx={{ ...style }}
        >
            {text}
        </Text>
    );
};
NormalText.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};
NormalText.defaultProps = {
    className: '',
    style: {},
};
export default NormalText;
