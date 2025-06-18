
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
  phone?: boolean;
  custom?: (value: string) => string | null;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateField = (value: string, rules: ValidationRule): ValidationResult => {
  const errors: string[] = [];

  // Sanitize input
  const sanitizedValue = sanitizeInput(value);

  if (rules.required && !sanitizedValue.trim()) {
    errors.push('This field is required');
  }

  if (sanitizedValue && rules.minLength && sanitizedValue.length < rules.minLength) {
    errors.push(`Minimum length is ${rules.minLength} characters`);
  }

  if (sanitizedValue && rules.maxLength && sanitizedValue.length > rules.maxLength) {
    errors.push(`Maximum length is ${rules.maxLength} characters`);
  }

  if (sanitizedValue && rules.pattern && !rules.pattern.test(sanitizedValue)) {
    errors.push('Invalid format');
  }

  if (sanitizedValue && rules.email && !isValidEmail(sanitizedValue)) {
    errors.push('Please enter a valid email address');
  }

  if (sanitizedValue && rules.phone && !isValidPhone(sanitizedValue)) {
    errors.push('Please enter a valid phone number');
  }

  if (sanitizedValue && rules.custom) {
    const customError = rules.custom(sanitizedValue);
    if (customError) {
      errors.push(customError);
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const sanitizeInput = (input: string): string => {
  // Remove potentially dangerous characters
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
};

export const validateForm = (
  formData: Record<string, string>, 
  rules: Record<string, ValidationRule>
): { isValid: boolean; errors: Record<string, string[]> } => {
  const errors: Record<string, string[]> = {};
  let isValid = true;

  Object.entries(rules).forEach(([field, rule]) => {
    const value = formData[field] || '';
    const validation = validateField(value, rule);
    
    if (!validation.isValid) {
      errors[field] = validation.errors;
      isValid = false;
    }
  });

  return { isValid, errors };
};
