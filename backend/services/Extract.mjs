import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
import { rootDir, storagePath } from '../utils/rootDir.mjs';

const Shops = [
  {
    vendor: 'D1',
    baseUrl: 'https://domicilios.tiendasd1.com/',
    products: [],
    /**
     * This function contains the Fetch API Request for products
     * @async
     * @param {string} query the product name to search on
     * @returns {Promise<string|null>} An array of products based on the search
     */
    searchProduct: async function (query) {
      const _reqProduct = await fetch('https://nextgentheadless.instaleap.io/api/v3', {
        headers: {
          accept: '*/*',
          'accept-language': 'en-US,en;q=0.9,es-US;q=0.8,es;q=0.7',
          'apollographql-client-name': 'Ecommerce',
          'apollographql-client-version': '3.39.6',
          'cache-control': 'no-cache',
          'content-type': 'application/json',
          pragma: 'no-cache',
          'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          token: ''
        },
        referrer: `https://domicilios.tiendasd1.com/search?name=${query}`,
        referrerPolicy: 'no-referrer-when-downgrade',
        body: `[{\"operationName\":\"SearchProducts\",\"variables\":{\"searchProductsInput\":{\"clientId\":\"D1\",\"storeReference\":\"11808\",\"currentPage\":1,\"minScore\":1,\"pageSize\":100,\"search\":[{\"query\":\"${query}\"}],\"filters\":{},\"googleAnalyticsSessionId\":\"\"}},\"query\":\"fragment CategoryFields on CategoryModel {\\n  active\\n  boost\\n  hasChildren\\n  categoryNamesPath\\n  isAvailableInHome\\n  level\\n  name\\n  path\\n  reference\\n  slug\\n  photoUrl\\n  imageUrl\\n  shortName\\n  isFeatured\\n  isAssociatedToCatalog\\n  __typename\\n}\\n\\nfragment CatalogProductTagModel on CatalogProductTagModel {\\n  description\\n  enabled\\n  textColor\\n  filter\\n  tagReference\\n  backgroundColor\\n  name\\n  __typename\\n}\\n\\nfragment CatalogProductFormatModel on CatalogProductFormatModel {\\n  format\\n  equivalence\\n  unitEquivalence\\n  __typename\\n}\\n\\nfragment PromotionCondition on PromotionCondition {\\n  quantity\\n  price\\n  __typename\\n}\\n\\nfragment Promotion on Promotion {\\n  type\\n  isActive\\n  conditions {\\n    ...PromotionCondition\\n    __typename\\n  }\\n  description\\n  endDateTime\\n  startDateTime\\n  __typename\\n}\\n\\nfragment PromotedModel on PromotedModel {\\n  isPromoted\\n  onLoadBeacon\\n  onClickBeacon\\n  onViewBeacon\\n  onBasketChangeBeacon\\n  onWishlistBeacon\\n  __typename\\n}\\n\\nfragment SpecificationModel on SpecificationModel {\\n  title\\n  values {\\n    label\\n    value\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CatalogProductModel on CatalogProductModel {\\n  name\\n  price\\n  photosUrl\\n  unit\\n  subUnit\\n  subQty\\n  description\\n  sku\\n  ean\\n  maxQty\\n  minQty\\n  clickMultiplier\\n  nutritionalDetails\\n  isActive\\n  slug\\n  brand\\n  stock\\n  securityStock\\n  boost\\n  isAvailable\\n  location\\n  promotion {\\n    ...Promotion\\n    __typename\\n  }\\n  categories {\\n    ...CategoryFields\\n    __typename\\n  }\\n  categoriesData {\\n    ...CategoryFields\\n    __typename\\n  }\\n  formats {\\n    ...CatalogProductFormatModel\\n    __typename\\n  }\\n  tags {\\n    ...CatalogProductTagModel\\n    __typename\\n  }\\n  specifications {\\n    ...SpecificationModel\\n    __typename\\n  }\\n  promoted {\\n    ...PromotedModel\\n    __typename\\n  }\\n  score\\n  relatedProducts\\n  ingredients\\n  stockWarning\\n  __typename\\n}\\n\\nfragment PaginationTotalModel on PaginationTotalModel {\\n  value\\n  relation\\n  __typename\\n}\\n\\nfragment PaginationModel on PaginationModel {\\n  page\\n  pages\\n  total {\\n    ...PaginationTotalModel\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment AggregateBucketModel on AggregateBucketModel {\\n  min\\n  max\\n  key\\n  docCount\\n  __typename\\n}\\n\\nfragment AggregateModel on AggregateModel {\\n  name\\n  docCount\\n  buckets {\\n    ...AggregateBucketModel\\n    __typename\\n  }\\n  __typename\\n}\\n\\nquery SearchProducts($searchProductsInput: SearchProductsInput!) {\\n  searchProducts(searchProductsInput: $searchProductsInput) {\\n    products {\\n      ...CatalogProductModel\\n      __typename\\n    }\\n    pagination {\\n      ...PaginationModel\\n      __typename\\n    }\\n    aggregates {\\n      ...AggregateModel\\n      __typename\\n    }\\n    promoted {\\n      ...PromotedModel\\n      __typename\\n    }\\n    __typename\\n  }\\n}\"}]`,
        method: 'POST',
        mode: 'cors',
        credentials: 'omit'
      });
      if (!_reqProduct.ok) return null;
      const _responseProduct = await _reqProduct.json();

      const foundProducts = _responseProduct?.[0].data?.searchProducts?.products ?? null;

      return foundProducts;
    },
    /**
     *
     * @param {import('playwright').Page} page
     */
    extract: async function (page, query) {
      await page.goto(`${this.baseUrl}search?name=${query}`, { waitUntil: 'load' });

      const resultProducts = await page.evaluate(async (query) => {
        const _reqProduct = await fetch('https://nextgentheadless.instaleap.io/api/v3', {
          headers: {
            accept: '*/*',
            'accept-language': 'en-US,en;q=0.9,es-US;q=0.8,es;q=0.7',
            'apollographql-client-name': 'Ecommerce',
            'apollographql-client-version': '3.39.6',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            pragma: 'no-cache',
            'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            token: ''
          },
          referrer: `https://domicilios.tiendasd1.com/search?name=${query}`,
          referrerPolicy: 'no-referrer-when-downgrade',
          body: `[{\"operationName\":\"SearchProducts\",\"variables\":{\"searchProductsInput\":{\"clientId\":\"D1\",\"storeReference\":\"11808\",\"currentPage\":1,\"minScore\":1,\"pageSize\":100,\"search\":[{\"query\":\"${query}\"}],\"filters\":{},\"googleAnalyticsSessionId\":\"\"}},\"query\":\"fragment CategoryFields on CategoryModel {\\n  active\\n  boost\\n  hasChildren\\n  categoryNamesPath\\n  isAvailableInHome\\n  level\\n  name\\n  path\\n  reference\\n  slug\\n  photoUrl\\n  imageUrl\\n  shortName\\n  isFeatured\\n  isAssociatedToCatalog\\n  __typename\\n}\\n\\nfragment CatalogProductTagModel on CatalogProductTagModel {\\n  description\\n  enabled\\n  textColor\\n  filter\\n  tagReference\\n  backgroundColor\\n  name\\n  __typename\\n}\\n\\nfragment CatalogProductFormatModel on CatalogProductFormatModel {\\n  format\\n  equivalence\\n  unitEquivalence\\n  __typename\\n}\\n\\nfragment PromotionCondition on PromotionCondition {\\n  quantity\\n  price\\n  __typename\\n}\\n\\nfragment Promotion on Promotion {\\n  type\\n  isActive\\n  conditions {\\n    ...PromotionCondition\\n    __typename\\n  }\\n  description\\n  endDateTime\\n  startDateTime\\n  __typename\\n}\\n\\nfragment PromotedModel on PromotedModel {\\n  isPromoted\\n  onLoadBeacon\\n  onClickBeacon\\n  onViewBeacon\\n  onBasketChangeBeacon\\n  onWishlistBeacon\\n  __typename\\n}\\n\\nfragment SpecificationModel on SpecificationModel {\\n  title\\n  values {\\n    label\\n    value\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CatalogProductModel on CatalogProductModel {\\n  name\\n  price\\n  photosUrl\\n  unit\\n  subUnit\\n  subQty\\n  description\\n  sku\\n  ean\\n  maxQty\\n  minQty\\n  clickMultiplier\\n  nutritionalDetails\\n  isActive\\n  slug\\n  brand\\n  stock\\n  securityStock\\n  boost\\n  isAvailable\\n  location\\n  promotion {\\n    ...Promotion\\n    __typename\\n  }\\n  categories {\\n    ...CategoryFields\\n    __typename\\n  }\\n  categoriesData {\\n    ...CategoryFields\\n    __typename\\n  }\\n  formats {\\n    ...CatalogProductFormatModel\\n    __typename\\n  }\\n  tags {\\n    ...CatalogProductTagModel\\n    __typename\\n  }\\n  specifications {\\n    ...SpecificationModel\\n    __typename\\n  }\\n  promoted {\\n    ...PromotedModel\\n    __typename\\n  }\\n  score\\n  relatedProducts\\n  ingredients\\n  stockWarning\\n  __typename\\n}\\n\\nfragment PaginationTotalModel on PaginationTotalModel {\\n  value\\n  relation\\n  __typename\\n}\\n\\nfragment PaginationModel on PaginationModel {\\n  page\\n  pages\\n  total {\\n    ...PaginationTotalModel\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment AggregateBucketModel on AggregateBucketModel {\\n  min\\n  max\\n  key\\n  docCount\\n  __typename\\n}\\n\\nfragment AggregateModel on AggregateModel {\\n  name\\n  docCount\\n  buckets {\\n    ...AggregateBucketModel\\n    __typename\\n  }\\n  __typename\\n}\\n\\nquery SearchProducts($searchProductsInput: SearchProductsInput!) {\\n  searchProducts(searchProductsInput: $searchProductsInput) {\\n    products {\\n      ...CatalogProductModel\\n      __typename\\n    }\\n    pagination {\\n      ...PaginationModel\\n      __typename\\n    }\\n    aggregates {\\n      ...AggregateModel\\n      __typename\\n    }\\n    promoted {\\n      ...PromotedModel\\n      __typename\\n    }\\n    __typename\\n  }\\n}\"}]`,
          method: 'POST',
          mode: 'cors',
          credentials: 'omit'
        });
        if (!_reqProduct.ok) return null;
        const _responseProduct = await _reqProduct.json();

        const foundProducts = _responseProduct?.[0].data?.searchProducts?.products ?? null;
        // console.log(foundProducts);
        if (foundProducts?.length < 1) {
          return [];
        }
        return foundProducts;
      }, query);
      this.products = resultProducts;
    }
  }
];

export const ScrapStore = async () => {
  /* -----------  Browser setup ----------- */
  const browser = await chromium.launch({
    // headless: false,
    // slowMo: 300
  });

  // create new context
  const context = await browser.newContext();

  // add init script
  await context.addInitScript(
    "Object.defineProperty(navigator, 'webdriver', {get: () => undefined})"
  );

  /* ----------------------------------- */
  // const initTime = performance.now();

  const page = await context.newPage();

  // Structure for products in Shop
  const savePath = path.join(storagePath, 'test.json');
  for (const shop of Shops) {
    try {
      await shop.extract(page, 'saltin');
      await fs.writeFile(savePath, JSON.stringify(Shops, null, 2), 'utf-8');
    } catch (error) {
      console.error('Algo paso en la extraction de un vendor');
      throw error;
    }
  }

  console.log('\x1b[32mExtraction Completed\x1b[0m');

  await context.close();
  await browser.close();
  // const endTime = performance.now();
  // let sec = (endTime - initTime) / 1000;
  // sec = sec.toFixed(2);
  // console.log(`\x1b[36mTime lapse -> ${sec} seconds`);
};
await ScrapStore();
