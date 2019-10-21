import React, { useContext } from 'react';
import { Input } from '@rebass/forms';
import { themes, ThemeContext } from '../Themes';

const InputField = props => {
    const { theme } = useContext(ThemeContext);
    return (
        <Input
            name={props.name}
            id={props.id || props.name}
            type={props.type || props.name}
            placeholder={props.type || props.name}
            color={themes[theme].inputs.fontColor}
            bg={themes[theme].inputs.background}
            onChange={props.onChange}
            sx={{
                borderColor: themes[theme].inputs.borderColor,
                borderRadius: '4px',
            }}
        />
    );
};
export default InputField;
