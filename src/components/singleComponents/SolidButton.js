import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'rebass';
import { themes, ThemeContext } from '../Themes';

const SolidButtons = ({ text, onClick, style }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Button
            fontWeight="bold"
            onClick={onClick}
            color={themes[theme].solidButtons.fontColor}
            bg={themes[theme].solidButtons.background}
            sx={{ ...style }}
        >
            {text}
        </Button>
    );
};
SolidButtons.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
};
SolidButtons.defaultProps = {
    style: {},
};
export default SolidButtons;
