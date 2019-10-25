import { toggleThemeAction } from './actions';
const Utils = {
    mapStateToProps: ({ theme }) => ({ theme }),
    mapDispatchToProps: { onToggleTheme: toggleThemeAction },
};
export default Utils;
