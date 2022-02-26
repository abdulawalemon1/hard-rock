//1.get Input Value
//2.button event handler
//3. error handling for invalid inputs
const resultSection = document.getElementById('search-result-section');
const searchButton = () => {
    console.log('Button clicked');
    const input = document.getElementById('search-field');
    let inputValue = input.value;
    // console.log(inputValue);


    fetch(`https://api.lyrics.ovh/suggest/${inputValue}`)
        .then(res => res.json())
        .then(data => displaySongs(data.data))

}
const displaySongs = (songs) => {
    for (const song of songs) {
        // console.log(song);
        console.log(song.title);
        console.log('Album by ', song.artist.name);

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="single-result row align-items-center my-3 p-3">
            <div class="col-md-9">
                <h3 class="lyrics-name">${song.title}</h3>
                <p class="author lead">Album by <span>${song.artist.name}</span></p>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button class="btn btn-success">Get Lyrics</button>
            </div>
        </div>
        `;
        resultSection.appendChild(div);

    }
}

