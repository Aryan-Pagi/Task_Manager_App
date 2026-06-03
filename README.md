# TaskManager

A clean, responsive task management app built with React and Vite. TaskManager helps you create, organize, filter, and complete tasks with a simple UI, local persistence, and toast notifications.

## Features

- Add new tasks with title, description, due date, and priority
- Mark tasks as completed or pending
- Edit existing tasks
- Delete tasks with confirmation
- Search and filter tasks
- Sort tasks by newest, oldest, or priority
- Save tasks in `localStorage` so they persist after refresh
- Responsive layout for desktop and mobile

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - build the app for production
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Project Structure

```text
src/
  components/
    DeleteModal.jsx
    TaskList.jsx
    ...
  context/
    TaskContext.jsx
  pages/
    ...
  App.jsx
  main.jsx
```

## Notes

- Tasks are stored in the browser using `localStorage`.
- If you clear site data, the task list will reset.
- The UI is built with Tailwind utilities, so there is no separate custom CSS file for `TaskList`.

## License

No license has been added yet.
