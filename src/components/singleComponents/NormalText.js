import React from 'react';
import { Text } from 'rebass';
import { themes, ThemeContext } from '../Themes';

const NormalText = ({ text }) => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <Text
                    p={2}
                    className="episodes-card-text"
                    color={themes[theme].defaultFontColor}
                >
                    {text}
                </Text>
            )}
        </ThemeContext.Consumer>
    );
};
export default NormalText;
