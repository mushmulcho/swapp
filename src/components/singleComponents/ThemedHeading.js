import React from 'react';
import { Heading } from 'rebass';
import { themes, ThemeContext } from '../Themes';

const ThemedHeading = ({ size, text }) => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <Heading
                    fontSize={size}
                    color={themes[theme].primaryHeading.fontColor}
                    p={2}
                >
                    {text}
                </Heading>
            )}
        </ThemeContext.Consumer>
    );
};
export default ThemedHeading;
