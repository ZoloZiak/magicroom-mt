import { z } from 'astro/zod';

export const bookingFormSchema = z.object({
  name: z.string().min(2, 'Meno musí mať aspoň 2 znaky'),
  phone: z.string().min(10, 'Telefón musí mať aspoň 10 znakov'),
  email: z.string().email('Neplatný email'),
  service: z.string().min(1, 'Vyberte službu'),
  date: z.string().min(1, 'Vyberte dátum'),
  time: z.string().min(1, 'Vyberte čas'),
  note: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;