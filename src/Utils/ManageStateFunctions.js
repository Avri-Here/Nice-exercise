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

        return filterArr.length === 0 ? arrWorker : filterArr;

    },
    SortArray: (arrWorker, sortBy) => {
        switch (sortBy) {
            case "Age":
                const sortByAge = [...arrWorker];
                return sortByAge.sort((a, b) => b[sortBy] - a[sortBy]);

            case "Name":
                const sortByName = [...arrWorker];
                return sortByName.sort((a, b) => a.Name.localeCompare(b.Name));

            default:
                return arrWorker
        }

    }
}