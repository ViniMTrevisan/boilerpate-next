# Next.js SaaS Boilerplate (Frontend)

This is a modern, production-ready frontend boilerplate built with Next.js 16, React 19, and Tailwind CSS 4. It comes pre-configured with essential tools for building SaaS applications.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [Shadcn/UI](https://ui.shadcn.com/) (Radix UI)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Linting:** ESLint

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn or pnpm

### Installation

1. Navigate to the project directory:
   ```bash
   cd frontend/boilerplate-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Copy the example environment file (if available) or create a `.env.local` file with the necessary variables (e.g., `NEXTAUTH_SECRET`, `NEXTAUTH_URL`).

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 📂 Project Structure

- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI components.
- `src/lib`: Utility functions and configurations.
- `public`: Static assets.

## 🎨 Customization

- **Tailwind CSS:** Configuration is located in `postcss.config.mjs` and CSS variables in `src/app/globals.css`.
- **Components:** Add new Shadcn/UI components using the CLI or by copying them to `src/components/ui`.
