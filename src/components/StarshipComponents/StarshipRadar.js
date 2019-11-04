import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import { themes, ThemeContext } from '../../Themes';
import { Box } from 'rebass';
import { toggledThemes } from '../../constants/theme.constants';

const StarshipRadar = ({ starship }) => {
    const { theme } = useContext(ThemeContext);
    const convertToNormal = (number = 0) => {
        if (typeof number !== 'number') return 0;
        else if (number < 1) return number;
        else return +('0.' + number);
    };

    const data = [
        {
            data: {
                cost: convertToNormal(starship.cost),
                crew: convertToNormal(starship.crew),
                hyperdrive: convertToNormal(starship.hyperdriveRating),
                maxML: convertToNormal(starship.maxMLPerHour),
                maxSpeed: convertToNormal(starship.maxAtmosphericSpeed),
            },
            meta: {
                color:
                    themes[
                        theme === toggledThemes.DARK
                            ? toggledThemes.LIGHT
                            : toggledThemes.DARK
                    ].primaryHeading.fontColor,
            },
        },
    ];
    const captions = {
        maxSpeed: 'Max Atm. Speed',
        maxML: 'Max Ml/h',
        hyperdrive: 'HyperD Rat.',
        crew: 'Crew',
        cost: 'Cost',
    };
    const options = {
        scales: 5,
        zoomDistance: 1.2,
        dots: false,
        scaleProps: () => ({
            fill: 'none',
            stroke: '#999',
            strokeWidth: 1,
        }),
        captionProps: () => ({
            textAnchor: 'middle',
            fontSize: 14,
            fontFamily: 'sans-serif',
            fill: themes[theme].primaryHeading.fontColor,
        }),
    };

    return (
        <>
            <Box bg={'black'}>
                <RadarChart
                    captions={captions}
                    data={data}
                    size={500}
                    options={options}
                />
            </Box>
        </>
    );
};
StarshipRadar.propTypes = {
    starship: PropTypes.object.isRequired,
};
StarshipRadar.defaultProps = {};
export default StarshipRadar;
