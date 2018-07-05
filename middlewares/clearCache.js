const { clearHash  } = require('../services/cache');

module.exports = async function(req, res, next) {
    // wait for the request handler to finish then clear cache.
    await next();

    clearHash(req.user.id);
}
