import React from 'react';
export const themes = {
    commonColors: {
        yellow: '#FFE300',
        blue: '#4BD5EE',
        black: '#000',
        white: '#FFF',
    },
    light: {
        defaultBackgorund: '#E8EAED',
        defaultFontColor: '#4E5B6E',
        cards: {
            borderColor: '#E5E9F2',
            backgorund: '#FFF',
        },
        solidButtons: {
            backgorund: '#000',
            borderColor: '#E5E9F2',
            fontColor: '#FFE300',
        },
        outlineButtons: {
            backgorund: '#EFF2F7',
            borderColor: '#E5E9F2',
            fontColor: 'inherit',
        },
        inputs: {
            backgorund: '#EFF2F7',
            borderColor: '#E5E9F2',
            fontColor: '#3C4858',
        },
        appBar: {
            backgorund: '#000',
            borderColor: '#333',
            fontColor: '#4BD5EE',
        },
        primaryHeading: {
            fontColor: '#4BD5EE',
        },
        radar: {
            fontColor: '#4BD5EE',
            backgorund: '#000',
            grid: '#3C4858',
        },
    },
    dark: {
        defaultBackgorund: '#000',
        defaultFontColor: '#abb1ba',
        cards: {
            borderColor: '#3C4858',
            backgorund: '#333',
        },
        solidButtons: {
            backgorund: '#4BD5EE',
            borderColor: 'none',
            fontColor: '#FFE300',
        },
        outlineButtons: {
            backgorund: '#333',
            borderColor: '#3C4858',
            fontColor: 'inherit',
        },
        inputs: {
            backgorund: '#FFF',
            borderColor: '#3C4858',
            fontColor: '#273444',
        },
        appBar: {
            backgorund: '#333',
            borderColor: '#3C4858',
            fontColor: '#4BD5EE',
        },
        primaryHeading: {
            fontColor: '#FFE300',
        },
        radar: {
            fontColor: '#FFE300',
            backgorund: '#000',
            grid: '#333',
        },
    },
};
export const ThemeContext = React.createContext('dark');
