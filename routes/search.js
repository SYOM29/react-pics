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

async function listTopics()
{
  return await unsplash.get("/topics", {
    params: 
    {
      page: unsplashConfigs.pageNumber,
      per_page: unsplashConfigs.perPage,
      order_by: unsplashConfigs.orderBy
    }
  });
}

async function getPhotosForTopic(id_or_slug)
{
  return await unsplash.get(`/topics/${id_or_slug}/photos`, {
    params: 
    {
      id_or_slug: id_or_slug,
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

  app.get('/topics', async(req, res) => {
    const response = await listTopics();
    res.send(response.data);
  });

  app.get('/topics/photos', async(req, res) => {
    const response = await getPhotosForTopic(req.query.id_or_slug);
    res.send(response.data);
  });
}