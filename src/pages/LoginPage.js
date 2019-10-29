import React, { useState, useContext } from 'react';
import { Box, Card, Text, Flex } from 'rebass';
import SolidButton from '../components/singleComponents/SolidButton';
import InputField from '../components/singleComponents/InputField';
import { themes, ThemeContext } from '../Themes';
import Logo from '../components/singleComponents/Logo';

import { LOG_IN } from '../querys';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { loginConstants } from '../constants/login.constants';

const LoginPage = () => {
    const { theme } = useContext(ThemeContext);
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [invalidCredentials, setInvalidCredentials] = useState(false);

    const onTextInputChange = setter => ({ target: { value } }) =>
        setter(value);

    const client = useApolloClient();
    const [login, { error }] = useMutation(LOG_IN, {
        onCompleted: ({ signIn: loginData }) => {
            console.log('loginData',loginData);//TODO : DELETE
            const user = {
                user:userEmail,
                token: loginData.token
            }
            localStorage.setItem('user', JSON.stringify(user));
            client.writeData({ data: { authenicated: true } });
            window.location.reload();
        },
    });

    // if (error)  return<p>{loginConstants.FAILED_TO_FETCH}</p>

    const onLoginButtonClick = () => {
        setInvalidCredentials(false);
        if (userEmail === '' || userPass === '') {
            setInvalidCredentials(true);
            return;
        }
        login({ variables: { email: userEmail, password: userPass } });
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
                <Logo small={false} />
            </Flex>
            <Box
                bg={themes[theme].cards.background}
                mx={3}
                px={2}
                pb={3}
                pt={[1, 3]}
                display="grid"
                sx={{ borderRadius: '7px' }}
            >
                <Box px={[2, 5]} pb={2}>
                    {
                        <Text color={'orange'}>
                            {(invalidCredentials &&
                                loginConstants.INVALID_CREDENTIALS) ||
                                (error && loginConstants.FAILED_TO_FETCH)}
                        </Text>
                    }
                </Box>
                <Box px={[2, 5]}>
                    <InputField
                        name="email"
                        onChange={onTextInputChange(setUserEmail)}
                    />
                </Box>
                <Box px={[2, 5]} py={3}>
                    <InputField
                        name="password"
                        onChange={onTextInputChange(setUserPass)}
                    />
                </Box>
                <Box px={2} ml="auto" pr={[2, 5]}>
                    <SolidButton onClick={onLoginButtonClick} text="Login" />
                </Box>
            </Box>
        </Card>
    );
};
export default LoginPage;
