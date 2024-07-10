# ListsService

A list of all methods in the `ListsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                     | Description                                                        |
| :-------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| [GET_lists_date_list_json](#get_lists_date_list_json)                       | Get Best Sellers list by date.                                     |
| [GET_lists_full_overview_format](#get_lists_full_overview_format)           | Get all books for all the Best Sellers lists for specified date.   |
| [GET_lists_overview_format](#get_lists_overview_format)                     | Get top 5 books for all the Best Sellers lists for specified date. |
| [GET_lists_names_format](#get_lists_names_format)                           | Get Best Sellers list names.                                       |
| [GET_lists_best_sellers_history_json](#get_lists_best_sellers_history_json) | Get Best Sellers list history.                                     |

## GET_lists_date_list_json

Get Best Sellers list by date.

- HTTP Method: `GET`
- Endpoint: `/lists/{date}/{list}.json`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                  |
| :----- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| date   | string | ✅       | YYYY-MM-DD or "current" The date the best sellers list was published on NYTimes.com. Use "current" to get latest list.                                                                       |
| list   | string | ✅       | Name of the Best Sellers List (e.g. hardcover-fiction). You can get the full list of names from the /lists/names.json service.                                                               |
| offset | number | ❌       | Sets the starting point of the result set (0, 20, ...). Used to paginate thru books if list has more than 20. Defaults to 0. The num_results field indicates how many books are in the list. |

**Return Type**

`GetListsDateListJsonOkResponse`

**Example Usage Code Snippet**

```typescript
import { NytBooksSdk } from 'nyt-books';

(async () => {
  const nytBooksSdk = new NytBooksSdk({});

  const { data } = await nytBooksSdk.lists.getListsDateListJson('5452-39-56', 'list', {
    offset: 123,
  });

  console.log(data);
})();
```

## GET_lists_full_overview_format

Get all books for all the Best Sellers lists for specified date.

- HTTP Method: `GET`
- Endpoint: `/lists/full-overview.json`

**Parameters**

| Name          | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------------ | :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| publishedDate | string | ❌       | YYYY-MM-DD The best-seller list publication date. You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26. If you do not include a published date, the current week's best sellers lists will be returned. |

**Return Type**

`OverviewResponse`

**Example Usage Code Snippet**

```typescript
import { NytBooksSdk } from 'nyt-books';

(async () => {
  const nytBooksSdk = new NytBooksSdk({});

  const { data } = await nytBooksSdk.lists.getListsFullOverviewFormat({
    publishedDate: '7769-96-79',
  });

  console.log(data);
})();
```

## GET_lists_overview_format

Get top 5 books for all the Best Sellers lists for specified date.

- HTTP Method: `GET`
- Endpoint: `/lists/overview.json`

**Parameters**

| Name          | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------------ | :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| publishedDate | string | ❌       | YYYY-MM-DD The best-seller list publication date. You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26. If you do not include a published date, the current week's best sellers lists will be returned. |

**Return Type**

`OverviewResponse`

**Example Usage Code Snippet**

```typescript
import { NytBooksSdk } from 'nyt-books';

(async () => {
  const nytBooksSdk = new NytBooksSdk({});

  const { data } = await nytBooksSdk.lists.getListsOverviewFormat({
    publishedDate: '1655-76-99',
  });

  console.log(data);
})();
```

## GET_lists_names_format

Get Best Sellers list names.

- HTTP Method: `GET`
- Endpoint: `/lists/names.json`

**Return Type**

`GetListsNamesFormatOkResponse`

**Example Usage Code Snippet**

```typescript
import { NytBooksSdk } from 'nyt-books';

(async () => {
  const nytBooksSdk = new NytBooksSdk({});

  const { data } = await nytBooksSdk.lists.getListsNamesFormat();

  console.log(data);
})();
```

## GET_lists_best_sellers_history_json

Get Best Sellers list history.

- HTTP Method: `GET`
- Endpoint: `/lists/best-sellers/history.json`

**Parameters**

| Name        | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                     |
| :---------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ageGroup    | string | ❌       | The target age group for the best seller.                                                                                                                                                                                                                                                                                                                                       |
| author      | string | ❌       | The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields). When searching the author field, you can specify any combination of first, middle and last names. When sort-by is set to author, the results will be sorted by author's first name.                     |
| contributor | string | ❌       | The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead). When searching, you can specify any combination of first, middle and last names of any of the contributors. When sort-by is set to contributor, the results will be sorted by the first name of the first contributor listed. |
| isbn        | string | ❌       | International Standard Book Number, 10 or 13 digits A best seller may have both 10-digit and 13-digit ISBNs, and may have multiple ISBNs of each type. To search on multiple ISBNs, separate the ISBNs with semicolons (example: 9780446579933;0061374229).                                                                                                                     |
| offset      | number | ❌       | Sets the starting point of the result set (0, 20, ...). Used to paginate thru results if there are more than 20. Defaults to 0. The num_results field indicates how many results there are total.                                                                                                                                                                               |
| price       | string | ❌       | The publisher's list price of the best seller, including decimal point.                                                                                                                                                                                                                                                                                                         |
| publisher   | string | ❌       | The standardized name of the publisher                                                                                                                                                                                                                                                                                                                                          |
| title       | string | ❌       | The title of the best seller When searching, you can specify a portion of a title or a full title.                                                                                                                                                                                                                                                                              |

**Return Type**

`GetListsBestSellersHistoryJsonOkResponse`

**Example Usage Code Snippet**

```typescript
import { NytBooksSdk } from 'nyt-books';

(async () => {
  const nytBooksSdk = new NytBooksSdk({});

  const { data } = await nytBooksSdk.lists.getListsBestSellersHistoryJson({
    ageGroup: 'age-group',
    author: 'author',
    contributor: 'contributor',
    isbn: 'isbn',
    offset: 123,
    price: 'price',
    publisher: 'publisher',
    title: 'title',
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
