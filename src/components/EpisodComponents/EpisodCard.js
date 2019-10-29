import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Text } from 'rebass';

import { themes, ThemeContext } from '../../Themes';
import ThemedHeading from '../singleComponents/ThemedHeading';
import CardBlank from '../singleComponents/CardBlank';

const EpisodCard = ({ body }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <CardBlank
            className="themedCard"
            style={{ display: 'block', height: [154, 200] }}
            children={
                <>
                    <Image
                        width={[120, 176]}
                        height={[150, 195]}
                        src={body.src}
                        sx={{ float: 'left' }}
                    />
                    <Card sx={{ textAlign: 'center' }}>
                        <ThemedHeading
                            style={{ fontSize: [3, 4], pt: [4, 5] }}
                            text={body.name}
                        />
                        <Text
                            color={themes[theme].secondDefaultFontColor}
                            sx={{ fontSize: [2, 3], fontWeight: 800 }}
                        >
                            bodysecondName
                        </Text>
                    </Card>
                </>
            }
        ></CardBlank>
    );
};
EpisodCard.propTypes = {
    body: PropTypes.object,
};
EpisodCard.defaultProps = {
    body: {},
};
export default EpisodCard;
