import React from 'react';
import CardBlank from './singleComponents/CardBlank';
import ThemedHeading from './singleComponents/ThemedHeading';
import PropTypes from 'prop-types';
import { Image, Box } from 'rebass';

const BigImageCard = ({ image, name, children }) => {
    return (
        <CardBlank
            className="themedCard"
            style={{ display: 'block', textAlign: 'center' }}
            children={
                <>
                    <ThemedHeading style={{ fontSize: 4, py: 2 }} text={name} />
                    <Box textAlign="center" display="inline-grid" px={4}>
                        <Image maxHeight="100%" src={image} />
                        {children}
                    </Box>
                </>
            }
        ></CardBlank>
    );
};
BigImageCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
BigImageCard.defaultProps = {};
export default BigImageCard;
