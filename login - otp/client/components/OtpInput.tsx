import React, { useRef, useEffect, KeyboardEvent } from 'react';
import { cn } from '../lib/utils';

interface OtpInputProps {
  length: number;
  value: string[];
  onChange: (value: string[]) => void;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  autoFocus?: boolean;
}

const OtpInput: React.FC<OtpInputProps> = ({
  length,
  value,
  onChange,
  disabled = false,
  error = false,
  className,
  autoFocus = false,
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  const handleChange = (index: number, newValue: string) => {
    // Only allow single digits
    const digit = newValue.replace(/\D/g, '').slice(-1);
    
    const newValues = [...value];
    newValues[index] = digit;
    onChange(newValues);

    // Auto-focus next input
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace') {
      if (!value[index] && index > 0) {
        // If current input is empty, focus previous and clear it
        const newValues = [...value];
        newValues[index - 1] = '';
        onChange(newValues);
        inputRefs.current[index - 1]?.focus();
      } else {
        // Clear current input
        const newValues = [...value];
        newValues[index] = '';
        onChange(newValues);
      }
    }
    
    // Handle arrow keys
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    
    if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain');
    const digits = pastedData.replace(/\D/g, '').slice(0, length);
    
    const newValues = Array(length).fill('');
    for (let i = 0; i < digits.length; i++) {
      newValues[i] = digits[i];
    }
    
    onChange(newValues);
    
    // Focus the next empty input or last input
    const nextIndex = Math.min(digits.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={cn('flex gap-1 sm:gap-2 justify-center', className)} dir="ltr">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[index] || ''}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          disabled={disabled}
          className={cn(
            'w-10 h-10 sm:w-12 sm:h-12 text-center text-base sm:text-lg font-medium border rounded-lg transition-all',
            'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none',
            'disabled:bg-gray-100 disabled:cursor-not-allowed',
            {
              'border-red-500 focus:border-red-500 focus:ring-red-500/20': error,
              'border-gray-300': !error,
            }
          )}
        />
      ))}
    </div>
  );
};

export default OtpInput;
