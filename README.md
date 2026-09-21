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

- [WIP]