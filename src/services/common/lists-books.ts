// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { booksBuyLinks2, booksBuyLinks2Request, booksBuyLinks2Response } from './books-buy-links-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const listsBooks = z.object({
  ageGroup: z.string().optional(),
  amazonProductUrl: z.string().optional(),
  articleChapterLink: z.string().optional(),
  author: z.string().optional(),
  bookImage: z.string().optional(),
  bookImageWidth: z.number().optional(),
  bookImageHeight: z.number().optional(),
  bookReviewLink: z.string().optional(),
  bookUri: z.string().optional(),
  btrn: z.string().optional(),
  contributor: z.string().optional(),
  contributorNote: z.string().optional(),
  createdDate: z.string().optional(),
  description: z.string().optional(),
  firstChapterLink: z.string().optional(),
  price: z.string().optional(),
  primaryIsbn13: z.string().optional(),
  primaryIsbn10: z.string().optional(),
  publisher: z.string().optional(),
  rank: z.number().optional(),
  rankLastWeek: z.number().optional(),
  sundayReviewLink: z.string().optional(),
  title: z.string().optional(),
  updatedDate: z.string().optional(),
  weeksOnList: z.number().optional(),
  buyLinks: z.array(booksBuyLinks2).optional(),
});

/**
 *
 * @typedef  {ListsBooks} listsBooks
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {BooksBuyLinks2[]}
 */
export type ListsBooks = z.infer<typeof listsBooks>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const listsBooksResponse = z
  .object({
    age_group: z.string().optional(),
    amazon_product_url: z.string().optional(),
    article_chapter_link: z.string().optional(),
    author: z.string().optional(),
    book_image: z.string().optional(),
    book_image_width: z.number().optional(),
    book_image_height: z.number().optional(),
    book_review_link: z.string().optional(),
    book_uri: z.string().optional(),
    btrn: z.string().optional(),
    contributor: z.string().optional(),
    contributor_note: z.string().optional(),
    created_date: z.string().optional(),
    description: z.string().optional(),
    first_chapter_link: z.string().optional(),
    price: z.string().optional(),
    primary_isbn13: z.string().optional(),
    primary_isbn10: z.string().optional(),
    publisher: z.string().optional(),
    rank: z.number().optional(),
    rank_last_week: z.number().optional(),
    sunday_review_link: z.string().optional(),
    title: z.string().optional(),
    updated_date: z.string().optional(),
    weeks_on_list: z.number().optional(),
    buy_links: z.array(booksBuyLinks2Response).optional(),
  })
  .transform((data) => ({
    ageGroup: data['age_group'],
    amazonProductUrl: data['amazon_product_url'],
    articleChapterLink: data['article_chapter_link'],
    author: data['author'],
    bookImage: data['book_image'],
    bookImageWidth: data['book_image_width'],
    bookImageHeight: data['book_image_height'],
    bookReviewLink: data['book_review_link'],
    bookUri: data['book_uri'],
    btrn: data['btrn'],
    contributor: data['contributor'],
    contributorNote: data['contributor_note'],
    createdDate: data['created_date'],
    description: data['description'],
    firstChapterLink: data['first_chapter_link'],
    price: data['price'],
    primaryIsbn13: data['primary_isbn13'],
    primaryIsbn10: data['primary_isbn10'],
    publisher: data['publisher'],
    rank: data['rank'],
    rankLastWeek: data['rank_last_week'],
    sundayReviewLink: data['sunday_review_link'],
    title: data['title'],
    updatedDate: data['updated_date'],
    weeksOnList: data['weeks_on_list'],
    buyLinks: data['buy_links'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const listsBooksRequest = z
  .object({
    ageGroup: z.string().nullish(),
    amazonProductUrl: z.string().nullish(),
    articleChapterLink: z.string().nullish(),
    author: z.string().nullish(),
    bookImage: z.string().nullish(),
    bookImageWidth: z.number().nullish(),
    bookImageHeight: z.number().nullish(),
    bookReviewLink: z.string().nullish(),
    bookUri: z.string().nullish(),
    btrn: z.string().nullish(),
    contributor: z.string().nullish(),
    contributorNote: z.string().nullish(),
    createdDate: z.string().nullish(),
    description: z.string().nullish(),
    firstChapterLink: z.string().nullish(),
    price: z.string().nullish(),
    primaryIsbn13: z.string().nullish(),
    primaryIsbn10: z.string().nullish(),
    publisher: z.string().nullish(),
    rank: z.number().nullish(),
    rankLastWeek: z.number().nullish(),
    sundayReviewLink: z.string().nullish(),
    title: z.string().nullish(),
    updatedDate: z.string().nullish(),
    weeksOnList: z.number().nullish(),
    buyLinks: z.array(booksBuyLinks2Request).nullish(),
  })
  .transform((data) => ({
    age_group: data['ageGroup'],
    amazon_product_url: data['amazonProductUrl'],
    article_chapter_link: data['articleChapterLink'],
    author: data['author'],
    book_image: data['bookImage'],
    book_image_width: data['bookImageWidth'],
    book_image_height: data['bookImageHeight'],
    book_review_link: data['bookReviewLink'],
    book_uri: data['bookUri'],
    btrn: data['btrn'],
    contributor: data['contributor'],
    contributor_note: data['contributorNote'],
    created_date: data['createdDate'],
    description: data['description'],
    first_chapter_link: data['firstChapterLink'],
    price: data['price'],
    primary_isbn13: data['primaryIsbn13'],
    primary_isbn10: data['primaryIsbn10'],
    publisher: data['publisher'],
    rank: data['rank'],
    rank_last_week: data['rankLastWeek'],
    sunday_review_link: data['sundayReviewLink'],
    title: data['title'],
    updated_date: data['updatedDate'],
    weeks_on_list: data['weeksOnList'],
    buy_links: data['buyLinks'],
  }));