# Home Accessories Website

A full-stack web application for a home accessories business specializing in door hardware including locks, handles, hinges, door closers, and security solutions.

## Features

- **Frontend**: React + Vite with Tailwind CSS
- **Backend**: Node.js + Express with Resend email integration
- **AI Chat**: OpenRouter-powered AI assistant for product inquiries
- **Contact Form**: Email functionality using Resend API
- **Product Showcase**: Display of door hardware products
- **Responsive Design**: Mobile-friendly interface

## Project Structure

```
├── backend/          # Node.js/Express server
│   ├── server.js     # Main server file
│   ├── package.json  # Backend dependencies
│   └── .env.example  # Environment variables template
├── frontend/         # React frontend
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
└── README.md         # This file
```

## Deployment

- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Render
- **Email**: Using Resend API for contact form emails

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Setup

1. Copy `.env.example` to `.env` in the backend directory
2. Set up the following environment variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `EMAIL_USER`: Your verified email address in Resend
   - `OPENROUTER_API_KEY`: Your OpenRouter API key

### Running Locally

1. Start the backend:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

The frontend will run on `http://localhost:5173` and the backend on `http://localhost:3002`.

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express, Resend
- **AI**: OpenRouter API
- **Deployment**: Vercel (frontend), Render (backend)
