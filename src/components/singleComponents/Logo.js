import React from 'react';
import { Text } from 'rebass';
import { themes, ThemeContext } from '../Themes';
const Logo = ({ small }) => {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <Text
                    onClick={() =>
                        toggleTheme(theme === 'dark' ? 'light' : 'dark')
                    }
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
export default Logo;
