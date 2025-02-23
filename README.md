# Blog Post Management App

This is a Next.js application for managing blog posts using the JSONPlaceholder API.

## Demo

You can access the live demo of the application via the following link:

[Anydesk Blog](https://anydesk-blog.vercel.app/)

## Technology Stack

- Next.js (Pages Router)
- TypeScript
- Zustand (State Management)
- Styled Components
- Jest and React Testing Library

## Project Structure

- `src/pages`: Next.js pages (Home, Post details, Create post, Edit post)
- `src/components`: React components (Post list, Post details, Create, Edit, Delete, etc.)
- `src/services`: API service (Fetch posts, and simulate Create, Edit, Delete)
- `src/store`: Zustand store (State management for the app)
- `src/styles`: Global styles and theme

## Setup and Running the Project

1. Clone the repository: `git clone git@github.com:HosseiniSanaz/anydesk-blog.git`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Running Tests

Run `npm test` to execute the test suite.

## Features

- View all posts (Home page)
- View individual post details (Post details page)
- Create new posts (simulated)
- Edit existing posts (simulated)
- Delete posts (simulated)

## Error Handling

The application implements error handling for API interactions and displays appropriate feedback to the user during loading, success, and error states.

## Responsive Design

The application is styled using styled-components and is responsive across different device sizes.

## Testing

The project uses Jest for testing and React Testing Library for rendering components.
