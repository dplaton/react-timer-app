FROM node:latest

RUN git clone https://github.com/dplaton/react-timer-app timer-app

RUN npm --prefix ./timer-app install ./timer-app

ENTRYPOINT npm --prefix ./timer-app start
