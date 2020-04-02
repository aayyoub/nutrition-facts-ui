export default class SearchContextResolver {
    getFoodId() {
        let pathParts = window.location.pathname.split('/');

        let foodIdIndex = 0;

        pathParts.forEach(function (part, index) {
            if (part === 'food') {
                foodIdIndex = index + 1;
            }
        });

        return pathParts[foodIdIndex];
    }
}