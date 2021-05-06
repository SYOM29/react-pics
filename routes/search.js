const unsplash = require("../api/unsplash");

async function getImages(term)
{
    return await unsplash.get("/search/photos", {
        params: { query: term }
    });
}

module.exports = (app) => {
  app.get('/search/photos', async(req, res) => {
    const response = await getImages(req.query);
    res.send(response.data);
  });
}