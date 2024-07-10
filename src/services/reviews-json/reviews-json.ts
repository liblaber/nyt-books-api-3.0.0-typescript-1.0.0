// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { GetReviewsFormatOkResponse, getReviewsFormatOkResponseResponse } from './models';
import { GetReviewsFormatParams } from './request-params';

export class ReviewsJsonService extends BaseService {
  /**
   * Get book reviews.
   * @param {number} [isbn] - Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs.
   * @param {string} [title] - You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20.
   * @param {string} [author] - You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20.
   * @returns {Promise<HttpResponse<GetReviewsFormatOkResponse>>} Book reviews.
   */
  async getReviewsFormat(
    params?: GetReviewsFormatParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetReviewsFormatOkResponse>> {
    const path = '/reviews.json';
    const options: any = {
      responseSchema: getReviewsFormatOkResponseResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.isbn) {
      options.queryParams['isbn'] = params?.isbn;
    }
    if (params?.title) {
      options.queryParams['title'] = params?.title;
    }
    if (params?.author) {
      options.queryParams['author'] = params?.author;
    }
    return this.client.get(path, options);
  }
}