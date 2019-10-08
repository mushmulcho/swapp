import React from 'react';
import { Box, Card, Button, Image, Text, Flex } from 'rebass';
import { Label, Input, Radio, Checkbox } from '@rebass/forms';
import { themes } from './Themes';

const LoginPage = ({ theme, changeTheme }) => {
    return (
        <Card
            variant="primary"
            width={[352, 602]}
            mx="auto"
            my={3}
            pt={3}
            style={{ backgroundColor: themes[theme].backgorund }}
        >
            <Flex alignItems="center" px={3}>
                <Button
                    variant="link"
                    onClick={() =>
                        changeTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                >
                    <Image src=""></Image>
                </Button>
            </Flex>
            <Box as="form" py={3} onSubmit={e => e.preventDefault()}>
                <Box px={2} py={2}>
                    <Label htmlFor="Email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="az@sum.suncho"
                    ></Input>
                </Box>
                <Box px={2} py={2}>
                    <Label htmlFor="Password">Password</Label>
                    <Input id="pass" name="pass" type="password"></Input>
                </Box>
                <Box>
                    <Label width={[1 / 2, 1 / 4]} p={2}>
                        <Checkbox id="remember" name="remember" />
                        Remember me
                    </Label>
                </Box>
                <Box px={2} ml="auto">
                    <Button>Login</Button>
                </Box>
            </Box>
        </Card>
    );
};

export default LoginPage;
