import getRandomPicture from "../../Utils/GetRandomPicture";
import ManageStateFunctions from "../../Utils/ManageStateFunctions";

test('getRandomPicture', async () => {
    const data = await getRandomPicture();
    expect.stringContaining(data);
});



test('checkForDuplicates', () => {
    const test1 = ManageStateFunctions.checkForDuplicates([{ Id: 1 }, { Id: 2 }, { Id: 3 }], { Id: 6 });
    expect(test1).toBe(true);
    const test2 = ManageStateFunctions.checkForDuplicates([{ Id: 1 }, { Id: 2 }, { Id: 3 }], { Id: 3 });
    expect(test2).toBe(false);
});


test('newArrAfterRemove', () => {
    const test1 = ManageStateFunctions.newArrAfterRemove([1, 2, 3, 4], 2);
    expect(test1).toStrictEqual([1, 2, 4]);
    const test2 = ManageStateFunctions.newArrAfterRemove([1, 2, 3, 4], 3);
    expect(test2).toStrictEqual([1, 2, 3]);

});



test('SortArray', () => {
    const sortByName = ManageStateFunctions.SortArray([{ Name: "Avi" }, { Name: "Moy" }, { Name: "RONI" }, { Name: "ALY" }], "Name");
    expect(sortByName).toStrictEqual([{ Name: "ALY" }, { Name: "Avi" }, { Name: "Moy" }, { Name: "RONI" }]);

    const sortByAge = ManageStateFunctions.SortArray([{ Age: 4 }, { Age: 8 }, { Age: 9 }, { Age: 1 }], "Age");
    expect(sortByAge).toStrictEqual([{ Age: 9 }, { Age: 8 }, { Age: 4 }, { Age: 1 }]);

    const defaultArr = ManageStateFunctions.SortArray([{ Name: "Avi" }, { Name: "Moy" }, { Name: "RONI" }, { Name: "ALY" }], "foo");
    expect(defaultArr).toBe(defaultArr);

    const sortBySearchParams = ManageStateFunctions.SortArray([{ Name: "Avi" }, { Name: "Moy" }, { Name: "RONI" }, { Name: "ALY" }], "SearchIn", "a");
    expect(sortBySearchParams).toStrictEqual([{ Name: "Avi" }, { Name: "ALY" }]);

});