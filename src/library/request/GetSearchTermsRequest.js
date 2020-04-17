export default class GetSearchTermsRequest {
    async getSearchTerms(searchTerm) {
        let url = "https://api.nutritionfacts.io/search/" + searchTerm;

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