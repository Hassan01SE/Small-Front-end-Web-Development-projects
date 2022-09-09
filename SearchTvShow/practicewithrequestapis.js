const form = document.querySelector('#form');
const div = document.querySelector('div');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const SearchTerm = form.elements.query.value;

    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${SearchTerm}`);
    console.log(res.data);
    makeImages(res.data);


})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const anchor = document.createElement('a');
            const img = document.createElement('IMG');
            const linkdirect = result.show.url;
            img.src = result.show.image.medium;
            console.log(img.src);
            img.onclick = function () {
                window.location.href = linkdirect;
            }


            div.append(img);


        }
    }
}