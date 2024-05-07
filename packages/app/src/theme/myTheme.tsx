import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

export const myTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      primary: {
        main: '#343b58',
      },
    },
  }),
  defaultPageTheme: 'home',
  fontFamily: 'Comic Sans MS',
  /* header colors */
  pageTheme: {
    home: genPageTheme({ colors: ['#FF0000', '#343b58'], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: ['#8c4351', '#343b58'],
      shape: shapes.wave2,
    }),
  },
});