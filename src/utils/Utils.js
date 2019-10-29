import { toggleThemeAction } from '../client/actions';
const Utils = {
    mapStateToProps: ({ theme }) => ({ theme }),
    mapDispatchToProps: { onToggleTheme: toggleThemeAction },
};
export default Utils;
