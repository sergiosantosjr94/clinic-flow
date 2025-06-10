import { z } from "zod";

export const upsertDoctorSchema = z
  .object({
    id: z.string().optional(),
    name: z.string().trim().min(1, {
      message: "Nome is required.",
    }),
    specialty: z.string().trim().min(1, {
      message: "Specialty is required.",
    }),
    appointmentPriceInCents: z.number().min(1, {
      message: "Amount is required.",
    }),
    availableFromWeekDay: z.number().min(0).max(6),
    availableToWeekDay: z.number().min(0).max(6),
    availableFromTime: z.string().min(1, {
      message: "Initial time is required.",
    }),
    availableToTime: z.string().min(1, {
      message: "Final time is required.",
    }),
  })
  .refine(
    (data) => {
      return data.availableFromTime < data.availableToTime;
    },
    {
      message: "The start time cannot be earlier than the end time.",
      path: ["availableToTime"],
    },
  );

export type TUpsertDoctorSchema = z.infer<typeof upsertDoctorSchema>;
