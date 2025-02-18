# React Native: Stale Closures from Incorrect State Variable Handling

This repository demonstrates a common error in React Native development where state variables are incorrectly managed, leading to stale closures and unexpected component behavior.

## Problem
The `bug.js` file shows an example of how to incorrectly manage state variables.  The `count` variable is directly modified without using the `useState` hook, resulting in the UI not updating when the `count` value changes. 

## Solution
The `bugSolution.js` file demonstrates the correct approach, using the `useState` hook to manage the state variable.  This ensures that the component re-renders whenever the state changes.

## How to Reproduce
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npx react-native run-android` or `npx react-native run-ios` to run the app.
4. Observe the behavior in `bug.js` and `bugSolution.js` to compare the correct and incorrect implementation of state management.

## Additional Notes
This type of error can be especially tricky to debug, as the code may appear correct at first glance.  Always remember to use the appropriate state management mechanisms provided by React Native to avoid these issues.