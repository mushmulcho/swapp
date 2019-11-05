import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'rebass';
import { themes, ThemeContext } from '../../Themes';
import styled from '@emotion/styled';

const CardBlank = ({ className, children, style, hover }) => {
    const { theme } = useContext(ThemeContext);
    const StyledCard = styled(Card)`
        ${hover && '&:hover { border-color: #4bd5ee; }'}
    `;
    return (
        <StyledCard
            bg={themes[theme].cards.background}
            sx={{
                border: '2px solid',
                borderRadius: '10px',
                borderColor: themes[theme].cards.borderColor,
                display: 'inline-block',
                ...style,
            }}
            className={className}
        >
            {children}
        </StyledCard>
    );
};
CardBlank.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    hover: PropTypes.bool,
};
CardBlank.defaultProps = {
    className: '',
    style: {},
    hover: false,
};
export default CardBlank;
