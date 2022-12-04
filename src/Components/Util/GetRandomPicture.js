export default (() => {
    return new Promise(async (resolve, reject) => {
        try {
            const photoUser = await fetch("https://picsum.photos/200");
            resolve(photoUser.url);
        } catch (error) {
            reject(error);
        }
    })
})