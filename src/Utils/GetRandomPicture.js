

// I return a random image link ..

const GetRandomPicture = (() => {
    return new Promise(async (resolve) => {
        try {
            const photoUser = await fetch("https://picsum.photos/200");
            resolve(photoUser.url);
        } catch (error) {
            // Default image Url.. 
            resolve("https://cdn-icons-png.flaticon.com/512/149/149071.png");
        }
    })
})


export default GetRandomPicture;