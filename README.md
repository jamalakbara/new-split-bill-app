# Split Bill App

A React Native split bill app built with Supabase and Clerk authentication. Features pixel-perfect design implementation with real-time bill splitting and payment tracking.

## 🚀 Features

- **Bill Splitting**: Create and split bills with friends, groups, and custom amounts
- **Real-time Sync**: Live updates and notifications for bill activities
- **Social Features**: Add friends, create groups, and track shared expenses
- **Payment Tracking**: Monitor outstanding balances and settlement history
- **Analytics**: View spending insights and trends
- **Pixel-Perfect Design**: 1:1 implementation with design specifications

## 🛠 Technology Stack

- **Frontend**: React Native with Expo
- **Backend**: Supabase (PostgreSQL, Real-time, Storage)
- **Authentication**: Clerk
- **State Management**: Redux Toolkit
- **Navigation**: React Navigation 6
- **Design**: Black and white theme with Inter font

## 📱 Screens

### Core Features
- **Authentication**: Login, Sign Up, Social Auth
- **Dashboard**: Overview of recent bills and activities
- **Create Bill**: New bill creation with split options
- **Bill Preview**: Review and confirm bill details
- **Friend Profiles**: View friend information and shared history

### Advanced Features
- **Groups**: Create and manage expense groups
- **Analytics**: Spending insights and trends
- **Settings**: User preferences and account management
- **Notifications**: Real-time updates and payment reminders

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Background**: Light (#F8F9FA), Dark (#1A1A1A)
- **Gray Scale**: Various shades for hierarchy and contrast

### Typography
- **Font Family**: Inter
- **Weights**: 400, 500, 600, 700, 800
- **Consistent**: Throughout the application

## 📦 Installation

1. Clone the repository
   ```bash
   git clone https://github.com/jamalakbara/new-split-bill-app.git
   cd new-split-bill-app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   # Add your Supabase and Clerk credentials
   ```

4. Start the development server
   ```bash
   npx expo start
   ```

## 🔧 Configuration

### Environment Variables
Create a `.env` file with the following variables:

```
# Clerk Authentication
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### Setup Services

1. **Clerk Setup**
   - Create a Clerk account at [clerk.com](https://clerk.com)
   - Create a new application
   - Configure social providers (Google, Apple)
   - Copy publishable and secret keys

2. **Supabase Setup**
   - Create a Supabase account at [supabase.com](https://supabase.com)
   - Create a new project
   - Set up database schema (see documentation)
   - Configure authentication providers
   - Copy URL and API keys

## 📋 Project Structure

```
new-split-bill-app/
├── src/
│   ├── components/        # Reusable components
│   ├── screens/          # Screen components
│   ├── navigation/       # Navigation configuration
│   ├── services/         # API and external services
│   ├── store/           # Redux store and reducers
│   ├── utils/           # Utility functions
│   ├── types/           # TypeScript type definitions
│   └── constants/       # App constants and design tokens
├── assets/              # Images, fonts, and assets
├── design/              # Design files and specifications
└── docs/               # Project documentation
```

## 🚀 Development Workflow

### Branching Strategy
- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: Feature development
- `hotfix/*`: Critical bug fixes

### Commit Convention
```
type(scope): description

feat: new feature
fix: bug fix
docs: documentation
style: formatting
refactor: code refactoring
test: tests
chore: maintenance
```

## 📚 Documentation

- [Design Analysis](./DESIGN_ANALYSIS.md) - Comprehensive design system analysis
- [Product Requirements](./PRD.md) - Product requirements document
- [Task Breakdown](./TASK_BREAKDOWN.md) - Detailed development task breakdown

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run linting
npm run lint

# Run type checking
npm run type-check
```

## 📱 Platform Support

- **iOS**: 13.0+
- **Android**: API Level 21+
- **Expo Go**: Fully supported

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **[Akbar](https://github.com/jamalakbara)** - Developer & Designer

## 🙏 Acknowledgments

- Design specifications from `/design` directory
- Built with React Native, Supabase, and Clerk
- Inspired by modern bill-splitting applications

---

For more information, check out the [project documentation](./docs/) or open an [issue](https://github.com/jamalakbara/new-split-bill-app/issues).