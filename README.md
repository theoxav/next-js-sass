# Notes Application

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

This application allows users to create, read, update, and delete notes. It includes authentication via Google and GitHub using NextAuth, and server actions to interact with the database.

## Technologies Used

- [TypeScript](https://www.typescriptlang.org) - Typed JavaScript

- [Next.js](https://nextjs.org) - React framework for server-rendered applications
- [NextAuth](https://next-auth.js.org) - Authentication for Next.js

- [Prisma](https://www.prisma.io) - ORM for database management
- [SQLite](https://www.sqlite.org) - Lightweight database engine

- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS framework
- [shadcdn/ui](https://shadcdn.com) - UI components library

## Authentication

The application uses NextAuth for authentication, supporting login via Google and GitHub. This ensures secure and easy access for users.

## Server Actions

The application allows users to create, read, update, and delete notes. Server actions are implemented to retrieve, update, and create user information in the database. Additionally, server actions are used to create notes in the database. This allows for efficient data management and interaction with the backend.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
