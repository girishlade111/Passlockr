import PasswordManager from '@/components/password-manager';
import { KeyRound } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 bg-background">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-primary/10 text-primary p-3 rounded-full mb-4">
            <KeyRound className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-headline tracking-tight text-foreground">
            Passlockr
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            A modern utility to check strength, generate secure passwords, and get AI-powered suggestions to keep your accounts safe.
          </p>
        </header>

        <PasswordManager />
      </div>
    </main>
  );
}