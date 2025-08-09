# 💬 Chat App

A modern, real-time chat application built with React, featuring real-time messaging, user authentication, and a responsive design with dark mode support.

![Chat App](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)
![Socket.io](https://img.shields.io/badge/Socket.io-4.8.1-010101?style=for-the-badge&logo=socket.io)

## ✨ Features

- **🔐 User Authentication**: Secure sign-in/sign-up system with JWT tokens
- **💬 Real-time Messaging**: Instant message delivery using Socket.io
- **👥 Friend Management**: Add and manage friends for private conversations
- **🌙 Dark Mode**: Toggle between light and dark themes
- **📱 Responsive Design**: Mobile-first approach with responsive layout
- **🎨 Modern UI**: Clean and intuitive interface built with Material-UI and Tailwind CSS
- **⚡ Fast Performance**: Built with Vite for rapid development and optimized builds
- **🔄 State Management**: Redux Toolkit for efficient state management

## 🚀 Tech Stack

### Frontend
- **React 19.1.0** - Modern React with latest features
- **Vite 7.0.4** - Fast build tool and dev server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Material-UI 7.3.0** - React component library
- **Redux Toolkit 2.8.2** - State management
- **React Router 7.7.1** - Client-side routing

### Backend Integration
- **Socket.io Client 4.8.1** - Real-time communication
- **Axios 1.11.0** - HTTP client for API calls
- **JWT Authentication** - Secure user sessions

### Development Tools
- **ESLint 9.30.1** - Code linting and formatting
- **SWC** - Fast JavaScript/TypeScript compiler

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (Input, Button, etc.)
│   ├── Aside.jsx       # Sidebar navigation
│   ├── ChatRoom.jsx    # Main chat interface
│   ├── Chats.jsx       # Chat list component
│   └── Users.jsx       # User/friend list
├── features/           # Redux slices and business logic
│   ├── auth/           # Authentication state management
│   ├── chat box/       # Chat box state management
│   ├── chat friend/    # Selected friend state
│   └── friends/        # Friends list management
├── pages/              # Application pages
│   ├── Home.jsx        # Main chat dashboard
│   ├── SignIn.jsx      # Login page
│   ├── SignUp.jsx      # Registration page
│   └── ResetPassword.jsx # Password reset
├── socket/             # Socket.io configuration
├── style/              # Global styles and CSS
└── main.jsx           # Application entry point
```

## 🛠️ Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chat-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔧 Configuration

### Environment Variables
The application connects to a backend API. Ensure the following endpoints are accessible:
- Authentication: `https://chat-app-backend-by-ai-production.up.railway.app/api/auth`
- Friends API: `https://chat-app-backend-by-ai-production.up.railway.app/api/friends`
- Socket.io Server: `https://chat-app-backend-by-ai-production.up.railway.app`

### Vite Configuration
The project uses Vite with React SWC plugin and Tailwind CSS integration for optimal performance.

## 🎯 Key Features Explained

### Real-time Messaging
- Uses Socket.io for instant message delivery
- Messages are displayed in real-time without page refresh
- Supports private conversations between friends

### User Authentication
- JWT-based authentication system
- Secure login/logout functionality
- User session management with Redux

### Responsive Design
- Mobile-first approach with responsive breakpoints
- Optimized for both desktop and mobile devices
- Touch-friendly interface elements

### Dark Mode
- Toggle between light and dark themes
- Persistent theme preference
- Smooth transitions between themes

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting Platforms
- **Vercel** - Optimized for React applications
- **Netlify** - Easy deployment with Git integration
- **GitHub Pages** - Free hosting for open-source projects
- **Firebase Hosting** - Google's hosting solution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Vite Team** - For the fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **Material-UI** - For the beautiful React components
- **Socket.io** - For real-time communication capabilities

## 📞 Support

If you have any questions or need help with the application, please:

- Open an issue on GitHub
- Check the documentation
- Contact the development team

---

**Made with ❤️ using React and modern web technologies**
