# [College Website (Academy of Technology)](https://aotedu.vercel.app/)


Welcome to the official repository for the Academy of Technology's college website. This project is developed as part of a college-level website design challenge. The website provides comprehensive information about the college, including events, notices, departments, and more.

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Contributing](#contributing)
7. [License](#license)

## Tech Stack

This project utilizes the following technologies:

- **Next.js**: A React framework for building server-side rendered and static web applications.
- **MongoDB**: A NoSQL database for storing application data.
- **Node.js**: A JavaScript runtime for executing server-side code.
- **Express.js**: A web application framework for Node.js.
- **jsonwebtoken**: A library for creating and verifying JSON Web Tokens (JWT) for authentication.
- **Tailwind CSS**: A utility-first CSS framework for designing responsive user interfaces.
- **bcrypt**: A library for hashing passwords.
- **Cloudinary**: A cloud-based service for managing images and videos.
- **cookie-parser**: Middleware for parsing cookies.
- **GitHub**: Version control and collaboration platform.
- **nextjs-toploader**: A loading indicator component for Next.js.


## Features

The website includes the following features:

1. **Admin Authentication**: Secure login system for admin users.
2. **Admin Dashboard**: Interface for admins to manage website content.
3. **Create Event**: Admins can create new events.
4. **Edit Event**: Admins can edit existing events.
5. **Responsive UI**: The website is fully responsive and works on all devices.
6. **Current Notice Line**: Displays the latest notices for students and staff.
7. **About Section**: Information about the college.
8. **Upcoming Event Section**: Lists future events at the college.
9. **Highlights Section**: Showcases important achievements and news.
10. **Departments Section**: Information about various departments.
11. **FAQ Section**: Frequently asked questions and their answers.
12. **Syllabus Option**: Provides syllabi for all departments.
13. **Contact Option**: Contact form and details for reaching out to the college.


## Screenshots
### Home : 
[![Home Page](https://github.com/Soumojitshome2023/college-website-nextjs/blob/master/Readmeassets/HomePage.png)]()


## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/Soumojitshome2023/college-website-nextjs
   cd client
   cd server
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables. Create a `.env` file in the root directory and add the following variables:
    * Client :
   ```
    NEXT_PUBLIC_BASEURL= http://localhost:3000
    NEXT_PUBLIC_SERVERURL= http://localhost:4000
    NEXT_PUBLIC_CLOUDNAME=
    NEXT_PUBLIC_UPLOAD_PRESET=
    NEXT_PUBLIC_CLOUD_FOLDER=college_website
   ```
    * Server :
    ```
    MONGO_URI=
    FRONTEND_URI=http://localhost:3000
    REFRESH_TOKEN_KEY=
    ACCESS_TOKEN_KEY=
    PORT=4000
    ```

4. Run the development server:
   ```sh
   npm run dev
   ```

## Usage

To use the website, navigate to `http://localhost:3000` in your browser. Admin users can log in to access the admin dashboard and manage content.

## Folder Structure

The project directory is structured as follows:

```
/college-website
├── public
│   └── images
├── src
│   ├── components
│   ├── pages
│   ├── styles
│   ├── utils
│   └── middleware
├── .env.local
├── next.config.js
├── package.json
├── README.md
└── tailwind.config.js
```



---

# Thank You :)