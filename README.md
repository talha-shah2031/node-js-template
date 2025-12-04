# Node.js TypeScript Boilerplate

A production-ready Node.js boilerplate with TypeScript, Express, and best practices built-in. This template provides a solid foundation for building scalable REST APIs with a clean architecture.

## 🚀 Features

- **TypeScript** - Type safety and modern JavaScript features
- **Express 5** - Fast, minimalist web framework
- **Modular Architecture** - Clean separation of concerns with modules pattern
- **Authentication Ready** - JWT auth module structure included
- **Database Integration** - Prisma ORM setup with migrations support
- **Security** - Helmet for HTTP headers, CORS configured
- **Testing** - Jest and Supertest configured
- **Docker Support** - Dockerfile included for containerization
- **Development Tools** - Hot reload with nodemon, environment variables with dotenv
- **Error Handling** - Centralized error middleware
- **Production Ready** - Optimized build configuration

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker (optional)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/talha-shah2031/node-js-template.git
cd my-node-ts-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run database migrations (if using Prisma):
```bash
npx prisma migrate dev
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```
The server will start with hot-reload enabled at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

### Using Docker
```bash
docker build -t my-node-ts-app .
docker run -p 3000:3000 my-node-ts-app
```

## 🧪 Testing

```bash
npm test
```

## 📁 Project Structure

```
my-node-ts-app/
├── src/
│   ├── common/              # Shared utilities
│   │   ├── decorators/      # Custom decorators
│   │   ├── filters/         # Exception filters
│   │   ├── interceptors/    # Request/response interceptors
│   │   ├── middleware/      # Custom middleware
│   │   └── utils/           # Helper functions
│   ├── config/              # Configuration files
│   ├── database/            # Database related files
│   │   ├── entities/        # Database models
│   │   ├── migrations/      # Database migrations
│   │   └── prismaClient.ts  # Prisma client instance
│   ├── modules/             # Feature modules
│   │   ├── auth/            # Authentication module
│   │   └── users/           # Users module
│   ├── routes/              # Route definitions
│   ├── app.ts               # Express app setup
│   └── server.ts            # Server entry point
├── tests/                   # Test files
├── .env                     # Environment variables
├── Dockerfile               # Docker configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## 🏗️ Module Structure

Each module follows a consistent pattern:

```
module-name/
├── dto/                     # Data Transfer Objects
├── module.controller.ts     # Route handlers
├── module.service.ts        # Business logic
├── module.repository.ts     # Data access layer (optional)
└── module.guard.ts          # Route guards (optional)
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET=your-secret-key
```

### TypeScript Configuration

The `tsconfig.json` is optimized for production:
- Strict mode enabled
- No source maps in production builds
- Comments removed from compiled code
- CommonJS module system

## 🔐 Security Features

- Helmet.js for securing HTTP headers
- CORS configured
- Environment variable validation
- JWT authentication structure
- Input validation with DTOs

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm test` | Run test suite |
| `npm run copy:assets` | Copy static assets to dist folder |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 🙏 Acknowledgments

- Express.js team for the amazing framework
- TypeScript team for type safety
- Prisma team for the excellent ORM

---

**Happy Coding!** 🎉

For questions or issues, please open an issue on GitHub.

