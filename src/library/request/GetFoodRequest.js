export default class GetFoodRequest {
    async getFood(foodId, servingSize) {
        if (!servingSize) {
            servingSize = 0;
        }

        //let url = "http://localhost:8080/food?foodId=" + foodId + "&servingSize=" + servingSize;
        let url = "https://api.nutritionfacts.io/food?foodId=" + foodId + "&servingSize=" + servingSize;

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