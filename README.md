<!-- Sure! Here's a summarized explanation of `index.js` and `App.js` in a React application:

# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# My own
.env


npx create-react-app my-app
cd my-app
npm start

N:B -> It is not needed to import react in every file after v17

`index.js` -> is the entry point that initiates the React application and renders the root component (`App.js`) into the HTML page. 

`App.js` ->on the other hand, defines the main layout and structure of the application, including common components and routing. Both files work together to set up and provide the foundation for your React application.

Higher Order Components -> Transform components into another components, 
                        -> Adding additional functionalities to the existing components

React routing -> For not reloading -> npm pack -> react-router-dom
              -> To implement HOC need react router dom 

Icons -> Fafa icon, cheveron icon












-->

<!-- 

Folder -> lower case
Function -> Uppder case
File -> Upper case

Components are like building blocks of a website.
This is like brick of a house

We use functional components.
Class components no more used today.
Props -> Properties / parameters -> Data which passed to 1 component to another component
State -> Set the data that individual component holds
# Lifecycle -> Workflow
1. Mount -> The components is initially rendered in dom
    a. Constructor
    b. Render
    c. componenentDidMount e.g -> Sideeffects -> explore, activities, links
O/P ->  Constructor called 2 user.js:82
        Rendered called 2 user.js:88
        ComponentDidMount called

2. Update -> The components is being updated
    a. Constructor
    b. shouldComponentUpdate(nextProp, nextState)
        O/P -> True / False
    c. Render
    d. getSnapshotBeforeUpdate(nextProp, nextState)
        O/P -> True / False
    e. componenentDidUpdate e.g -> 
3. Unmount -> The components is removed from the dom / dies, Will unmount

# Hooks 
-> It makes use state in func component also which was prev use only in class comp
 -> State -> React 16 -> Hooks (Power to func comp) -> 
 useState()

Masters in functional component
but dont forget class component

<!-- 
axios
Package for api flexibility -> axios Globally fetch the data 1 time not every time --> 


