import getRandomPicture from "../../Utils/GetRandomPicture";
import ManageStateFunctions from "../../Utils/ManageStateFunctions";

test('getRandomPicture', async () => {
    const data = await getRandomPicture();
    expect.stringContaining(data);
});



test('checkForDuplicates', () => {
    const test1 = ManageStateFunctions.checkForDuplicates([{ id: 1 }, { id: 2 }, { id: 3 }], { id: 6 });
    expect(test1).toBe(true);
    const test2 = ManageStateFunctions.checkForDuplicates([{ id: 1 }, { id: 2 }, { id: 3 }], { id: 3 });
    expect(test2).toBe(false);
});


test('newArrAfterRemove', () => {
    const test1 = ManageStateFunctions.newArrAfterRemove([1, 2, 3, 4], 2);
    expect(test1).toStrictEqual([1, 2, 4]);
    const test2 = ManageStateFunctions.newArrAfterRemove([1, 2, 3, 4], 3);
    expect(test2).toStrictEqual([1, 2, 3]);

});



test('filterOrsort', () => {
    const sortByName = ManageStateFunctions.filterOrsort([{ name: "Avi" }, { name: "Moy" }, { name: "RONI" }, { name: "ALY" }], "sort", "name");
    expect(sortByName).toStrictEqual([{ name: "ALY" }, { name: "Avi" }, { name: "Moy" }, { name: "RONI" }]);

    const sortByAge = ManageStateFunctions.filterOrsort([{ age: 4 }, { age: 8 }, { age: 9 }, { age: 1 }], "sort", "age");
    expect(sortByAge).toStrictEqual([{ age: 9 }, { age: 8 }, { age: 4 }, { age: 1 }]);

    const defaultArr = ManageStateFunctions.filterOrsort([{ name: "Avi" }, { name: "Moy" }, { name: "RONI" }, { name: "ALY" }], "SearchIn", "foo");
    expect(defaultArr).toBe(defaultArr);

    const sortBySearchParams = ManageStateFunctions.filterOrsort([{ name: "Avi" }, { name: "Moy" }, { name: "RONI" }, { name: "ALY" }], "SearchIn", "a");
    expect(sortBySearchParams).toStrictEqual([{ name: "Avi" }, { name: "ALY" }]);

});