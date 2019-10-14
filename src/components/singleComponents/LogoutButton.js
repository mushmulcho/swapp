import React from 'react';
import { Button } from 'rebass';
import { themes, ThemeContext } from '../Themes';

const LogoutButton = () => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <Button
                    border="1px"
                    borderColor={themes[theme].outlineButtons.borderColor}
                    borderStyle="solid"
                    color={themes[theme].appBar.fontColor}
                    bg={themes[theme].outlineButtons.background}
                    px={1}
                    py={0}
                    className="glyphicon glyphicon-log-out"
                />
            )}
        </ThemeContext.Consumer>
    );
};
export default LogoutButton;
