export default (() => {
    return new Promise(async (resolve, reject) => {
        try {
            const photoUser = await fetch("https://picsum.photos/200");
            resolve(photoUser.url);
        } catch (error) {
            // Default image Url.. 
            resolve("https://cdn-icons-png.flaticon.com/512/149/149071.png");
        }
    })
})