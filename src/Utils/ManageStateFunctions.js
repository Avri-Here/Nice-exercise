


// The following methods are for state management ..



const ManageStateFunctions = {

    checkForDuplicates: (arrWorker, inputs) => {
        return -1 === arrWorker.findIndex((item) => {
            return item.Id === inputs.Id;
        });
    },

    newArrAfterRemove: (arrWorker, index) => {
        return arrWorker.filter((item, ind) => {
            return ind !== index;
        });
    },


    SortArray: (arrWorker, sortOrSearch, optional) => {

        // Array sorting methods operate on the original array and do not return a new array, (like prototype.filter for example), that's why I used a deep copy to the array and then perform actions..

        switch (sortOrSearch) {
            case "Age":
                // Spread syntax ..
                const sortByAge = [...arrWorker];
                return sortByAge.sort((a, b) => b[sortOrSearch] - a[sortOrSearch]);


            case "Name":
                // Spread syntax ..
                const sortByName = [...arrWorker];
                return sortByName.sort((a, b) => a.Name.localeCompare(b.Name));

            // Sort by search ..
            case "SearchIn":
                const filterArr = arrWorker.filter((item) => {
                    let testStringArr = item.Name.toLowerCase();
                    let testStringParams = optional.toLowerCase();
                    return testStringArr.startsWith(testStringParams);
                });


                // If there are no matches for the search, return empty array ..
                return filterArr.length === 0 ? [] : filterArr;

            default:
                return arrWorker;
        }

    }
}


export default ManageStateFunctions;