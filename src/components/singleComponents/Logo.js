import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'rebass';
import { themes, ThemeContext } from '../Themes';

const Logo = ({ small }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <Text
            onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
            color={themes.commonColors.yellow}
            fontFamily="swFont"
            fontSize={small ? 20 : [50, 100]}
            textAlign={small ? 'left' : 'center'}
            width={small ? 'auto' : '100%'}
            style={{ cursor: 'pointer' }}
        >
            {' '}
            SWAPP{' '}
        </Text>
    );
};
Logo.propTypes = {
    small: PropTypes.bool,
};
Logo.defaultProps = {
    small: true,
};
export default Logo;
