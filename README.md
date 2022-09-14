# KIN-UI-Automation

# Functional test automation

Funcional test automation project using Cypress.

## Technologies 

- Node.js
- JavaScript
- Cypress

## Important Infos: 

- I have worked a lot with page objects but i did not create this thinking in page objects because in my whole experience
i noticed some unnecessary botlenecks using page objects, of course sometimes its a lot of handy but i believe we should analyze
case by case always.

- So i like to separate by contexts or purposes or also by businness layer , this project i just simple did one best pratice that i believe
that is mandatory which is separate elements and organize them by each context or layer (like in this case , login , commons and etc)
and also create some commands that are kind of shared so we can reuse that

## Simple Play

- It has a simple pipeline just to make easier the running

- To run this project without any need of local installation or setup please go to: 
 https://github.com/morlfm/KIN-UI-Automation/actions/workflows/node.js.yml  and then click on cypress cloud app run bellow "All workflows"
then click on "Run workflow" (please choose environment production since its the only one configured in order of the challenge)

Test Results:

- https://dashboard.cypress.io/projects/xiet2r/runs

or follow instructions bellow to run locally

## Setting up the environment 

1. Please install [Node.js](https://nodejs.org/en/download/).

2. Please install [Docker](https://www.docker.com/get-started).

3. Please type on the command prompt to install dependencies:
```
npm i 
```

## Execution

Please to open the UI test mode, use: 
```
npx cypress open
```

Please to run headless, use (it is necessary to close the UI test mode): 
```
npx cypress run
```

## Improvements

- We could also have fixtures separate by env because sometimes the test data could be specific for some cases
- To run in the pipeline we should create our own image to not load resources directly from docker 
- The pipeline configures it is just a simple one, but we could have a bunch of necessary and mandatory improvements like cache and
also especifying when to trigger the pipe with which rules and so on.
- Tests results in a link but it could be on slack channel or so 
- We can create webhooks or so to run pipeline remotely
- We also should have different configurations pointing to all envs to run locally also, not just on pipelines
