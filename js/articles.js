const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
  const pageId = 'b55c9c91-384d-452b-81db-d1ef79372b75';
  const response = await notion.pages.retrieve({ page_id: pageId });
  console.log(response);
})();