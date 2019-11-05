import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'rebass';
import { themes, ThemeContext } from '../Themes';
import ThemedHeading from './singleComponents/ThemedHeading';

const TwoColorInlineText = ({ firstText, secondText, align }) => {
    const { theme } = useContext(ThemeContext);
    const textStyle = { display: 'inline-block', fontSize: 1 };

    return (
        <Box sx={{ textAlign: align }}>
            <Text
                color={themes[theme].secondDefaultFontColor}
                px={2}
                {...textStyle}
            >
                {firstText}
            </Text>
            <ThemedHeading style={{ ...textStyle }} text={secondText} />
        </Box>
    );
};
TwoColorInlineText.propTypes = {
    firstText: PropTypes.string.isRequired,
    secondText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    align: PropTypes.string,
};
TwoColorInlineText.defaultProps = {
    align: 'left',
};
export default TwoColorInlineText;
