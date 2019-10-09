import React, { useState } from 'react';
import { Box, Card, Button, Image, Text, Flex } from 'rebass';
import { Label, Input, Radio, Checkbox } from '@rebass/forms';
import { userBlank } from './userBlank';
import SolidButton from './SolidButton';
import InputField from './InputField';
import {themes} from './Themes';

const LoginPage = ({  theme, changeTheme, getUserData }) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');

    const onTextInputChange = setter => ({ target: { value } }) =>
        setter(value);

    const onLoginButtonClick = () => {
        const newUserData = userBlank();
        //make Error messages if we don't have correct or provided data
        newUserData.email = userEmail;
        newUserData.pass = userPass;

        getUserData(newUserData);
    };
    return (
        <Card
            variant="primary"
            width={[302, 502]}
            mx="auto"
            my={3}
            pt={3}
            pb={3}
            bg={themes.commonColors.black}
            color={themes[theme].defaultFontColor}
        >
            <Flex alignItems="center" px={3}>
                <Text
                    onClick={() =>
                        changeTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                    bg={themes.commonColors.black}
                    color={themes.commonColors.yellow}
                    fontFamily="swFont"
                    fontSize={[50, 100]}
                    textAlign="center"
                    width="100%"
                    style={{ cursor: 'pointer' }}
                >
                    {' '}
                    SWAPP{' '}
                </Text>
            </Flex>
            <Box
                as="form"
                bg={themes[theme].defaultBackgorund}
                mx={3}
                px={2}
                pb={3}
                pt={[2, 4]}
                display="grid"
                onSubmit={e => e.preventDefault()}
                style={{ borderRadius: '7px' }}
            >
                <Box px={[2, 5]}>
                    <InputField
                        name="email"
                        theme={theme}
                        onChange={onTextInputChange(setUserEmail)}
                    />
                </Box>
                <Box px={[2, 5]} py={3}>
                    <InputField
                        name="password"
                        theme={theme}
                        onChange={onTextInputChange(setUserPass)}
                    />
                </Box>
                <Box px={2} ml="auto" pr={[2, 5]}>
                    <SolidButton
                        onClick={onLoginButtonClick}
                        text="Login"
                        theme={theme}
                    />
                </Box>
            </Box>
        </Card>
    );
};

export default LoginPage;
