import { z } from "zod";

export const upsertPatientSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(1, {
    message: "Name is required.",
  }),
  email: z.string().email({
    message: "Email is required.",
  }),
  phoneNumber: z.string().trim().min(1, {
    message: "Phone Number is required.",
  }),
  sex: z.enum(["male", "female"], {
    required_error: "Gender is required.",
  }),
});

export type UpsertPatientSchema = z.infer<typeof upsertPatientSchema>;
