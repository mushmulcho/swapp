import React from 'react';
import { Link } from 'rebass';
import { themes, ThemeContext } from '../Themes';
const ThemedLink = ({ text, path }) => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <Link
                    color={themes[theme].appBar.fontColor}
                    fontWeight="bold"
                    px={1}
                    variant="nav"
                    href={path}
                >
                    {text}
                </Link>
            )}
        </ThemeContext.Consumer>
    );
};
export default ThemedLink;
