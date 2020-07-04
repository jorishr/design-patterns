# Javascript design pattern: facade pattern
The idea is that you create a facade that abstracts some more complex app logic. The facade function should be easy to understand and relate to the business logic of your application. For example, get user data from a database or initiate a payment process. The actual complex implementation methods are 'hidden' in a seperate function. This allows you to more easily change and refactor implementation methods in the future without making major disruptions to your code structure.

The example in this repo has a [before](before.js) and [after](after.js) state whereby the a facade is build to hide the Fetch API implementation into a helper function. In a future update it is now relatively easy to swap the Fetch API for the Axios library, for example.
