"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { PasswordStrengthIndicator } from '@/components/password-strength-indicator';
import { PasswordGenerator } from '@/components/password-generator';
import { AiSuggestions } from '@/components/ai-suggestions';
import { Eye, EyeOff, Copy } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

export default function PasswordManager() {
  const [password, setPassword] = useState('P@ssw0rd123!');
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      toast({
        title: "Copied!",
        description: "Password has been copied to your clipboard.",
      });
    }
  };


  return (
    <div className="space-y-8">
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter or generate a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-24 text-lg h-14"
            />
            <div className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center space-x-2">
               <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-muted-foreground"
                onClick={handleCopy}
                disabled={!password}
              >
                <Copy size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-muted-foreground"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </Button>
            </div>
          </div>
          <PasswordStrengthIndicator password={password} />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PasswordGenerator onPasswordGenerated={setPassword} />
        <AiSuggestions password={password} />
      </div>
    </div>
  );
}