# useReducer Hook in React Explained with Simple Examples

## What is useReducer()?

useReducer(reducer, initialState) follows the reducer pattern found in JavaScript. The reducer function defines how state should be updated based on the dispatched action. The hook then returns an array of 2 items: the current state and the dispatch function.

In the project directory, you can run:

### `npm start`

In this example, we define a `Index` function that handles the state updates for our todo list. It takes the current state and an action object, and based on the action type, it performs the corresponding state update.

We initialize our state using the `useReducer` hook and pass in our `Index` function and an empty array as the initial state. The `items` array represents our list of todos.

We also use the `useState` hook to manage the input value for adding new todos. The `item` state holds the value of the input field, and we update it using the `setItem` function.

You can check detail explaination in https://www.kushalstudy.com/blog/usereducer-hook-in-react-explained-with-simple-examples/
