import { z } from 'zod';

const MAX_FILE_SIZE = 1 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const base58Chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const isBase58 = (value: string) => {
  return value.split('').every((char) => base58Chars.includes(char));
};

export const TokenFormSchema = z.object({
    generate: z.enum(['standart', 'custom'], {
      errorMap: () => ({ message: "Must be 'standart' or 'custom'" }),
    }),

    prefix: z.string().optional().refine((value) => value === undefined || value === '' || isBase58(value), {
      message: "Prefix must be a valid Base58 string if provided."
    }),
    suffix: z.string().optional().refine((value) => value === undefined || value === '' || isBase58(value), {
      message: "Suffix must be a valid Base58 string if provided."
    }),
    email: z.string().optional(),
  
    name: z.string()
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(50, { message: "Name cannot exceed 50 characters" }),
    
    symbol: z.string()
      .min(2, { message: "Symbol must be at least 2 characters long" })
      .max(10, { message: "Symbol cannot exceed 10 characters" })
      .regex(/^[A-Z]+$/, { message: "Symbol must be uppercase letters only" }),
    
    decimals: z.coerce.number()
      .min(0, { message: "Decimals must be at least 0" })
      .max(18, { message: "Decimals cannot exceed 18" })
      .int({ message: "Decimals must be a whole number" }),
    
    supply: z.coerce.number()
      .positive({ message: "Supply must be a positive number" })
      .max(1_000_000_000_000, { message: "Supply is too large" }),
    
    image: z.instanceof(File)
      .refine((file) => file.size <= MAX_FILE_SIZE, { message: "Image size must be <= 1MB" })
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
        { message: "Only .jpg, .png and .webp files are accepted" }
      ),
    
    description: z.string()
      .min(10, { message: "Description must be at least 10 characters long" })
      .max(500, { message: "Description cannot exceed 500 characters" }),
    
    websiteLink: z.string().optional(),
    telegramLink: z.string().optional(),
    twitterLink: z.string().optional(),
  
    revokeFreezeEnabled: z.literal(true),
    revokeMintEnabled: z.boolean().optional()
  }).superRefine((data, ctx) => {
    if (data.generate === 'custom') {
      if (!data.email) {
        ctx.addIssue({
          path: ['email'],
          message: "Email is required when 'Custom' is selected.",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });
  export type TokenFormData = z.infer<typeof TokenFormSchema>;
