export default class SearchContextResolver {
    containsFood() {
        let path = window.location.pathname;

        return path && path.includes('food/');
    }

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

    getSearchTerm() {
        let parameters = new URLSearchParams(window.location.search);

        if (parameters && parameters.get("searchTerm")) {
            return parameters.get("searchTerm");
        }

        return "";
    }
}