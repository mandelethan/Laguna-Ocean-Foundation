Tidepool explorer website for Laguna Ocean Foundation.

To run: 
clone the repo
Have NodeJS and npm installed
CD into "tidepool-explorer"
Run "npm install"
Run "npm run dev" to run the website locally
Since the website is deployed on Vercel, run "npm run build" to see if there's any compile errors before pushing to main

Tech stack: NextJS, Tailwind CSS, Typescript, and ShadCN (component library)

Deployed on Vercel: https://laguna-ocean-foundation.vercel.app/

Project structure:
Uses React's file-based routing for app navigation

Each folder in the app directory represents a page with app/page.tsx being the home page and app/layout.tsx being the layout for all pages

Components folder has the reusable components. The ui folder is created by ShadCN has the imported components

Public folder has all of the images used
