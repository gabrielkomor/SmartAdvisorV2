# Smart Advisor V2

## Table of Content

- [Used Technologies](#used-technologies)
- [Developer Guide](#developer-guide)
- [Application Apperance](#application-apperance)

## Used Technologies

- Python 3.13
- FastAPI
- React
- Tailwind CSS
- Daisy UI
- TypeScript

## Developer Guide

1. Install NodeJs.
2. Install Docker or Podman witch compose extension.
3. Enter `./frontend` directory and run the following command:

```bash
npm ci
```

4. Back to the main application direcory and run the following command:

```bash
npm run initialize
```

5. If you want to run frontend of appliaction execute the following command:

```bash
npm run dev-frontend
```

6. If you want to run backend of application execute the following command:

```bash
npm run dev-backend
```

7. If you want to rebuild all application files use local CICD by executing the command below:

```bash
npm run cicd
```

8. If you want to run compose file execute command below:

```bash
podman/docker compose up
```

### Tip

- For more usefull commands you can check `package.json` file.

## Application Apperance

- Main application window containing the window for downloading historical stock market data:

![Download Data Window](./sample_screens/corporate_download_data.PNG)

- Main application window showing an interactive candlestick chart created based on previously downloaded data:

![Candle Chart Window](./sample_screens/corporate_candle_chart.PNG)

- Main application window showing signals transmitted by applications in the past:

![Signals History](./sample_screens/corporate_signals_history.PNG)

- Main application window showing the percentage values of the signal strength transmitted by all expert systems:

![History Decisions](./sample_screens/corporate_history_decisions.PNG)

- The same data shown in a line graph:

![Lienar Decisions](./sample_screens/corporate_linear_decisions.PNG)

- Application theme settings:

![Theme Settings](./sample_screens/corporate_settings.PNG)

- Download data window in "Dim" theme:

![Download Data Dim](./sample_screens/dim_download_data.PNG)

- Download data window in "Dim" theme, mobile version 1/2:

<p align="center">
  <img src="./sample_screens/dim_mobile_1.PNG" alt="Download Data Dim Mobile 1">
</p>

- Download data window in "Dim" theme, mobile version 2/2:

<p align="center">
  <img src="./sample_screens/dim_mobile_2.PNG" alt="Download Data Dim Mobile 2">
</p>

- Signals history page in "Dim" theme on mobile:

<p align="center">
  <img src="./sample_screens/dim_mobile_signals_historyPNG.PNG" alt="Signals History Dim Mobile">
</p>
