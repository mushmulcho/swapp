import React, { useContext } from 'react';
import {} from 'rebass';
import { themes, ThemeContext } from '../../Themes';
import CardBlank from '../singleComponents/CardBlank';

const EpisodCharacterBox = ({ body }) => {
    const { theme } = useContext(ThemeContext);

    return <CardBlank children={<></>} />;
};
export default EpisodCharacterBox;
