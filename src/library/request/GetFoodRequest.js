export default class GetFoodRequest {
    async getFood(foodId) {
        let url = "https://api.nutritionfacts.io/food?foodId=" + foodId;

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