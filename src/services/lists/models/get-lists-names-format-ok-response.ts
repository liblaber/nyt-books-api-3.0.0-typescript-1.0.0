// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  getListsNamesFormatOkResponseResults,
  getListsNamesFormatOkResponseResultsRequest,
  getListsNamesFormatOkResponseResultsResponse,
} from './get-lists-names-format-ok-response-results';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getListsNamesFormatOkResponse = z.object({
  status: z.string().optional(),
  copyright: z.string().optional(),
  numResults: z.number().optional(),
  results: z.array(getListsNamesFormatOkResponseResults).optional(),
});

/**
 *
 * @typedef  {GetListsNamesFormatOkResponse} getListsNamesFormatOkResponse
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {GetListsNamesFormatOkResponseResults[]}
 */
export type GetListsNamesFormatOkResponse = z.infer<typeof getListsNamesFormatOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getListsNamesFormatOkResponseResponse = z
  .object({
    status: z.string().optional(),
    copyright: z.string().optional(),
    num_results: z.number().optional(),
    results: z.array(getListsNamesFormatOkResponseResultsResponse).optional(),
  })
  .transform((data) => ({
    status: data['status'],
    copyright: data['copyright'],
    numResults: data['num_results'],
    results: data['results'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getListsNamesFormatOkResponseRequest = z
  .object({
    status: z.string().nullish(),
    copyright: z.string().nullish(),
    numResults: z.number().nullish(),
    results: z.array(getListsNamesFormatOkResponseResultsRequest).nullish(),
  })
  .transform((data) => ({
    status: data['status'],
    copyright: data['copyright'],
    num_results: data['numResults'],
    results: data['results'],
  }));