# My Portfolio Showcase

A portfolio website documenting my journey through Computer Science studies at PXL University College. This project showcases a collection of seminars, hackathons, and personal projects that highlight my growth and experiences in the field.

## Live link

An azure hosted version of the webpage is available at https://i-talent-jef-dello-hkczakezfme6cgfj.westeurope-01.azurewebsites.net/

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI (Radix UI primitives)
- **Icons**: Lucide React
- **Deployment**: Docker + Nginx for production

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Docker Desktop (for containerized deployment)

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Docker Deployment

For production deployment using Docker:

#### Windows (PowerShell)
- Start the application:
  ```powershell
  .\start.bat
  ```
- Stop the application:
  ```powershell
  .\stop.bat
  ```

#### Unix/Linux/macOS
- Start the application:
  ```bash
  ./start.sh
  ```
- Stop the application:
  ```bash
  ./stop.sh
  ```

The application will be available at [http://localhost:8080](http://localhost:8080)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── lib/           # Utilities and configurations
├── hooks/         # Custom React hooks
├── data/          # Static data and content
└── assets/        # Images and static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Contributing

This is a personal portfolio project

## License

This project is private and for personal use.
