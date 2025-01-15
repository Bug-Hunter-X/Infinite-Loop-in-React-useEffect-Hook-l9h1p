# React useEffect Infinite Loop Bug
This repository demonstrates a common error in React's `useEffect` hook that leads to an infinite loop.  The bug arises from incorrectly managing the dependencies within the useEffect's dependency array, creating a cycle where the state update triggers another update indefinitely.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install the necessary packages.
3. Run `npm start` to start the development server.
4. Observe the continuously incrementing counter in the browser.  The console will also show frequent re-renders.

## Solution
The solution involves correctly specifying the dependencies in the `useEffect` hook's dependency array.  Avoid including state variables that are directly modified within the `useEffect` callback function to prevent this infinite loop scenario.
