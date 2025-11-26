# Hatsumai (Frontend Client)

The responsive web interface for **Hatsumai**, an AI-powered project generator designed to help Computer Science students discover and plan portfolio-worthy projects.

Note: This repository contains the Frontend logic. For the Backend API, Database, and Docker configuration, please visit the [Hatsumai Backend Repository](https://github.com/CHamilton02/hatsumai-BE).

## 🚀 Key Features

- **Project Generation UI:** Intuitive forms to capture user interests, difficulty levels, and topics.

- **Dynamic Content Display:** Renders AI-generated project titles, descriptions, and actionable tips in a clean layout.

- **Responsive Design:** Built with SCSS to ensure usability across different screen sizes.

- **Type-Safe Architecture:** Leverages TypeScript for robust component logic and API integration.

## 🛠️ Tech Stack

- **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API)

- **Build Tool:** [Vite](https://vite.dev/)

- **Language:** [TypeScript](https://www.typescriptlang.org/)

- **Styling:** SCSS / SASS

- **Routing:** Vue Router

## 📂 Project Structure

```Text
src/
├── assets/         # Static assets (images, fonts)
├── components/     # Reusable Vue components (Forms, Cards, etc.)
├── router/         # Vue Router configuration
├── views/          # Main page views
├── App.vue         # Root component
└── main.ts         # Application entry point
```


## 💻 Local Development Setup

Follow these steps to run the frontend locally:

1. Prerequisites
   
Ensure you have Node.js installed on your machine.

4. Install Dependencies

```Bash
npm install
```

3. Start Development Server

```Bash
npm run dev
```

The application will be available at http://localhost:5173.

4. Build for Production

To create a production-ready build:

```Basg
npm run build
```

## 🔗 Related Repositories

- **Backend API:** [CHamilton02/hatsumai-BE](https://github.com/CHamilton02/hatsumai-BE) - Express, PostgreSQL, Knex.js, and GPT-4o integration.

## 📝 License

This project is open source and available under the MIT License.
