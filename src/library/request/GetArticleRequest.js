export default class GetArticleRequest {
    async getArticle(articleName) {
        let url = "https://cms.nutritionfacts.io/articles?url=" + articleName;

        return await fetch(url)
            .then((response) => response.json())
            .then((response) => {
                return response;
            })
            .catch((error) => {
                throw error;
            });
    }
}