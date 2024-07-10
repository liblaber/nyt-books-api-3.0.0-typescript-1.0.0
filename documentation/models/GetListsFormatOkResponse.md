# GetListsFormatOkResponse

**Properties**

| Name         | Type                              | Required | Description |
| :----------- | :-------------------------------- | :------- | :---------- |
| status       | string                            | ❌       |             |
| copyright    | string                            | ❌       |             |
| numResults   | number                            | ❌       |             |
| lastModified | string                            | ❌       |             |
| results      | GetListsFormatOkResponseResults[] | ❌       |             |

# GetListsFormatOkResponseResults

**Properties**

| Name             | Type              | Required | Description |
| :--------------- | :---------------- | :------- | :---------- |
| listName         | string            | ❌       |             |
| displayName      | string            | ❌       |             |
| bestsellersDate  | string            | ❌       |             |
| publishedDate    | string            | ❌       |             |
| rank             | number            | ❌       |             |
| rankLastWeek     | number            | ❌       |             |
| weeksOnList      | number            | ❌       |             |
| asterisk         | number            | ❌       |             |
| dagger           | number            | ❌       |             |
| amazonProductUrl | string            | ❌       |             |
| isbns            | ResultsIsbns1[]   | ❌       |             |
| bookDetails      | BookDetails[]     | ❌       |             |
| reviews          | ResultsReviews1[] | ❌       |             |

# ResultsIsbns1

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| isbn10 | string | ❌       |             |
| isbn13 | string | ❌       |             |

# BookDetails

**Properties**

| Name            | Type   | Required | Description |
| :-------------- | :----- | :------- | :---------- |
| title           | string | ❌       |             |
| description     | string | ❌       |             |
| contributor     | string | ❌       |             |
| author          | string | ❌       |             |
| contributorNote | string | ❌       |             |
| price           | string | ❌       |             |
| ageGroup        | string | ❌       |             |
| publisher       | string | ❌       |             |
| primaryIsbn13   | string | ❌       |             |
| primaryIsbn10   | string | ❌       |             |

# ResultsReviews1

**Properties**

| Name               | Type   | Required | Description |
| :----------------- | :----- | :------- | :---------- |
| bookReviewLink     | string | ❌       |             |
| firstChapterLink   | string | ❌       |             |
| sundayReviewLink   | string | ❌       |             |
| articleChapterLink | string | ❌       |             |

<!-- This file was generated by liblab | https://liblab.com/ -->