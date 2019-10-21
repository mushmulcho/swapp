import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'rebass';
import { themes, ThemeContext } from '../Themes';

const CardBlank = ({ className, children, style }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Card
            bg={themes[theme].cards.background}
            sx={{
                border: '2px solid',
                borderRadius: '5px',
                borderColor: themes[theme].cards.borderColor,
                display: 'inline-block',
                margin: '32px',
                ...style,
            }}
            className={className}
        >
            {children}
        </Card>
    );
};
CardBlank.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};
CardBlank.defaultProps = {
    className: '',
    style: {},
};
export default CardBlank;
