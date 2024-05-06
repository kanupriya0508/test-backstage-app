import {
    createBaseThemeOptions,
    createUnifiedTheme,
    palettes,
  } from '@backstage/theme';
  
  export const myTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
      palette: palettes.dark,
    }),
    fontFamily: 'Comic Sans MS',
    defaultPageTheme: 'home',
  });