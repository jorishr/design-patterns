# DESIGN PATTERNS: SINGLETON PATTERN

# Singleton
A singleton is a single object that is shared throughout the entire application wihtout having to recreate that object or losing data inside of it.
There is only one instance of this object.

# Potential problems
- Singleton are global to the entire app and with lots of other modules depending on it, which makes its hard to modify and refactor as the app grows.
- If multiple parts of the app access the singleton object at the same time this can lead to data being overwritten or incorreclty read.

# Example
- In the first example (before folder) two instance (firstUse and secondUse) are create from the same constructor class (Logger). The data the generate are independent from each other. Thus each log starts from zero and has no info about the other.

- In the second example (after folder )the singleton object is implemented. It is not the class itself that gets exported to the other modules, but one specific FROZEN instance of the Logger constructor.
