# Blog Post Management App

This is a Next.js application for managing blog posts using the JSONPlaceholder API.

## Demo

You can access the live demo of the application via the following link:

[Anydesk Blog](https://anydesk-blog.vercel.app/)

## Features

### Core Functionality
- View all posts with pagination
- View individual post details
- Create new posts (simulated)
- Edit existing posts (simulated)
- Delete posts (simulated)
- Toast notifications for user feedback

### Technical Features
- Server-side rendering (SSR)
- TypeScript for type safety
- Global state management with Zustand
- Styled-components for CSS-in-JS
- Responsive design for all devices
- Comprehensive error handling
- Loading states and animations

## Project Structure

- `src/pages`: Next.js pages (Home, Post details, Create post, Edit post)
- `src/components`: React components (Post list, Post details, Create, Edit, Delete, etc.)
- `src/services`: API service (Fetch posts, and simulate Create, Edit, Delete)
- `src/store`: Zustand store (State management for the app)
- `src/styles`: Global styles and theme
- `src/hooks`: Define shared hooks like useToast
- `src/types`: Define shared types

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:HosseiniSanaz/anydesk-blog.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run test suite
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## Error Handling

The application implements error handling for API interactions and displays appropriate feedback to the user during loading, success, and error states.

## Responsive Design

The application is styled using styled-components and is responsive across different device sizes.

## Testing

### Unit Tests
- Component testing with Jest and React Testing Library
- Store testing for Zustand state management
- API service mocking

## Performance Optimization

- Image optimization with Next.js Image component
- Memoization of expensive computations
