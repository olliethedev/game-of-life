# Read Me

See demo at [https://game-of-life-gamma-ollie.vercel.app/](https://game-of-life-gamma-ollie.vercel.app/)

This project implements Game of Life using ReactJS, NextJS, and TailwindCSS.

## Development Setup
To get started with development, you'll need Node.js installed on your machine. After cloning the repository, install the dependencies:
```npm install```

Then, you can start the development server by running:
```npm run dev```
Open http://localhost:3000 with your browser to see the result. You can start editing the page by modifying src/app/page.tsx. The page auto-updates as you edit the file.

## Core Files Overview
This project is structured around several key directories and files, each serving a specific purpose in the development of the Game of Life. Below is a table summarizing these core components:
| dir / path | description |
| --------------------------------- | --------------------------------------------------------------------------- |
| src/components/ | Contains React components, including the main GameOfLife and Grid components. |
| src/hooks/ | Houses custom React hooks, such as useGameHooks for managing game state. |
| src/controllers/game-controller.ts | Includes logic for calculating the next state of the game grid. |
| src/app/page.tsx | Main entry point for the application's UI. |
| src/app/layout.tsx | Defines the root layout including global styles and metadata. |

## Testing
This project uses Jest and React Testing Library for testing. To run the tests and see coverage, execute:
```npm run test```

## Deployment
The project is ready to be deployed on platforms like Vercel, which offers seamless integration with Next.js applications. Check the Next.js deployment documentation for more details.

