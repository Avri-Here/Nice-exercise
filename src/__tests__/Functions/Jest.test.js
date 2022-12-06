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

test('filterBySearchParams', () => {
    const test1 = ManageStateFunctions.filterBySearchParams([{ Name: "Avi" }, { Name: "Moy" }, { Name: "RONI" }, { Name: "ALY" }], "A");
    expect(test1).toStrictEqual([{ Name: "Avi" }, { Name: "ALY" }]);
    const test2 = ManageStateFunctions.filterBySearchParams([{ Name: "Avi" }, { Name: "Moy" }, { Name: "RONI" }, { Name: "ALY" }], "m");
    expect(test2).toStrictEqual([{ Name: "Moy" }]);
    const test3 = ManageStateFunctions.filterBySearchParams([{ Name: "Avi" }, { Name: "Moy" }, { Name: "RONI" }, { Name: "ALY" }], "T");
    expect(test3).toBe(test3);

});


test('SortArray', () => {
    const test1 = ManageStateFunctions.SortArray([{ Name: "Avi" }, { Name: "Moy" }, { Name: "RONI" }, { Name: "ALY" }], "Name");
    expect(test1).toStrictEqual([{ Name: "ALY" }, { Name: "Avi" }, { Name: "Moy" }, { Name: "RONI" }]);

    const test2 = ManageStateFunctions.SortArray([{ Age: 4 }, { Age: 8 }, { Age: 9 }, { Age: 1 }], "Age");
    expect(test2).toStrictEqual([{ Age: 9 }, { Age: 8 }, { Age: 4 }, { Age: 1 }]);

    const test3 = ManageStateFunctions.SortArray([{ Name: "Avi" }, { Name: "Moy" }, { Name: "RONI" }, { Name: "ALY" }], "foo");
    expect(test3).toBe(test3);

});