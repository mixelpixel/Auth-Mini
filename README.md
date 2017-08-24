# Auth Mini
Topics:
  * Express Middleware - OKAY √
  * Sessions - OKAY √
  * Passwords - OKAY √
  * Authentication - OKAY √

## Description
 - The goal of this project is to write middleware for the Mongo II: StackQuery project that you completed earlier. - OKAY √
## Running the Project
- Run `npm install` to download the dependencies. - DONE √
```console
$  npm install
    npm notice created a lockfile as package-lock.json. You should commit this file.
    npm WARN eslint-config-airbnb@14.1.0 requires a peer of eslint-plugin-jsx-a11y@^3.0.2 || ^4.0.0 but none was in
    stalled.
    npm WARN eslint-config-airbnb@14.1.0 requires a peer of eslint-plugin-react@^6.9.0 but none was installed.
    npm WARN ls-mongo-ii@0.0.1 No repository field.

    added 331 packages in 22.834s
```

- Run `npm test` to run the tests. If you'd like, you can run `npm run watch`
  to automatically re-reun the tests when you make modifications. - OKAY √

## Instructions

The route handlers for `/accepted-answer/:soID` and `/top-answer/:soID` both find the post with the associated `soID`. They then go on to do different things with that post. To consolidate this logic, write a piece of local middleware that finds the post with the given `soID`, and makes it accessible to both these routes. The middleware should respond with an appropriate status code and error if no such post can be found. Run the tests to ensure your middleware works.
