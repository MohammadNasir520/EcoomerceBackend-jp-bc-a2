import { z } from "zod";

const createSchema = z.object({
  name: z.string({ required_error: "name is required" }),
  description: z.string({ required_error: "Description is required" }),
  price: z.number({ required_error: "price is required" }),
  category: z.string({ required_error: "category is required" }),
  tags: z.array(z.string({ required_error: "tags is required" })),
  variants: z.array(
    z.object({
      type: z.string({ required_error: "variants type is required" }),
      value: z.string({ required_error: "variants value is required" }),
    })
  ),
  inventory: z.object({
    quantity: z.number({ required_error: "inventory quantity is required" }),
    inStock: z.boolean({ required_error: "inventory inStock is required" }),
  }),
});

export const ProductValidation = {
  createSchema,
};
