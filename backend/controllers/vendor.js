const fs = require('node:fs/promises');
const { extname, join } = require('node:path');

const supportedVendors = {
  d1: {},
  isimo: false,
  vaquita: false
};

/**
 * Get all Products by Store
 * @param {import('express').Request} req The request context of express
 * @param {import('express').Response} res The response context of express
 * @param {import('express').NextFunction} next The next function for middlewares
 *
 * @returns {} json to the client
 */
const getVendor = (req, res, next) => {
  const { name } = req.params;
  res.json({ message: `Hola desde la tienda ${name}` });
};

/**
 * Get product by search params
 * @param {import('express').Request} req The request context of express
 * @param {import('express').Response} res The response context of express
 * @param {import('express').NextFunction} next The next function for middlewares
 *
 * @returns {} json to the client
 */
const getVendorProduct = async (req, res, next) => {
  const { name, query } = req.params;
  const { ExtractD1 } = await import('../services/ExtractD1.mjs');

  if (!supportedVendors[name]) {
    return res.status(404).json(`Tienda ${name} no encontrada`);
  }

  const { storagePath } = await import('../utils/rootDir.mjs');

  try {
    await fs.access(storagePath);
  } catch (error) {
    console.log('Creating Storage Folder');
    await fs.mkdir(storagePath, { recursive: true });
    console.log(error.stack);
  }

  const files = await fs.readdir(storagePath);
  const cacheFiles = files.map((f) => {
    if (extname(f) === '.json') {
      return f;
    }
  });

  const cacheRegEx = new RegExp(`${name}\_${query}`, 'i');

  const foundFile = cacheFiles.find((f) => cacheRegEx.test(f));
  if (foundFile) {
    const resFile = JSON.parse(
      await fs.readFile(join(storagePath, foundFile), { encoding: 'utf8' })
    );
    console.log('\x1b[33mProduct cached\x1b[0m');
    return res.json(resFile);
  }

  // console.log({ name, query, cacheFiles, foundFile });

  // return res.json('ok');
  ExtractD1(query)
    .then((prods) => {
      res.json(prods);
    })
    .catch((e) => console.log(e));
};

module.exports = {
  getVendor,
  getVendorProduct
};
