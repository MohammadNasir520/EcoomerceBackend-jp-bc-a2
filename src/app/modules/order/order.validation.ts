import { z } from "zod";

const createSchema = z.object({
  email: z.string({ required_error: "email is required" }),
  price: z.number({ required_error: "price is required" }),
  productId: z.string({ required_error: "id is required" }),
  quantity: z.number({ required_error: "inventory quantity is required" }),
});
const updateSchema = z.object({
  email: z.string().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  category: z.string().optional(),
  tags: z.array(z.string().optional()).optional(),
  variants: z
    .array(
      z
        .object({
          type: z.string().optional(),
          value: z.string().optional(),
        })
        .optional()
    )
    .optional(),
  inventory: z
    .object({
      quantity: z.number().optional(),
      inStock: z.boolean().optional(),
    })
    .optional(),
});

export const OrderValidation = {
  createSchema,
  updateSchema,
};
