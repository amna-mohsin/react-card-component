# React Profile Card Component

### A simple, reusable React component for displaying user profile information, featuring a profile picture, name, description, and a follow button. Built with Vite.js.

## Overview

This project provides a standalone and easily configurable `Card` component for displaying a user's profile summary. It's a great starting point for building lists of users, team directories, or contact cards in any React application.

### Key Features:
* **Reusable:** Configure with simple props (`profilePicUrl`, `name`, `description`).
* **Actionable:** Includes a functional "Follow" button placeholder.
* **Modern Setup:** Built using Vite for fast development and bundling.

## 📄 File Structure

```
src/
├── components/
│   ├── Card.jsx      # The main React component
│   └── Card.css      # Component-specific styles
└── App.jsx           # Example usage of the Card component
└── main.jsx          # Root entry point
```


## Installation and Setup

Follow these steps to get a local copy of the project running.

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm) installed on your system.

### 1. Clone the repository

```bash
git clone [https://github.com/amna-mohsin/react-card-component.git](https://github.com/amna-mohsin/react-card-component.git)
cd react-profile-card-component
````

### 2\. Install dependencies

```bash
npm install 
# or 
yarn install
```

### 3\. Start the development server

```bash
npm run dev
# or
yarn dev
```

The application will typically be available at `http://localhost:5173`.

##  Component Usage

The `Card` component is designed to be highly reusable by accepting data through props.

### `Card.jsx` Component Definition:

```jsx
import React from 'react';
import './Card.css';

const Card = ({ profilePicUrl, name, description }) => {
    // ... component logic here
};

export default Card;
```

### Example Usage in `App.jsx`:

```jsx
import React from 'react';
import Card from './components/Card';

const App = () => {
    return (
        <div className="card-grid">
            <Card
                profilePicUrl="[URL_TO_IMAGE]"
                name="Jane Doe"
                description="Frontend Developer and React enthusiast."
            />
            <Card
                profilePicUrl="[URL_TO_ANOTHER_IMAGE]"
                name="John Smith"
                description="UX Designer focusing on clean interfaces."
            />
        </div>
    );
};

export default App;
```

## **Available Scripts**

In the project directory, you can run:

* **`npm run dev`**: Runs the app in development mode.
* **`npm run build`**: Builds the app for production into `dist/`.
* **`npm run preview`**: Preview the production build locally.

For more details, see the [Vite documentation](https://vitejs.dev/guide/).

---

## **Learn More**

* [React Documentation](https://reactjs.org/)
* [Vite Documentation](https://vitejs.dev/)

---

## **Owner**

* Developed and maintained by **Amna Mohsin**
* For collaborations or inquiries, connect on [LinkedIn](https://www.linkedin.com/in/amna-m98/)

---

## **License**

This project is **open-source** and free to use.

---

