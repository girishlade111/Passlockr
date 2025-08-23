"use client";

import { useMemo } from 'react';
import { Progress } from '@/components/ui/progress';
import { calculateStrength, checkPasswordCriteria } from '@/lib/password';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { PasswordCriteria } from '@/lib/password';

type PasswordStrengthIndicatorProps = {
  password?: string;
};

const strengthLevels: { [key: number]: { text: string; color: string } } = {
  0: { text: '', color: 'text-muted-foreground' },
  1: { text: 'Weak', color: 'text-red-500' },
  2: { text: 'Medium', color: 'text-yellow-500' },
  3: { text: 'Strong', color: 'text-green-500' },
  4: { text: 'Very Strong', color: 'text-green-500' },
};

export function PasswordStrengthIndicator({ password = '' }: PasswordStrengthIndicatorProps) {
  const { score, level } = useMemo(() => calculateStrength(password), [password]);
  const criteria = useMemo(() => checkPasswordCriteria(password), [password]);
  const { text, color } = strengthLevels[level];

  const renderCriterion = (criterion: { label: string; met: boolean }, index: number) => (
    <div key={index} className="flex items-center text-sm transition-colors duration-300">
      {criterion.met ? (
        <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
      ) : (
        <XCircle className="w-4 h-4 mr-2 text-muted-foreground" />
      )}
      <span className={criterion.met ? 'text-foreground' : 'text-muted-foreground'}>
        {criterion.label}
      </span>
    </div>
  );

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center justify-between">
        <Progress value={score} className="h-2 flex-1" indicatorClassName="strength-gradient transition-all duration-300" />
        {password.length > 0 && (
          <p className={`ml-4 text-sm font-medium transition-colors duration-300 ${color}`}>
            {text}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-2 pt-2">
        {criteria.map(renderCriterion)}
      </div>
    </div>
  );
}

// Small update to Progress component to allow passing a class to the indicator
import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '@/lib/utils';

interface CustomProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  indicatorClassName?: string;
}

const OriginalProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  CustomProgressProps
>(({ className, value, indicatorClassName, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary', className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn('h-full w-full flex-1 bg-primary transition-all', indicatorClassName)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
OriginalProgress.displayName = ProgressPrimitive.Root.displayName;

export { OriginalProgress as Progress };
