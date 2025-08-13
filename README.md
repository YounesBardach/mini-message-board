<p align="center">
  <img src="https://i.postimg.cc/tgNVcDyw/Chat-GPT-Image-Aug-13-2025-06-38-43-PM.png" alt="Mini Message Board Banner" width="900" />
</p>

<div align="center">

## Mini Message Board (Express + EJS)

A minimal message board to practice the Router–Controller–View pattern in
Express for The Odin Project.

[![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4-black?logo=express&logoColor=white)](https://expressjs.com/)
[![EJS](https://img.shields.io/badge/EJS-Templates-8BC34A)](https://ejs.co/)
[![express-ejs-layouts](https://img.shields.io/badge/express--ejs--layouts-Layouts-5C6BC0)](https://www.npmjs.com/package/express-ejs-layouts)
[![Data](https://img.shields.io/badge/Data-In--Memory-FF9800)](#)

</div>

---

## Table of Contents

- [About](#about)
- [Requirements](#requirements)
- [Quick start](#quick-start)
- [Scripts](#scripts)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Routes](#routes)
- [Views](#views)
- [Development notes](#development-notes)

---

## About

This app showcases a simple message board with server-rendered views. It follows
a small MVC-style separation using an Express router and controller module, with
EJS templates and a base layout.

- Assignment:
  [The Odin Project — NodeJS: Mini Message Board](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board)
- Storage: In-memory array (no database); messages reset on server restart

### Features

- List messages on the home page
- Create new messages via a form
- View individual message details
- Server-rendered EJS templates with a base layout

## Requirements

- Node.js 20+
- npm

## Quick start

```bash
# 1) Install dependencies
npm install

# 2) Start the dev server (requires nodemon installed or available via npx)
npm run dev
# or start without watch
npm start

# Server runs at:
# http://localhost:8080
```

Navigate to `/` for the message list and `/new` to add a message.

## Scripts

- `npm start` — start server
- `npm run dev` — start with watch mode (nodemon)

## Tech stack

- **Backend:** Node.js, Express
- **Views:** EJS with `express-ejs-layouts`
- **Styles:** Static CSS served from `public/`
- **Data:** In-memory array in the controller

## Project structure

```
.
├─ app.mjs
├─ controllers/
│  └─ indexController.mjs
├─ public/
│  └─ styles.css
├─ routes/
│  └─ indexRouter.mjs
└─ views/
   ├─ 404.ejs
   ├─ details.ejs
   ├─ form.ejs
   ├─ index.ejs
   └─ layout.ejs
```

## Routes

- `GET /` — render all messages
- `GET /new` — render the new-message form
- `POST /new` — create a new message; expects form fields: `user`, `text`
- `GET /details/:id` — render details for a message by array index
- All other routes render `views/404.ejs`

## Views

- `views/layout.ejs` — base layout used by all pages
- `views/index.ejs` — home page that lists messages
- `views/form.ejs` — form to submit a new message
- `views/details.ejs` — message details page
- `views/404.ejs` — not found view

## Development notes

- Port is set to `8080` in `app.mjs`.
- Body parsing for HTML forms is enabled with
  `express.urlencoded({ extended: true })`.
- Messages are defined and managed in `controllers/indexController.mjs` and are
  not persisted.
- Static assets are served from `public/`.
