# DESIGN PATTERNS: FACADE PATTERN

The idea is that you create a facade between the complex app logic and the business logic so that the code can easily be changed and refactored in the future.

This is espcially usefull for API code. You seperate the 'ugly' code from, for example, the fetch API and put it into a helper function. If later you want to switch from FETCH API to AXIOS for example, that can be done by simply replacing that helper function.