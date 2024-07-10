// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const booksIsbns = z.object({
  isbn10: z.string().optional(),
  isbn13: z.string().optional(),
});

/**
 *
 * @typedef  {BooksIsbns} booksIsbns
 * @property {string}
 * @property {string}
 */
export type BooksIsbns = z.infer<typeof booksIsbns>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const booksIsbnsResponse = z
  .object({
    isbn10: z.string().optional(),
    isbn13: z.string().optional(),
  })
  .transform((data) => ({
    isbn10: data['isbn10'],
    isbn13: data['isbn13'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const booksIsbnsRequest = z
  .object({ isbn10: z.string().nullish(), isbn13: z.string().nullish() })
  .transform((data) => ({
    isbn10: data['isbn10'],
    isbn13: data['isbn13'],
  }));