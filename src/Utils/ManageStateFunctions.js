


// The following methods are for state management ..



const ManageStateFunctions = {

    checkForDuplicates: (arrWorker, inputs) => {
        return -1 === arrWorker.findIndex((item) => {
            return item.id === inputs.id;
        });
    },

    newArrAfterRemove: (arrWorker, index) => {
        return arrWorker.filter((item, ind) => {
            return ind !== index;
        });
    },


    filterOrsort: (arrWorker, sortOrSearch, by) => {
        if (sortOrSearch === "sort") {
            switch (by) {
                // Array sorting methods operate on the original array and do not return a new array, (like prototype.filter for example), that's why I used a deep copy to the array and then perform actions..

                case "age":

                    // Spread syntax ..
                    const sortByAge = [...arrWorker];
                    return sortByAge.sort((a, b) => b[by] - a[by]);

                case "name":

                    // Spread syntax ..
                    const sortByName = [...arrWorker];
                    return sortByName.sort((a, b) => a.name.localeCompare(b.name));


                default:
                    return arrWorker;
            }
        }
        else if (sortOrSearch === "SearchIn") {

            const filterArr = arrWorker.filter((item) => {
                let testStringArr = item.name.toLowerCase();
                let testStringParams = by.toLowerCase();
                return testStringArr.startsWith(testStringParams);
            });
            // If there are no matches for the search, return empty array ..
            return filterArr.length === 0 ? [] : filterArr;
        }

        return arrWorker;



    }
}


export default ManageStateFunctions;