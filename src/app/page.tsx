import PasswordManager from '@/components/password-manager';
import { KeyRound, Instagram, Linkedin, Github, Codepen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const socialLinks = [
    {
      href: "https://www.instagram.com/girish_lade_/",
      icon: <Instagram size={20} />,
      label: "Instagram"
    },
    {
      href: "https://www.linkedin.com/in/girish-lade-075bba201/",
      icon: <Linkedin size={20} />,
      label: "LinkedIn"
    },
    {
      href: "https://github.com/girishlade111",
      icon: <Github size={20} />,
      label: "GitHub"
    },
    {
      href: "https://codepen.io/Girish-Lade-the-looper",
      icon: <Codepen size={20} />,
      label: "Codepen"
    },
    {
      href: "mailto:girishlade111@gmail.com",
      icon: <Mail size={20} />,
      label: "Email"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 bg-background">
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

      <footer className="w-full max-w-4xl mx-auto mt-12 text-center text-muted-foreground">
        <div className="flex justify-center items-center space-x-4 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors">
                {link.icon}
              </Button>
            </a>
          ))}
        </div>
        <p className="text-sm">
          Developed by Girish Lade
        </p>
      </footer>
    </main>
  );
}
