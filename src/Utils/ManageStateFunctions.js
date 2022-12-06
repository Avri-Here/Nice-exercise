
// The following methods are for state management ..

export default {
    
    checkForDuplicates: (arrWorker, inputs) => {
        return arrWorker.every((item) => {
            return item.Id !== inputs.Id;
        });
    },

    newArrAfterRemove: (arrWorker, index) => {
        return arrWorker.filter((item, ind) => {
            return ind !== index;
        });
    },

    filterBySearchParams: (arrWorker, searchParams) => {

        const filterArr = arrWorker.filter((item) => {
            let testStringArr = item.Name.toLowerCase();
            let testStringParams = searchParams.toLowerCase();
            return testStringArr.startsWith(testStringParams);
        });

        // If there are no matches for the search, return pointer to the original array unchanged ..
        return filterArr.length === 0 ? arrWorker : filterArr;

    },
    SortArray: (arrWorker, sortBy) => {

        // Array sorting methods operate on the original array and do not return a new array, (like prototype.filter for example), that's why I used a deep copy to the array and then perform actions..
        switch (sortBy) {
            case "Age":
                // Spread syntax ..
                const sortByAge = [...arrWorker];
                return sortByAge.sort((a, b) => b[sortBy] - a[sortBy]);

            case "Name":
                // Spread syntax ..
                const sortByName = [...arrWorker];
                return sortByName.sort((a, b) => a.Name.localeCompare(b.Name));

            default:
                return arrWorker;
        }

    }
}