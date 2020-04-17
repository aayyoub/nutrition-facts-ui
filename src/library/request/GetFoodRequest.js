export default class GetFoodRequest {
    async getFood(foodName, servingSize) {
        if (!servingSize) {
            servingSize = 0;
        }

        let url = "https://api.nutritionfacts.io/food/" + foodName + "/" + servingSize;

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