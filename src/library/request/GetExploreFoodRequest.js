export default class GetExploreFoodRequest {
    async getFood() {
        let url = "https://api.nutritionfacts.io/explore";

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