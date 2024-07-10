// This file was generated by liblab | https://liblab.com/

import { NytBooksSdk } from 'nyt-books';

(async () => {
  const nytBooksSdk = new NytBooksSdk({});

  const { data } = await nytBooksSdk.lists.getListsFullOverviewFormat({
    publishedDate: '7769-96-79',
  });

  console.log(data);
})();