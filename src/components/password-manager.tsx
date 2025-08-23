"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { PasswordStrengthIndicator } from '@/components/password-strength-indicator';
import { PasswordGenerator } from '@/components/password-generator';
import { AiSuggestions } from '@/components/ai-suggestions';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/button';

export default function PasswordManager() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-12 text-lg h-12"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-2 -translate-y-1/2 h-8 w-8 text-muted-foreground"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </Button>
          </div>
          <PasswordStrengthIndicator password={password} />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PasswordGenerator onPasswordGenerated={setPassword} />
        <AiSuggestions password={password} />
      </div>
    </div>
  );
}
