"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { generatePassword } from '@/lib/password';
import { RefreshCw } from 'lucide-react';
import { Label } from '@/components/ui/label';

type PasswordGeneratorProps = {
  onPasswordGenerated: (password: string) => void;
};

export function PasswordGenerator({ onPasswordGenerated }: PasswordGeneratorProps) {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

  const handleGenerate = () => {
    const newPassword = generatePassword({ length, ...options });
    onPasswordGenerated(newPassword);
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Password Generator</CardTitle>
        <CardDescription>Create a strong and secure password.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label>Length</Label>
            <span className="text-primary font-mono text-lg">{length}</span>
          </div>
          <Slider
            value={[length]}
            onValueChange={(value) => setLength(value[0])}
            min={8}
            max={64}
            step={1}
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="uppercase">Uppercase Letters (A-Z)</Label>
            <Switch
              id="uppercase"
              checked={options.includeUppercase}
              onCheckedChange={(checked) => setOptions(prev => ({ ...prev, includeUppercase: checked }))}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="numbers">Numbers (0-9)</Label>
            <Switch
              id="numbers"
              checked={options.includeNumbers}
              onCheckedChange={(checked) => setOptions(prev => ({ ...prev, includeNumbers: checked }))}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="symbols">Symbols (!@#$)</Label>
            <Switch
              id="symbols"
              checked={options.includeSymbols}
              onCheckedChange={(checked) => setOptions(prev => ({ ...prev, includeSymbols: checked }))}
            />
          </div>
        </div>
        <Button onClick={handleGenerate} className="w-full">
          <RefreshCw />
          Generate Password
        </Button>
      </CardContent>
    </Card>
  );
}
