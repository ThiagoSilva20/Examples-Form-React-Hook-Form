'use client';

import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { cn } from '@/lib/utils';

interface PhoneInputProps {
  label?: string;
  labels?: string;
  req?: boolean;
  helperText?: string;
  error?: boolean;
  touched?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  [key: string]: any; // For additional props
}

export const FieldPhoneInput: React.FC<PhoneInputProps> = ({
  label,
  labels,
  req,
  helperText,
  error,
  touched,
  value,
  onChange,
  onBlur,
  ...props
}) => {
  return (
    <div className="flex items-center gap-2 w-full max-w-md">
      <div className="flex-1">
        <PhoneInput
          country={'th'}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          specialLabel=""
          inputClass={cn(
            'w-full rounded-md border',
            error && touched ? 'border-red-500' : 'border-gray-300',
            'py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          )}
          buttonClass="border-none"
          dropdownClass="shadow-md"
          {...props}
        />
        {touched && error && (
          <p className="mt-1 text-sm text-red-500">{error || helperText}</p>
        )}
      </div>
    </div>
  );
};
