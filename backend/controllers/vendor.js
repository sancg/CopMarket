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
const getVendorProduct = (req, res, next) => {
  const { name, query } = req.params;
  res.json({ message: `Tienda ${name} - Producto buscado: ${query}` });
};

module.exports = {
  getVendor,
  getVendorProduct
};
