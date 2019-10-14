import React from 'react';
import { Input } from '@rebass/forms';

import { themes, ThemeContext } from '../Themes';
const InputField = props => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <Input
                    name={props.name}
                    id={props.id || props.name}
                    type={props.type || props.name}
                    placeholder={props.type || props.name}
                    color={themes[theme].inputs.fontColor}
                    bg={themes[theme].inputs.background}
                    onChange={props.onChange}
                    borderColor={themes[theme].inputs.borderColor}
                    borderRadius="4px"
                />
            )}
        </ThemeContext.Consumer>
    );
};
export default InputField;
