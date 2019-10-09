import React, { useState } from 'react';
import { Button } from 'rebass';
import { themes, ThemeContext } from './Themes';

const SolidButtons = props => {

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Button
                    fontWeight="bold"
                    onClick={props.onClick}
                    color={themes[theme].solidButtons.fontColor}
                    bg={themes[theme].solidButtons.backgorund}
                >
                    {props.text}
                </Button>
            )}
        </ThemeContext.Consumer>
    );
};
export default SolidButtons;
