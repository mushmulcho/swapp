import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import { Box, Card, Button, Image, Heading, Text } from 'rebass';
import { Label, Input, Select, Textarea, Radio, Checkbox } from '@rebass/forms';

const LoginPage = () => {
  return (
    <Card>
      <Heading>
        <img></img>
      </Heading>
      <Box as="form" py={3} onSubmit={e => e.preventDefault()}>
        <Box px={2} py={2}>
          <Label htmlFor='Email'>Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="az@sum.suncho"
          ></Input>
        </Box>
        <Box px={2} py={2}>
          <Label htmlFor='Password'>Password</Label>
          <Input id="pass" name="pass" type="password"></Input>
        </Box>
        <Box>
            <Label width={[1/2, 1/4]} p={2}>
                <Checkbox
                id='remember'
                name='remember'
                />
                Remember me
            </Label>
        </Box>
        <Box px={2} ml='auto'>
            <Button>
                Login
            </Button>
        </Box>
      </Box>
    </Card>
  );
};
export default LoginPage;
