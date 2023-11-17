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
    return res.status(404).json({ message: `Tienda ${name} no encontrada` });
  }

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
