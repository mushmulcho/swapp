import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import TwoColorInlineText from '../TwoColorInlineText';
import BigImageCard from '../BigImageCard';

const StarshipCard = ({ starship }) => {

    return (
        <BigImageCard
            name={starship.name}
            image={starship.image}
            children={
                <Box py={2}>
                    <TwoColorInlineText
                        firstText="Class:"
                        secondText={starship.starshipClass}
                    />
                    <TwoColorInlineText
                        firstText="Cost:"
                        secondText={starship.cost}
                    />
                    <TwoColorInlineText
                        firstText="Crew:"
                        secondText={starship.crew}
                    />
                    <TwoColorInlineText
                        firstText="Max Atmospheric Speed:"
                        secondText={starship.maxAtmosphericSpeed}
                    />
                    <TwoColorInlineText
                        firstText="Hyperdraive Rating:"
                        secondText={starship.hyperdriveRating}
                    />
                </Box>
            }
        />
    );
};
StarshipCard.propTypes = {
    starship: PropTypes.object.isRequired,
};
StarshipCard.defaultProps = {

};
export default StarshipCard;
