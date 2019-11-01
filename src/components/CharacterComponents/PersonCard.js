import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import TwoColorInlineText from '../TwoColorInlineText';
import BigImageCard from '../BigImageCard';

const PersonCard = ({ person }) => {
    return (
        <BigImageCard
            name={person.name}
            image={person.image}
            children={
                <Box py={2}>
                    <TwoColorInlineText
                        firstText="Height:"
                        secondText={person.height}
                    />
                    <TwoColorInlineText
                        firstText="Width:"
                        secondText={person.mass}
                    />
                    <TwoColorInlineText
                        firstText="Spicies:"
                        secondText={person.species.name}
                    />
                    <TwoColorInlineText
                        firstText="Home World:"
                        secondText={person.homeworld.name}
                    />
                </Box>
            }
        />
    );
};
PersonCard.propTypes = {
    person: PropTypes.object,
};
PersonCard.defaultProps = {
    person: {},
};
export default PersonCard;
