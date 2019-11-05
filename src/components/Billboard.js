import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'rebass';
import ThemedHeading from './singleComponents/ThemedHeading';
import NormalText from './singleComponents/NormalText';
import CardBlank from './singleComponents/CardBlank';
import styled from '@emotion/styled';
import LinkTo from '../components/singleComponents/LinkTo';

const Billboard = ({ episode }) => {
    const StyledCardBlank = styled(CardBlank)`
        width: 300px;
    `;
    const StyledNormalText = styled(NormalText)`
        padding: 14px;
    `;
    return (
        <StyledCardBlank
            hover
            children={
                <LinkTo
                    to={`/episodes/${episode.id}`}
                    children={
                        <>
                            <Image src={episode.image} />
                            <ThemedHeading
                                style={{
                                    fontSize: 5,
                                    padding: '16px',
                                    textAlign: 'left',
                                    height: '54px',
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                    lineHeight: '24px',
                                }}
                                text={episode.title}
                            />
                            <StyledNormalText
                                className="episodes-card-text"
                                text={episode.openingCrawl}
                            />
                        </>
                    }
                />
            }
        ></StyledCardBlank>
    );
};
Billboard.propTypes = {
    episode: PropTypes.object.isRequired,
};

export default Billboard;
