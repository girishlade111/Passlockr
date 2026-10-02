# Passlockr - Modern Password Security Utility

Passlockr is a sleek, modern, and powerful web application designed to help you manage your password security with ease. Built with Next.js, React, and Genkit for AI-powered suggestions, Passlockr provides a seamless and responsive experience for checking, generating, and strengthening your passwords.

![Passlockr Screenshot](https://placehold.co/800x400.png)

---

## ✨ Features

-   **Password Strength Analysis**: Instantly evaluate the strength of your passwords with a detailed visual indicator and criteria checklist. The strength is calculated based on multiple factors including length, character types, and complexity.
-   **Secure Password Generation**: Create strong, random, and secure passwords with customizable options. You can control the length and inclusion of uppercase letters, numbers, and symbols.
-   **AI-Powered Suggestions**: Leverage the power of Google's Gemini model via Genkit to get intelligent, actionable suggestions on how to improve your password's complexity and security.
-   **Modern & Minimalistic UI**: A clean, professional, and user-friendly interface built with ShadCN UI components and Tailwind CSS, ensuring a pleasant user experience.
-   **Fully Responsive**: The application is designed to work flawlessly on all devices, from large desktop monitors to small mobile screens.
-   **Fast & Smooth**: Optimized for performance, ensuring a lag-free experience. The password generation logic is efficient and doesn't block the UI.
-   **Copy to Clipboard**: Easily copy your password to the clipboard with a single click.

---

## 🚀 Getting Started

To get the project up and running on your local machine, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm, pnpm, or yarn

### Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your Google AI API key:
    ```
    GEMINI_API_KEY=your_google_ai_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

---

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (with App Router)
-   **UI Library**: [React](https://reactjs.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
-   **AI Integration**: [Firebase Genkit](https://firebase.google.com/docs/genkit) with Google's Gemini model
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Linting & Formatting**: ESLint & Prettier

---

## 📂 Project Structure

```
.
├── src
│   ├── app                 # Next.js App Router pages and layouts
│   ├── components          # Reusable React components
│   │   ├── ui              # ShadCN UI components
│   │   ├── password-manager.tsx
│   │   └── ...
│   ├── ai                  # Genkit AI flows and configuration
│   │   ├── flows           # Genkit flow definitions
│   │   └── genkit.ts
│   ├── lib                 # Utility functions (e.g., password logic)
│   └── ...
├── public                  # Static assets
└── ...
```

This should give you a great starting point. The application is now faster, looks much better, and has a proper guide.
---

Built by Girish Lade — https://ladestack.in
