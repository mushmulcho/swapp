import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'rebass';
import { themes, ThemeContext } from '../Themes';
const ThemedLink = ({ text, path, className, style }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Link
            color={themes[theme].appBar.fontColor}
            fontWeight="bold"
            px={1}
            variant="nav"
            href={path}
            className={className}
            sx={{ ...style }}
        >
            {text}
        </Link>
    );
};
ThemedLink.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};
ThemedLink.defaultProps = {
    test: '',
    className: '',
    style: {},
};
export default ThemedLink;
