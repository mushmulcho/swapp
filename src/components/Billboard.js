import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'rebass';
import ThemedHeading from './singleComponents/ThemedHeading';
import NormalText from './singleComponents/NormalText';
import CardBlank from './singleComponents/CardBlank';

const Billboard = ({ episod }) => {
    return (
        <CardBlank
            className="billboard"
            children={
                <>
                    <Image width={256} height={345} src={episod.src} />
                    <ThemedHeading
                        style={{
                            fontSize: 4,
                            padding: '8px',
                            textAlign: 'left',
                            height: '54px',
                        }}
                        text={episod.name}
                    />
                    <NormalText
                        className="episodes-card-text"
                        text={episod.info}
                    />
                </>
            }
        ></CardBlank>
    );
};
Billboard.propTypes = {
    episod: PropTypes.object,
};
Billboard.defaultProps = {
    episod: {},
};
export default Billboard;
