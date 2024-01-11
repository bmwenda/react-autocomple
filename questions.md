1. What is the difference between Component and PureComponent? Give an example where it might break my app.
    - When state changes, Component does not check whether data has changed or not before re-rendering. However, PureComponent does a shallow compare between current states and the new data when state changes.
    - While PureComponent may be the better option to use for the performance gain, it may lead to unexpected behaviour especially if the structure of our data is too deeply nested. This is because PureComponent does a shallow compare so we need to carefully think about how data is structured.
2. Context + ShouldComponentUpdate might be dangerous. Why is that?
    - This is because they both have the ability to update data, which causes some sort of synchronisation issue. For example, Context may update state that is supposed to propagate through the application. However, this change is not always immediate, or at least we have handle when we want this to happen. This means that ShouldComponentUpdate will not always be in sync with the state we expect to have in different components.
3. Describe 3 ways to pass information from a component to its PARENT.
    - Using a prop - the parent defines a function and it to the child via a prop. The child can then use that function to pass whatever information back to the parent.
    - Using contexts - Since contexts can be accessed by any component that needs it, a child component can trigger a change by invoking a function provided by the context which would update the state of the parent component
    - composition
4. Give 2 ways to prevent components from re-rendering.
    - when using a hook like useEffect, remember to pass dependencies as an argument, like `useEffect(() => {}, [arg1, arg2])` where arg1 and arg2 are values that would cause state to change. Without this, we might have unnecessary and possibly infinite re-renders
    - A common option for optimisation is the `useMemo` hook that uses memoization which prevents re-rendering when data has not changed
5. What is a fragment and why do we need it? Give an example where it might break my app.
    - A fragment is wrapper for a group of HTML tags. React requires that a component must return a single element or component, but sometimes we may not have a good semantic HTML tag to return for a component, e.g a generic `<div>`. A fragment is a good solution for this.
    - Some styling may rely on the fact that a component returns one element, so some css definitions may not work as expected
6. Give 3 examples of the HOC pattern.
    - implementing authentication to an app where each component can check if the user is authenticated
    - implementing a message component where a child can use it to display a certain notification
    - passing information from an external library that may be needed in various components
7. What's the difference in handling exceptions in promises, callbacks and async...await?
    - in callbacks, you have to return the exeption through the provided error argument. Typically, a callback function should always make a provision for this
    - promises use chaining to handle exceptions, specifically using the `catch` method. You handle the error inside this block
    - async...await is similar to promises only that it uses a try - catch block. The happy path is specified in the `try` block and the exception is handled in the `catch` block.
8. How many arguments does setState take and why is it async.
    - setState takes two arguments: a value or object to store data and an opional function
    - It is async to avoid the possibility of re-renders. This is because async has to complete before other calls can be made.
9. List the steps needed to migrate a Class to Function Component.
    - convert components defined using classes to functional components
    - introduce hooks to handle state because definitions like `this.setState` would no longer be valid
    - check for other opportunities to use hooks now that functional components are being used
10. List a few ways styles can be used with components.
    - Inline styles, which are the most basic where you define the style right on the element using a `style` tag
    - CSS modules which is common in MVC apps where styles are declared on different files and they can be imported like any other file
    - Styled components, for example as commonly used in libraries like MateriaUI
11. How to render an HTML string coming from the server.
    - To do this, we would need to support server side rendering.
    - Some libraries can support server side rendering with some few tweaks. Hence we would need to explore if the library we are using can support this or whether we need to find other options.
