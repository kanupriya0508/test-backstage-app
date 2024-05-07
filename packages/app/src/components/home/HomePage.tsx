import {
  HomePageToolkit,
  HomePageCompanyLogo,
  HomePageStarredEntities,
  TemplateBackstageLogoIcon,
  WelcomeTitle,
  HeaderWorldClock,
  ClockConfig,
} from '@backstage/plugin-home';
import { Content, Page, Header } from '@backstage/core-components';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import MyLogo from '../../assets/productivity-big-logo.png';

const useStyles = makeStyles(theme => ({
  searchBarInput: {
    maxWidth: '60vw',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '50px',
    boxShadow: theme.shadows[1],
  },
  searchBarOutline: {
    borderStyle: 'none',
  },
  clockContainer: {
    display: 'inline-block',
    margin: theme.spacing(2), 
  },
  circle: {
    borderRadius: '50%',
    border: '2px solid white',
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
}));

const useLogoStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5, 0),
  },
  svg: {
    width: 600,
    height: 200,
  },
  path: {
    fill: '#7df3e1',
  },
}));

const clockConfigs: ClockConfig[] = [
  {
    label: 'NYC',
    timeZone: 'America/New_York',
  },
  {
    label: 'UTC',
    timeZone: 'UTC',
  },
  {
    label: 'STO',
    timeZone: 'Europe/Stockholm',
  },
  {
    label: 'TYO',
    timeZone: 'Asia/Tokyo',
  },
];

const timeFormat: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

const ClockWithCircle = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();

  return (
    <div className={classes.clockContainer}>
      <div className={classes.circle}>
        {children}
      </div>
    </div>
  );
};


export const HomePage = () => {
  const classes = useStyles();
  const { svg, path, container } = useLogoStyles();

  return (
    <SearchContextProvider>
      <Header title={<WelcomeTitle language={['English']} />} pageTitleOverride="Home">
      {clockConfigs.map(config => (
        <ClockWithCircle key={config.label}>
          <HeaderWorldClock
            clockConfigs={[config]}
            customTimeFormat={timeFormat}
          />
        </ClockWithCircle>
      ))}
      </Header>
      <Page themeId="home">
        <Content>
          <Grid container justifyContent="center" spacing={6}>
            <HomePageCompanyLogo
              className={container}
              // logo={<TemplateBackstageLogo classes={{ svg, path }} />}
              logo={
                <img src={MyLogo} alt="Productivity Logo" className={svg} />
              }
            />
            <Grid container item xs={12} justifyContent="center">
              <HomePageSearchBar
                InputProps={{
                  classes: {
                    root: classes.searchBarInput,
                    notchedOutline: classes.searchBarOutline,
                  },
                }}
                placeholder="Search"
              />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities />
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageToolkit
                  tools={Array(4).fill({
                    url: '#',
                    label: 'link',
                    icon: <TemplateBackstageLogoIcon />,
                  })}
                />
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  );
};
