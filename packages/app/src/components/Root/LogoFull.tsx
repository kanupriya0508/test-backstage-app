import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyLogo from "../../assets/productivity-logo.png"

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 70,
  },
  path: {
    fill: '#7df3e1',
  },
});

const LogoFull = () => {
  const classes = useStyles();
  return <img className={classes.svg} src={MyLogo} alt="productivity logo"/>;
};

// const LogoFull = () => {
//   const classes = useStyles();

//   return (
//     <svg
//       className={classes.svg}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 2079.95 456.05"
//     >
//       <path
//         className={classes.path}
//         d="M302.9,180a80.62,80.62,0,0,0,13.44-10.37c.8-.77,1.55-1.54,2.31-2.31a81.89,81.89,0,0,0,7.92-9.37,62.37,62.37,0,0,0,6.27-10.77,48.6,48.6,0,0,0,4.36-16.4c1.49-19.39-10-38.67-35.62-54.22L198.42,14,78.16,129.22l-78.29,75,108.6,65.9a111.6,111.6,0,0,0,57.76,16.42c24.92,0,48.8-8.8,66.42-25.69,19.16-18.36,25.52-42.12,13.7-61.87a49.69,49.69,0,0,0-6.8-8.87,89.78,89.78,0,0,0,19.28,2.15H259a85.09,85.09,0,0,0,31-5.79A80.88,80.88,0,0,0,302.9,180Zm-100.59,59.8c-19.32,18.51-50.4,21.24-75.7,5.9l-75.13-45.6,67.44-64.65,76.42,46.39C222.88,198.57,221.36,221.6,202.31,239.84Zm8.94-82.21L140.6,114.74,205,53l69.37,42.11c25.94,15.73,29.31,37.05,10.55,55A60.71,60.71,0,0,1,211.25,157.63Zm29.86,190c-19.57,18.75-46.17,29.08-74.88,29.08a123.84,123.84,0,0,1-64.11-18.19L-.13,296.51v24.67l108.6,65.91a111.6,111.6,0,0,0,57.76,16.42c24.92,0,48.8-8.81,66.42-25.69,12.88-12.34,20-27.13,19.68-41.49v-1.79A87.85,87.85,0,0,1,241.11,347.67Zm0-39c-19.57,18.76-46.17,29.09-74.88,29.09a123.84,123.84,0,0,1-64.11-18.19L-.13,257.52V282.2l108.6,65.91a111.59,111.59,0,0,0,57.76,16.41c24.92,0,48.8-8.8,66.42-25.68,12.88-12.35,20-27.13,19.68-41.5v-1.79A86.86,86.86,0,0,1,241.11,308.68Zm0-39c-19.57,18.76-46.17,29.09-74.88,29.09a123.84,123.84,0,0,1-64.11-18.19L-.13,218.54v24.68l108.6,65.91a111.59,111.59,0,0,0,57.76,16.41c24.92,0,48.8-8.8,66.42-25.69,12.88-12.34,20-27.12,19.68-41.49v-1.82A87.14,87.14,0,0,1,241.11,269.7Zm83.69,25.74a94.16,94.16,0,0,1-60.19,25.86h0V348a81.6,81.6,0,0,0,51.73-22.37c14-13.38,21.15-28.11,21-42.64v-2.2A95.14,95.14,0,0,1,324.8,295.44Zm-83.69,91.21c-19.57,18.75-46.17,29.09-74.88,29.09a123.76,123.76,0,0,1-64.11-18.2L-.13,335.49v24.67l108.6,65.91a111.6,111.6,0,0,0,57.76,16.42c24.92,0,48.8-8.81,66.42-25.69,12.88-12.34,20-27.13,19.68-41.49v-1.79A87.35,87.35,0,0,1,241.11,386.65Zm85.75-210.21c-.68.69-1.35,1.38-2.06,2.05a99.19,99.19,0,0,1-22.23,15.69,94.53,94.53,0,0,1-26.24,8.71,97.84,97.84,0,0,1-14.16,1.57c.5,1.61.9,3.25,1.25,4.9a52.7,52.7,0,0,1,1.13,12V231h.05A84.48,84.48,0,0,0,290,225.47a80.83,80.83,0,0,0,26.38-16.82c.81-.77,1.51-1.56,2.27-2.34a82,82,0,0,0,7.92-9.38,62.85,62.85,0,0,0,6.29-10.78,48.5,48.5,0,0,0,4.32-16.44c.09-1.23.2-2.47.19-3.7v-2c-.72,1-1.48,2.06-2.26,3.09A98,98,0,0,1,326.86,176.44Zm0,77.92c-.68.7-1.3,1.41-2,2.1a94.09,94.09,0,0,1-60.19,25.85h0V309h0a81.65,81.65,0,0,0,51.73-22.37,73.51,73.51,0,0,0,16.48-22.49,48.56,48.56,0,0,0,4.32-16.44c.09-1.24.2-2.48.19-3.71v-2.2c-.74,1.08-1.47,2.16-2.27,3.22A95.81,95.81,0,0,1,326.82,254.36Zm0-39c-.68.7-1.3,1.41-2,2.1a92.22,92.22,0,0,1-10.62,8.65,93.53,93.53,0,0,1-11.63,7,95.63,95.63,0,0,1-37.94,10.18h-.05l0,26.67h0a81.63,81.63,0,0,0,51.73-22.37c.81-.77,1.51-1.56,2.27-2.34a82,82,0,0,0,7.92-9.38,63.16,63.16,0,0,0,6.29-10.77,48.55,48.55,0,0,0,4.32-16.45c.09-1.23.2-2.47.19-3.7v-2.2c-.74,1.08-1.47,2.16-2.27,3.22A98.19,98.19,0,0,1,326.82,215.38Zm241-88.84q7.94,0,17.09.17t18.12,1a139.3,139.3,0,0,1,16.74,2.57,42.78,42.78,0,0,1,13.3,5.14,64.27,64.27,0,0,1,20.54,19.89Q662,168,662,186.54q0,19.54-9.49,33.78t-27.1,21.09v.68q22.78,4.82,34.87,20.58t12.08,38.4a72.62,72.62,0,0,1-4.83,26.06,65.29,65.29,0,0,1-14.33,22.46,71.57,71.57,0,0,1-23.47,15.78q-14,6-32.28,6H478.38V126.54Zm9,105.27q28,0,40.21-9.78t12.26-29.31q0-13-4.14-20.58a29.47,29.47,0,0,0-11.4-11.66A45,45,0,0,0,597,155.17a161.2,161.2,0,0,0-20.19-1.2h-65.6v77.84Zm16.57,112.13q21.74,0,34-11.66T639.59,300q0-12-4.48-19.88a34.85,34.85,0,0,0-11.91-12.52,50.14,50.14,0,0,0-17.09-6.52,105,105,0,0,0-20-1.88H511.17v84.7Zm274.79,26.74q-7.61,4.45-21.06,4.46-11.4,0-18.12-6.34t-6.74-20.75a70.17,70.17,0,0,1-28.13,20.75,97.87,97.87,0,0,1-57.65,3.6,53.51,53.51,0,0,1-18.82-8.58A41.19,41.19,0,0,1,705,348.56q-4.65-9.42-4.66-22.8,0-15.09,5.18-24.69a44.92,44.92,0,0,1,13.64-15.6,62.63,62.63,0,0,1,19.33-9.09q10.88-3.08,22.27-5.14,12.08-2.4,23-3.6a128,128,0,0,0,19.16-3.43c5.53-1.48,9.89-3.65,13.12-6.51s4.83-7,4.83-12.52q0-9.6-3.62-15.43a24.94,24.94,0,0,0-9.32-8.92,38.38,38.38,0,0,0-12.78-4.11,96.54,96.54,0,0,0-14-1q-18.63,0-31.07,7T736.6,249.29H707.26q.69-16.46,6.9-27.77a52.21,52.21,0,0,1,16.57-18.35,70,70,0,0,1,23.65-10.11A125.51,125.51,0,0,1,782.86,190a168.63,168.63,0,0,1,24,1.72,63.26,63.26,0,0,1,21.58,7A41.23,41.23,0,0,1,844,213.59q5.87,9.57,5.87,25v91q0,10.26,1.21,15.05t8.11,4.79a35.57,35.57,0,0,0,9-1.37Zm-47.64-90.87c-3.69,2.74-8.52,4.72-14.5,6s-12.26,2.27-18.82,3.07-13.17,1.71-19.85,2.73a73.7,73.7,0,0,0-18,4.94,32.62,32.62,0,0,0-12.94,9.73q-5,6.32-5,17.23a23.31,23.31,0,0,0,2.94,12.11,24.11,24.11,0,0,0,7.59,8,32,32,0,0,0,10.88,4.44,60.94,60.94,0,0,0,13.11,1.36q14.5,0,24.86-3.92a52.49,52.49,0,0,0,16.91-9.9,39.1,39.1,0,0,0,9.67-13,32.53,32.53,0,0,0,3.11-13.14ZM1002.07,225q-11.05-9.25-29.69-9.26-15.89,0-26.58,5.83A47.29,47.29,0,0,0,928.71,237a64.66,64.66,0,0,0-9.15,22.12A119.83,119.83,0,0,0,916.8,285a98.22,98.22,0,0,0,2.93,24,64.18,64.18,0,0,0,9.15,20.74,46.2,46.2,0,0,0,16.23,14.58q10,5.49,23.82,5.48,21.75,0,34-11.31t15-31.89h30q-4.83,32.91-24.68,50.75t-54,17.83q-20.37,0-36.07-6.52A69.86,69.86,0,0,1,907,350.11a79.92,79.92,0,0,1-15.88-28.63A118.64,118.64,0,0,1,885.73,285a129.41,129.41,0,0,1,5.18-37.21,85.63,85.63,0,0,1,15.71-30.17A73.46,73.46,0,0,1,933,197.35Q948.91,190,970,190a108.54,108.54,0,0,1,28.48,3.6,69.59,69.59,0,0,1,23.48,11.15,61,61,0,0,1,16.74,19q6.55,11.49,8.29,27.26h-30.38Q1013.11,234.21,1002.07,225Zm109.77-98.41v145l81.47-77.49h39.36l-70.77,64.46,75.95,112.82h-37.29l-61.1-92.59-27.62,25.38v67.21H1082.5V126.54Zm170.54,205.22a31.07,31.07,0,0,0,10.87,10.63,49,49,0,0,0,15.19,5.66,87.06,87.06,0,0,0,17.44,1.71,109.18,109.18,0,0,0,14.5-1,53.22,53.22,0,0,0,14-3.78,26.27,26.27,0,0,0,10.53-8q4.14-5.32,4.14-13.55,0-11.31-8.63-17.14a73.69,73.69,0,0,0-21.58-9.43q-12.94-3.6-28.13-6.52a146,146,0,0,1-28.14-8.23A58.16,58.16,0,0,1,1261,267.13q-8.64-9.6-8.63-26.75,0-13.38,6-23a49.26,49.26,0,0,1,15.53-15.61,71.76,71.76,0,0,1,21.4-8.91A99.41,99.41,0,0,1,1319,190a141.31,141.31,0,0,1,28,2.58,64.85,64.85,0,0,1,22.62,8.91,46.16,46.16,0,0,1,15.7,17.15q5.87,10.8,6.91,26.91h-29.35q-.69-8.57-4.48-14.23a29.36,29.36,0,0,0-9.67-9.08,44.16,44.16,0,0,0-12.94-5,67.68,67.68,0,0,0-14.33-1.54,87.29,87.29,0,0,0-13.29,1,45.28,45.28,0,0,0-12.26,3.6,24.49,24.49,0,0,0-9,6.86q-3.46,4.29-3.46,11.14a16.32,16.32,0,0,0,5.36,12.52,42.75,42.75,0,0,0,13.63,8.23,120,120,0,0,0,18.64,5.48q10.37,2.24,20.72,4.63,11,2.4,21.57,5.83A70.74,70.74,0,0,1,1382,284.1a44.55,44.55,0,0,1,13.12,14.23q5,8.58,5,21.26,0,16.13-6.73,26.75a52.5,52.5,0,0,1-17.61,17.14,73.89,73.89,0,0,1-24.51,9.09,146.3,146.3,0,0,1-27.1,2.57,126.24,126.24,0,0,1-28.31-3.09A69.56,69.56,0,0,1,1272,361.94a51.74,51.74,0,0,1-16.57-18.52q-6.21-11.49-6.9-27.95h29.34A32.65,32.65,0,0,0,1282.38,331.76Zm226.46-137.67v25.72h-35.56V329.88a31.37,31.37,0,0,0,.87,8.23,8.42,8.42,0,0,0,3.28,4.8,14.61,14.61,0,0,0,6.73,2.23,99.19,99.19,0,0,0,11.22.51h13.46v25.72H1486.4a105.8,105.8,0,0,1-19.5-1.55,28.65,28.65,0,0,1-13.12-5.65,24.09,24.09,0,0,1-7.42-11.66q-2.43-7.54-2.42-19.89V219.81h-30.38V194.09h30.38V140.94h29.34v53.15ZM1699.4,370.68q-7.61,4.45-21.06,4.46-11.4,0-18.12-6.34t-6.74-20.75a70.17,70.17,0,0,1-28.13,20.75,97.87,97.87,0,0,1-57.65,3.6,53.51,53.51,0,0,1-18.82-8.58,41.19,41.19,0,0,1-12.6-15.26q-4.65-9.42-4.66-22.8,0-15.09,5.18-24.69a44.92,44.92,0,0,1,13.64-15.6,62.63,62.63,0,0,1,19.33-9.09q10.88-3.08,22.27-5.14,12.07-2.4,23-3.6a128,128,0,0,0,19.16-3.43c5.53-1.48,9.89-3.65,13.12-6.51s4.83-7,4.83-12.52q0-9.6-3.62-15.43a24.94,24.94,0,0,0-9.32-8.92,38.38,38.38,0,0,0-12.78-4.11,96.54,96.54,0,0,0-14-1q-18.63,0-31.07,7t-13.46,26.57h-29.34q.67-16.46,6.9-27.77A52.21,52.21,0,0,1,1562,203.17a70,70,0,0,1,23.65-10.11,125.51,125.51,0,0,1,28.48-3.09,168.63,168.63,0,0,1,24,1.72,63.26,63.26,0,0,1,21.58,7,41.23,41.23,0,0,1,15.53,14.89q5.87,9.57,5.87,25v91q0,10.26,1.21,15.05t8.11,4.79a35.57,35.57,0,0,0,9-1.37Zm-47.64-90.87c-3.69,2.74-8.52,4.72-14.5,6s-12.26,2.27-18.82,3.07-13.17,1.71-19.85,2.73a73.7,73.7,0,0,0-17.95,4.94,32.62,32.62,0,0,0-12.94,9.73q-5,6.32-5,17.23a23.31,23.31,0,0,0,2.94,12.11,24.11,24.11,0,0,0,7.59,8,32,32,0,0,0,10.88,4.44,60.94,60.94,0,0,0,13.11,1.36q14.51,0,24.86-3.92a52.49,52.49,0,0,0,16.91-9.9,39.1,39.1,0,0,0,9.67-13,32.53,32.53,0,0,0,3.11-13.14Zm208.85,141.62q-20,21.6-62.83,21.6a122.11,122.11,0,0,1-25.37-2.74,78,78,0,0,1-23.48-8.92,54.41,54.41,0,0,1-17.43-16.11q-6.91-10-7.6-24.35h29.35a21.47,21.47,0,0,0,5,13.38,36.67,36.67,0,0,0,11.4,8.91,55.52,55.52,0,0,0,14.67,5,79.51,79.51,0,0,0,15.19,1.55q14.49,0,24.51-5A46,46,0,0,0,1840.59,401a56.53,56.53,0,0,0,9.49-21.09,117.46,117.46,0,0,0,2.94-27.09V341.19h-.7q-7.59,16.46-23,24.18a71.8,71.8,0,0,1-32.63,7.71q-20,0-34.86-7.2A72.88,72.88,0,0,1,1737,346.51a82.13,82.13,0,0,1-15-28.46,116.62,116.62,0,0,1-5-34.47,133.92,133.92,0,0,1,4.14-32.4A88.17,88.17,0,0,1,1735,221a75.49,75.49,0,0,1,25.55-22.29q15.87-8.75,39-8.75a66.21,66.21,0,0,1,31.07,7.38,52.13,52.13,0,0,1,22.09,22.11h.35V194.09h27.61V356.28Q1880.63,399.83,1860.61,421.43Zm-37.46-79.72a47.94,47.94,0,0,0,16.4-15.78,71.89,71.89,0,0,0,9.15-22.11,106.77,106.77,0,0,0,2.93-24.69,96.71,96.71,0,0,0-2.76-23,64,64,0,0,0-8.8-20.4,45.76,45.76,0,0,0-15.71-14.57q-9.66-5.49-23.47-5.49-14.16,0-24.17,5.32a46.77,46.77,0,0,0-16.4,14.23,60.14,60.14,0,0,0-9.32,20.57,99.69,99.69,0,0,0-2.93,24.35,120.63,120.63,0,0,0,2.42,24,67.5,67.5,0,0,0,8.28,21.77,46.37,46.37,0,0,0,15.54,15.78q9.66,6,24.16,6T1823.15,341.71Zm228,18.34q-20,15.09-50.41,15.09-21.4,0-37.11-6.86a73.16,73.16,0,0,1-26.41-19.2,81.52,81.52,0,0,1-16-29.49,141.12,141.12,0,0,1-6-37.38,106.1,106.1,0,0,1,6.21-37A88.56,88.56,0,0,1,1938.8,216a79.09,79.09,0,0,1,26.58-19.2A81.66,81.66,0,0,1,1999,190q23.82,0,39.53,9.78a78,78,0,0,1,25.2,24.86,98.18,98.18,0,0,1,13.12,32.91,140.6,140.6,0,0,1,2.93,34h-133.6a70,70,0,0,0,2.76,22.12,49.9,49.9,0,0,0,10,18.51A49.1,49.1,0,0,0,1976.6,345q10.7,4.82,25.2,4.8,18.65,0,30.55-8.57t15.71-26.06h29Q2071.18,345,2051.17,360.05Zm-7.08-113.84a50,50,0,0,0-10.7-16,53.1,53.1,0,0,0-56.62-10.63,47.48,47.48,0,0,0-15.71,10.81,51.69,51.69,0,0,0-10.35,15.94,60.18,60.18,0,0,0-4.49,19.37h102.53A59.47,59.47,0,0,0,2044.09,246.21ZM302.9,180a80.62,80.62,0,0,0,13.44-10.37c.8-.77,1.55-1.54,2.31-2.31a81.89,81.89,0,0,0,7.92-9.37,62.37,62.37,0,0,0,6.27-10.77,48.6,48.6,0,0,0,4.36-16.4c1.49-19.39-10-38.67-35.62-54.22L198.42,14,78.16,129.22l-78.29,75,108.6,65.9a111.6,111.6,0,0,0,57.76,16.42c24.92,0,48.8-8.8,66.42-25.69,19.16-18.36,25.52-42.12,13.7-61.87a49.69,49.69,0,0,0-6.8-8.87,89.78,89.78,0,0,0,19.28,2.15H259a85.09,85.09,0,0,0,31-5.79A80.88,80.88,0,0,0,302.9,180Zm-100.59,59.8c-19.32,18.51-50.4,21.24-75.7,5.9l-75.13-45.6,67.44-64.65,76.42,46.39C222.88,198.57,221.36,221.6,202.31,239.84Zm8.94-82.21L140.6,114.74,205,53l69.37,42.11c25.94,15.73,29.31,37.05,10.55,55A60.71,60.71,0,0,1,211.25,157.63Zm29.86,190c-19.57,18.75-46.17,29.08-74.88,29.08a123.84,123.84,0,0,1-64.11-18.19L-.13,296.51v24.67l108.6,65.91a111.6,111.6,0,0,0,57.76,16.42c24.92,0,48.8-8.81,66.42-25.69,12.88-12.34,20-27.13,19.68-41.49v-1.79A87.85,87.85,0,0,1,241.11,347.67Zm0-39c-19.57,18.76-46.17,29.09-74.88,29.09a123.84,123.84,0,0,1-64.11-18.19L-.13,257.52V282.2l108.6,65.91a111.59,111.59,0,0,0,57.76,16.41c24.92,0,48.8-8.8,66.42-25.68,12.88-12.35,20-27.13,19.68-41.5v-1.79A86.86,86.86,0,0,1,241.11,308.68Zm0-39c-19.57,18.76-46.17,29.09-74.88,29.09a123.84,123.84,0,0,1-64.11-18.19L-.13,218.54v24.68l108.6,65.91a111.59,111.59,0,0,0,57.76,16.41c24.92,0,48.8-8.8,66.42-25.69,12.88-12.34,20-27.12,19.68-41.49v-1.82A87.14,87.14,0,0,1,241.11,269.7Zm83.69,25.74a94.16,94.16,0,0,1-60.19,25.86h0V348a81.6,81.6,0,0,0,51.73-22.37c14-13.38,21.15-28.11,21-42.64v-2.2A95.14,95.14,0,0,1,324.8,295.44Zm-83.69,91.21c-19.57,18.75-46.17,29.09-74.88,29.09a123.76,123.76,0,0,1-64.11-18.2L-.13,335.49v24.67l108.6,65.91a111.6,111.6,0,0,0,57.76,16.42c24.92,0,48.8-8.81,66.42-25.69,12.88-12.34,20-27.13,19.68-41.49v-1.79A87.35,87.35,0,0,1,241.11,386.65Zm85.75-210.21c-.68.69-1.35,1.38-2.06,2.05a99.19,99.19,0,0,1-22.23,15.69,94.53,94.53,0,0,1-26.24,8.71,97.84,97.84,0,0,1-14.16,1.57c.5,1.61.9,3.25,1.25,4.9a52.7,52.7,0,0,1,1.13,12V231h.05A84.48,84.48,0,0,0,290,225.47a80.83,80.83,0,0,0,26.38-16.82c.81-.77,1.51-1.56,2.27-2.34a82,82,0,0,0,7.92-9.38,62.85,62.85,0,0,0,6.29-10.78,48.5,48.5,0,0,0,4.32-16.44c.09-1.23.2-2.47.19-3.7v-2c-.72,1-1.48,2.06-2.26,3.09A98,98,0,0,1,326.86,176.44Zm0,77.92c-.68.7-1.3,1.41-2,2.1a94.09,94.09,0,0,1-60.19,25.85h0V309h0a81.65,81.65,0,0,0,51.73-22.37,73.51,73.51,0,0,0,16.48-22.49,48.56,48.56,0,0,0,4.32-16.44c.09-1.24.2-2.48.19-3.71v-2.2c-.74,1.08-1.47,2.16-2.27,3.22A95.81,95.81,0,0,1,326.82,254.36Zm0-39c-.68.7-1.3,1.41-2,2.1a92.22,92.22,0,0,1-10.62,8.65,93.53,93.53,0,0,1-11.63,7,95.63,95.63,0,0,1-37.94,10.18h-.05l0,26.67h0a81.63,81.63,0,0,0,51.73-22.37c.81-.77,1.51-1.56,2.27-2.34a82,82,0,0,0,7.92-9.38,63.16,63.16,0,0,0,6.29-10.77,48.55,48.55,0,0,0,4.32-16.45c.09-1.23.2-2.47.19-3.7v-2.2c-.74,1.08-1.47,2.16-2.27,3.22A98.19,98.19,0,0,1,326.82,215.38Z"
//       />
//     </svg>
//   );
// };

export default LogoFull;
