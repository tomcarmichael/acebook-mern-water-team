# Makers Academy Acebook test (AKA Farcebook)

## The Brief

The second of our team Engineering Projects as part of the Makers Academy software development bootcamp, over two weeks our team of 5 was tasked with understanding a [pre existing codebase](https://github.com/makersacademy/acebook-mern-template), using the MERN stack. MongoDB, React, Express and Cypress were all brand new technologies to us at the start of this project, and much of the time and energy over the two weeks went into learning these, and how they had been put into practice in the existing codebase.

From the Makers Academy brief:

>In this project, you are tasked with working on an existing application. A significant part of the challenge will be to familiarise yourself with the codebase you've inherited, as you work to **improve and extend** it.

## Architecture

This application is comprised of two distinct pieces.

- A backend API built with Express
- A front end built with React

The React front end sends HTTP requests to the backend API and receives JSON in response body, rather than a whole page of HTML.

For example, the React front end would send this request to retrieve the entire `Post` collection.

```
GET "/posts"
```

And the body of the response would look like this.

```
{
    "posts": [
        {
            "_id": "62f8ef0e6c1ffcf74cbbb181",
            "message": "Hello, this is my first Acebook post!",
            "__v": 0
        },
        {
            "_id": "62f8ef366c1ffcf74cbbb188",
            "message": "Welcome to Acebook! Have an Acetime :)",
            "__v": 0
        },
        {
            "_id": "62f8f08af1cffef85a7426ae",
            "message": "Thank you :D",
            "__v": 0
        }
    ]
}
```

Here's a diagram of the above
<br>
<br>
![a diagram of the MERN stack](./diagrams/mern_stack.png)
<br>
<br>

Once received by the React FE, the JSON in the response body is used to render a list of posts on the page.

![response body mapped onto a page](./diagrams/response_parsing.png)

This architectural pattern is quite popular because it allows teams to build multiple front ends, all of which use the same backend API. You could, for example, go on to build a mobile app without needing to create another backend API.
## Authentication

Up until now, if you've implemented authentication, it will likely have been done using sessions - this is a useful point of comparison but, if you haven't implemented authentication yet, that's not going to impede you right now.

Here's the authentication flow for this application

1. A registered user submits their email address and password via the React front end.
2. The Express backend receives the data and tries to find a user in the DB with the same email address.
3. If a user is found, the password in the database is compared to the password that was submitted.
4. If the passwords match, a JSON Web Token is generated and returned, as part of the response.
5. The React front end receives the token and holds on to it.
6. Every request to `"/posts"` must include a valid token (which is checked by the backend).
7. When the user logs out, the front end discards the token.

![authentication flow diagram](./diagrams/auth_flow.png)

### What is a JSON Web Token?

A JSON Web Token, or JWT, is a token that comprises three parts

- A header, which contains information about how the token was generated.
- A signature, which is used to verify the token.
- A payload, which you can use to store some **non-sensitive data** like a user id. Note that the payload is not secure and can be decoded very easily.

The signature is created using a 'secret', which must be kept private (i.e. not put on GitHub) otherwise nefarious internet users could start to issue tokens for your application.

Here, we've used an environment variable called `JWT_SECRET`, which you'll see used in the commands to start the application and run the tests (below). You can change the value of that environment variable to anything you like.
## Card wall

Our [team trello board shows](https://trello.com/b/SwWHBRbO/farcebook) the tickets we worked through, and what was still in our backlog at the end of the final sprint.

## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### Set up your project

1. Fork this repository
2. Rename your fork to `acebook-<team name>`
3. Clone your fork to your local machine
4. Install Node.js dependencies for both FE and BE (API)
   ```
   ; cd api
   ; npm install
   ; cd ../frontend
   ; npm install
   ```
5. Install an ESLint plugin for your editor. For example: [`linter-eslint`](https://github.com/AtomLinter/linter-eslint) for Atom.
6. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
   *Note:* If you see a message that says `If you need to have mongodb-community@5.0 first in your PATH, run:`, follow the instruction. Restart your terminal after this.
7. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```

### Start

1. Start the server

  **Note the use of an environment variable for the JWT secret**

   ```
   ; cd api
   ; JWT_SECRET=SUPER_SECRET npm start
   ```
2. Start the front end

  In a new terminal session...

  ```
  ; cd frontend
  ; npm start
  ```

You should now be able to open your browser and go to `http://localhost:3000/signup` to create a new user.

Then, after signing up, you should be able to log in by going to `http://localhost:3000/login`.

After logging in, you won't see much but you can create posts using PostMan and they should then show up in the browser if you refresh the page.

### Testing


#### The Backend (API)

**Note the use of an environment variable for the JWT secret**

  Start the server in test mode (so that it connects to the test DB)

  ```
  ; cd api
  ; JWT_SECRET=SUPER_SECRET npm run start:test
  ```

  Then run the tests in a new terminal session

  ```
  ; cd api
  ; JWT_SECRET=SUPER_SECRET npm run test
  ```

#### The frontend (React)

**Note the use of an environment variable for the JWT secret**

  Start the server in test mode (so that it connects to the test DB)

  ```
  ; cd api
  ; JWT_SECRET=SUPER_SECRET npm run start:test
  ```

  Then start the front end in a new terminal session

  ```
  ; cd frontend
  ; JWT_SECRET=SUPER_SECRET npm start
  ```

  Then run the tests in a new terminal session

  ```
  ; cd frontend
  ; JWT_SECRET=SUPER_SECRET npm run test
  ```

## MongoDB Connection Errors?

Some people occasionally experience MongoDB connection errors when running the tests or trying to use the application. Here are some tips which might help resolve such issues.

- Check that MongoDB is installed using `mongo --version`
- Check that it's running using `brew services list`

If you have issues that are not resolved by these tips, please reach out to a coach and, once the issue is resolved, we can add a new tip!


<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Facebook-mern-template&prefill_File=README.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Facebook-mern-template&prefill_File=README.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Facebook-mern-template&prefill_File=README.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Facebook-mern-template&prefill_File=README.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Facebook-mern-template&prefill_File=README.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
