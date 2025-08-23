export interface PasswordStrength {
  score: number; // 0-100
  level: 0 | 1 | 2 | 3 | 4; // 0: empty, 1: weak, 2: medium, 3: strong, 4: very strong
}

export interface PasswordCriteria {
  label: string;
  met: boolean;
}

const has = {
  lowercase: (str: string) => /[a-z]/.test(str),
  uppercase: (str: string) => /[A-Z]/.test(str),
  number: (str: string) => /\d/.test(str),
  symbol: (str: string) => /[!@#$%^&*(),.?":{}|<>]/.test(str),
};

export function calculateStrength(password: string): PasswordStrength {
  if (!password) {
    return { score: 0, level: 0 };
  }

  let score = 0;

  // Length score
  if (password.length >= 8) score += 25;
  if (password.length >= 12) score += 25;
  if (password.length >= 16) score += 10;

  // Character type score
  const types = {
    lowercase: has.lowercase(password),
    uppercase: has.uppercase(password),
    number: has.number(password),
    symbol: has.symbol(password),
  };

  const typesCount = Object.values(types).filter(Boolean).length;

  if (typesCount >= 2) score += 10;
  if (typesCount >= 3) score += 15;
  if (typesCount === 4) score += 15;

  score = Math.min(score, 100);

  let level: PasswordStrength['level'];
  if (score < 25) level = 1;
  else if (score < 50) level = 2;
  else if (score < 75) level = 3;
  else level = 4;

  return { score, level };
}

export function checkPasswordCriteria(password: string): PasswordCriteria[] {
  return [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'Contains uppercase letter', met: has.uppercase(password) },
    { label: 'Contains lowercase letter', met: has.lowercase(password) },
    { label: 'Contains a number', met: has.number(password) },
    { label: 'Contains a symbol', met: has.symbol(password) },
    { label: 'At least 12 characters', met: password.length >= 12 },
  ];
}


export interface GenerationOptions {
  length: number;
  includeUppercase?: boolean;
  includeNumbers?: boolean;
  includeSymbols?: boolean;
}

export function generatePassword(options: GenerationOptions): string {
  const { length, includeUppercase, includeNumbers, includeSymbols } = options;

  const charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  };

  let availableChars = charSets.lowercase;
  const requiredChars: string[] = [getRandomChar(charSets.lowercase)];

  if (includeUppercase) {
    availableChars += charSets.uppercase;
    requiredChars.push(getRandomChar(charSets.uppercase));
  }
  if (includeNumbers) {
    availableChars += charSets.numbers;
    requiredChars.push(getRandomChar(charSets.numbers));
  }
  if (includeSymbols) {
    availableChars += charSets.symbols;
    requiredChars.push(getRandomChar(charSets.symbols));
  }
  
  let passwordArray = [...requiredChars];

  for (let i = requiredChars.length; i < length; i++) {
    passwordArray.push(getRandomChar(availableChars));
  }

  // Shuffle the final password array
  for (let i = passwordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }

  return passwordArray.join('');
}

function getRandomChar(str: string): string {
  const randomIndex = Math.floor(Math.random() * str.length);
  return str[randomIndex];
}