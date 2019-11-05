import React from 'react';
import PropTypes from 'prop-types';
import NormalText from '../singleComponents/NormalText';
import CardBlank from '../singleComponents/CardBlank';

import TwoColorInlineText from '../TwoColorInlineText';

const EpisodеTextBox = ({ episode }) => {
    return (
        <CardBlank
            children={
                <>
                    <NormalText
                        style={{ textAlign: 'left' }}
                        text={episode.openingCrawl}
                    />
                    <TwoColorInlineText
                        firstText="Director:"
                        secondText={episode.director}
                    />
                    <TwoColorInlineText
                        firstText="Release Date:"
                        secondText={episode.releaseDate}
                    />
                </>
            }
        />
    );
};
EpisodеTextBox.propTypes = {
    body: PropTypes.object,
};
EpisodеTextBox.defaultProps = {
    body: {},
};
export default EpisodеTextBox;
