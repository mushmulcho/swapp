import React, { useState, useContext } from 'react';
import { Box, Card, Text, Flex } from 'rebass';
import { userBlank } from '../utils/userBlank';
import SolidButton from '../components/singleComponents/SolidButton';
import InputField from '../components/singleComponents/InputField';
import { themes, ThemeContext } from '../components/Themes';
import Logo from '../components/singleComponents/Logo';
import { connect } from 'react-redux';
import {history} from '../history';
import {alertAction} from '../actions';

const LoginPage = ({ getUserData,clearAlerts, alert }) => {
    const { theme } = useContext(ThemeContext);
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [failedToFetch, setFailedToFetch] = useState(false);
    


    const onTextInputChange = setter => ({ target: { value } }) =>
        setter(value);

    const onLoginButtonClick = () => {
        const newUserData = userBlank();
        //todo: make Error messages if we don't have correct or provided data
        //this is for test, don't forget to make it right
        if (userEmail === 'az@sym.syncho' && userPass === 'asd') {
            newUserData.email = userEmail;
            newUserData.pass = userPass;
            setIsAuthorized(true);
            setFailedToFetch(true);
        }
        getUserData(newUserData);
    };
    history.listen((location, action)=>{
        clearAlerts();
    })
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
                    {alert && alert.message && (
                        <Text className={alert.type}>{alert.message}</Text>
                    )}
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
const mapState = state=> {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertAction.clear
};
export default connect(mapState,actionCreators)(LoginPage);
