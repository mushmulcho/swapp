import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'rebass';
import { themes, ThemeContext } from '../../Themes';
import { IoIosLogOut } from 'react-icons/io';
import styled from '@emotion/styled';
import { useApolloClient } from '@apollo/react-hooks';

const LogoutButton = ({ path }) => {
    const { theme } = useContext(ThemeContext);

    const StyledLogoutIcon = styled(IoIosLogOut)`
        width: 24px;
        height: 22px;
        color: ${themes[theme].appBar.fontColor};
    `;
    const StyledLink = styled(Link)`
        border: 1px solid ${themes[theme].outlineButtons.borderColor};
        border-radius: 5px;
        background-color: ${themes[theme].outlineButtons.background};
        padding: 3px 1px 0px 3px;
    `;

    const client = useApolloClient();
    const handleClick = e => {
        localStorage.removeItem('user');
        client.writeData({ data: { authenicated: false } });
    };

    return (
        <StyledLink variant="nav" href={path} onClick={handleClick}>
            {<StyledLogoutIcon />}
        </StyledLink>
    );
};
LogoutButton.propTypes = {
    path: PropTypes.string.isRequired,
};
LogoutButton.defaultProps = {};
export default LogoutButton;
