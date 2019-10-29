import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'rebass';
import { themes, ThemeContext } from '../../Themes';
import NormalText from '../singleComponents/NormalText';
import CardBlank from '../singleComponents/CardBlank';
import ThemedHeading from '../singleComponents/ThemedHeading';

const EpisodTextBox = ({ body }) => {
    const { theme } = useContext(ThemeContext);
    const textStyle = { display: 'inline-block', fontSize: 1 };

    return (
        <CardBlank
            children={
                <>
                    <NormalText
                        style={{ textAlign: 'left' }}
                        text={body.info}
                    />
                    <Box sx={{ textAlign: 'left' }}>
                        <Text
                            color={themes[theme].secondDefaultFontColor}
                            px={2}
                            {...textStyle}
                        >
                            Director:
                        </Text>
                        <ThemedHeading
                            style={{ ...textStyle }}
                            text={body.director}
                        />
                    </Box>
                    <Box sx={{ textAlign: 'left' }}>
                        <Text
                            color={themes[theme].secondDefaultFontColor}
                            fontSize={1}
                            px={2}
                            {...textStyle}
                        >
                            Release Date:
                        </Text>
                        <ThemedHeading
                            style={{ ...textStyle }}
                            text={body.releaseDate}
                        />
                    </Box>
                </>
            }
        />
    );
};
EpisodTextBox.propTypes = {
    body: PropTypes.object,
};
EpisodTextBox.defaultProps = {
    body: {},
};
export default EpisodTextBox;
