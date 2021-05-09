const unsplash = require("../api/unsplash");
const unsplashConfigs = require('../config/unsplash');

async function getImages(query)
{
  console.log(query);
    return await unsplash.get("/search/photos", {
        params: 
        { 
          query: query.searchTerm, 
          page: unsplashConfigs.pageNumber,
          per_page: unsplashConfigs.perPage,
          order_by: query.order_by
        }
    });
}

module.exports = (app) => {
  app.get('/search/photos', async(req, res) => {
    const response = await getImages(req.query);
    res.send(response.data);
  });
}