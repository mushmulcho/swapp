import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'rebass';
import { themes } from '../Themes';
import { connect } from 'react-redux';
import { toggledThemes } from '../../constants/theme.constants';
import Utils from '../../Utils';

const Logo = ({ small, theme, onToggleTheme }) => {
    //const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <Text
            onClick={() =>
                onToggleTheme(
                    theme === toggledThemes.DARK
                        ? toggledThemes.LIGHT
                        : toggledThemes.DARK,
                )
            }
            color={themes.commonColors.yellow}
            fontFamily="swFont"
            fontSize={small ? 20 : [50, 100]}
            textAlign={small ? 'left' : 'center'}
            width={small ? 'auto' : '100%'}
            style={{ cursor: 'pointer' }}
        >
            {' '}
            SWAPP{' '}
        </Text>
    );
};
Logo.propTypes = {
    small: PropTypes.bool,
};
Logo.defaultProps = {
    small: true,
};

export default connect(
    Utils.mapStateToProps,
    Utils.mapDispatchToProps,
)(Logo);
