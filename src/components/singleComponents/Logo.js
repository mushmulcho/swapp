import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'rebass';
import { themes, ThemeContext } from '../../Themes';
import { toggledThemes } from '../../constants/theme.constants';

const Logo = ({ small }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const onLogoClick = () => {
        const newTheme =
            theme === toggledThemes.DARK
                ? toggledThemes.LIGHT
                : toggledThemes.DARK;
        localStorage.setItem('theme', newTheme);
        toggleTheme(newTheme);
    };
    return (
        <ThemeContext.Consumer>
            {() => (
                <Text
                    onClick={onLogoClick}
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
            )}
        </ThemeContext.Consumer>
    );
};
Logo.propTypes = {
    small: PropTypes.bool,
};
Logo.defaultProps = {
    small: true,
};

export default Logo;
