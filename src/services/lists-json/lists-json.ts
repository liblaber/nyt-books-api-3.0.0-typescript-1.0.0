// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { GetListsFormatOkResponse, getListsFormatOkResponseResponse } from './models';
import { GetListsFormatParams } from './request-params';

export class ListsJsonService extends BaseService {
  /**
 * Get Best Sellers list.  If no date is provided returns the latest list.
 * @param {string} list - The name of the Times best sellers list (hardcover-fiction, paperback-nonfiction, ...).
The /lists/names service returns all the list names.
The encoded list names are lower case with hyphens instead of spaces (e.g. e-book-fiction, instead of E-Book Fiction).
 * @param {string} [bestsellersDate] - YYYY-MM-DD

The week-ending date for the sales reflected on list-name. Times best sellers lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).
 * @param {string} [publishedDate] - YYYY-MM-DD

The date the best sellers list was published on NYTimes.com (different than bestsellers-date).  Use "current" for latest list.
 * @param {number} [offset] - Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list.
 * @returns {Promise<HttpResponse<GetListsFormatOkResponse>>} Best Sellers list books
 */
  async getListsFormat(
    params: GetListsFormatParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetListsFormatOkResponse>> {
    const path = '/lists.json';
    const options: any = {
      responseSchema: getListsFormatOkResponseResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.list) {
      options.queryParams['list'] = params?.list;
    }
    if (params?.bestsellersDate) {
      options.queryParams['bestsellers-date'] = params?.bestsellersDate;
    }
    if (params?.publishedDate) {
      options.queryParams['published-date'] = params?.publishedDate;
    }
    if (params?.offset) {
      options.queryParams['offset'] = params?.offset;
    }
    return this.client.get(path, options);
  }
}