# React Auth Project

This is a simple authentication project built with React. It includes user authentication features such as sign-up and sign-in, utilizing Context API for state management and JSON Server as the backend.

## Features

- **Home Page**: Accessible to authenticated users.
- **Sign-Up Page**: Allows new users to register.
- **Sign-In Page**: Enables existing users to log in.
- **Context API for Auth State**: Ensures authentication status is available across the app.
- **JSON Server as Backend**: Simulates a real database for user authentication.

## Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/cHANGTEEZY/react-amnil-auth.git
   cd react-amnil-auth
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start JSON Server (Backend):**
   ```sh
   json-server --watch db.json
   ```
4. **Run the React App:**
   ```sh
   npm start
   ```

## Project Structure

```
react-amnil-auth/
│-- src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── SignUp.js
│   │   ├── SignIn.js
│   ├── App.js
│   ├── index.js
│-- db.json (Mock database for JSON Server)
│-- package.json
│-- README.md
```

## API Endpoints (JSON Server)

- `GET /users` - Fetch all users
- `POST /users` - Register a new user

## Contributing

Feel free to fork this repository and submit pull requests for improvements!

## License

This project is open-source and available under the [MIT License](LICENSE).
