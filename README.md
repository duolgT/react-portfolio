# React Portfolio

A modern, responsive personal portfolio website built with **React.js** and **Vite** to showcase my frontend development skills, projects, experience, and contact information.

## 🚀 Live Demo

**Live Website:** https://react-portfolio-five-neon.vercel.app/

**GitHub Repository:** https://github.com/duolgT/react-portfolio

## 👨‍💻 About the Project

This portfolio was created to present my work as a junior frontend developer and provide an easy way for potential employers, clients, and collaborators to learn more about my skills and experience.

The website focuses on responsive design, clean user interfaces, reusable React components, and modern frontend development practices.

## ✨ Features

* Responsive design for desktop, tablet, and mobile devices
* Professional landing/hero section
* Animated typing effect
* Dark/light mode
* Mobile hamburger navigation
* Scroll reveal animations
* About Me section
* Skills section with technology icons
* Animated skills/proficiency indicators
* Projects showcase
* Reusable project cards
* GitHub and live-demo links
* Functional contact form
* Server-side email handling with Resend
* Vercel serverless API
* Environment variables for protecting API credentials

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Vite

### Tools & Libraries

* React Icons
* Git
* GitHub
* Vercel
* Resend

## 📂 Project Structure

```text
react-portfolio/
├── api/
│   └── send-email.js
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── ThemeToggle.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/duolgT/react-portfolio.git
```

Navigate into the project:

```bash
cd react-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 📧 Contact Form

The contact form uses **Resend** through a Vercel serverless API endpoint.

The Resend API key is stored securely as an environment variable and is **not included in the frontend code or GitHub repository**.

Create a `.env` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
```

For Vercel deployment, add the same variable through the project's **Environment Variables** settings.

## 🔐 Security

Sensitive credentials are stored using environment variables.

The following files should never be committed:

```text
.env
.env.local
```

The Resend API key is accessed server-side using:

```javascript
process.env.RESEND_API_KEY
```

## 📱 Responsive Design

The portfolio is designed to work across:

* Desktop computers
* Laptops
* Tablets
* Mobile phones

The navigation automatically adapts to smaller screens with a mobile hamburger menu.

## 📌 Future Improvements

Planned improvements include:

* Adding more real-world projects
* Improving accessibility
* Adding project filtering
* Adding a downloadable CV
* Adding testimonials
* Improving SEO
* Adding additional animations and micro-interactions

## 📬 Contact

If you would like to discuss a project, collaboration, or frontend development opportunity, you can contact me through the portfolio website.

**GitHub:** https://github.com/duolgT

**Email:** [duolkuach100@gmail.com]

## 📄 License

This project is created for personal portfolio and professional showcase purposes.

```
```
