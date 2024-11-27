import { z } from 'zod';

export const userRegistrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  collegeId: z.string().min(3, 'College ID must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({ message: 'Please select a valid gender' }),
  }),
  mobile: z.string().regex(/^\+?[1-9]\d{9,14}$/, 'Invalid mobile number'),
  role: z.enum(['user', 'admin', 'super_admin'] as const).default('user'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export type UserRegistration = z.infer<typeof userRegistrationSchema>;
export type LoginCredentials = z.infer<typeof loginSchema>; 