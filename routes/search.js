const unsplash = require("../api/unsplash");
const unsplashConfigs = require('../config/unsplash');

async function getImages(term)
{
    return await unsplash.get("/search/photos", {
        params: 
        { 
          query: term, 
          page: unsplashConfigs.pageNumber,
          per_page: unsplashConfigs.perPage,
          order_by: unsplashConfigs.orderBy
        }
    });
}

module.exports = (app) => {
  app.get('/search/photos', async(req, res) => {
    const response = await getImages(req.query);
    res.send(response.data);
  });
}