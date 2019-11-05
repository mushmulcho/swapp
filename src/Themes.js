import React from 'react';
export const themes = {
    commonColors: {
        yellow: '#FFE300',
        blue: '#4BD5EE',
        black: '#000',
        white: '#FFF',
    },
    light: {
        defaultBackground: '#E8EAED',
        defaultFontColor: '#4E5B6E',
        secondDefaultFontColor: '#000',
        cards: {
            borderColor: '#E5E9F2',
            background: '#FFF',
        },
        solidButtons: {
            background: '#000',
            borderColor: '#E5E9F2',
            fontColor: '#FFE300',
        },
        outlineButtons: {
            background: '#EFF2F7',
            borderColor: '#E5E9F2',
            fontColor: 'inherit',
        },
        inputs: {
            background: '#EFF2F7',
            borderColor: '#E5E9F2',
            fontColor: '#3C4858',
        },
        appBar: {
            background: '#000',
            borderColor: '#333',
            fontColor: '#4BD5EE',
        },
        primaryHeading: {
            fontColor: '#4BD5EE',
        },
        radar: {
            fontColor: '#4BD5EE',
            background: '#000',
            grid: '#3C4858',
        },
    },
    dark: {
        defaultBackground: '#000',
        defaultFontColor: '#abb1ba',
        secondDefaultFontColor: '#4BD5EE',
        cards: {
            borderColor: '#3C4858',
            background: '#333',
        },
        solidButtons: {
            background: '#4BD5EE',
            borderColor: 'none',
            fontColor: '#FFE300',
        },
        outlineButtons: {
            background: '#333',
            borderColor: '#3C4858',
            fontColor: 'inherit',
        },
        inputs: {
            background: '#FFF',
            borderColor: '#3C4858',
            fontColor: '#273444',
        },
        appBar: {
            background: '#333',
            borderColor: '#3C4858',
            fontColor: '#4BD5EE',
        },
        primaryHeading: {
            fontColor: '#FFE300',
        },
        radar: {
            fontColor: '#FFE300',
            background: '#000',
            grid: '#333',
        },
    },
};
export const ThemeContext = React.createContext({
    theme: 'dark',
    toggleTheme: () => {},
});
