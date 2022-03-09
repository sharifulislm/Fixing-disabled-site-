const elementById = (id) => {
  document.getElementById(id);
};

const handleSearch = () => {
  // fixing document 
  const keyword = document.getElementById("keyword");
  const keywordValue = keyword.value;
  const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${keywordValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showArtists(data));
  keyword.value = '';

};

const showArtists = (data) => {
  console.log(data.artists);
  const artistContainer = document.getElementById("artist");
  // fixing space in frome ? mark
  data ? .artists ? .forEach((artist) => {
    console.log(artist.idArtist)
    // Im fixing here 
    const div = document.createElement("div");
    div.classList.add("artist-card");
    div.innerHTML = `<div class="image-container">
    <div class="image-container-inner">
      <img src="${artist.strArtistThumb}" alt=""/>
    </div>
  </div>
  <div class="info-container">
    <h1>${artist.strArtist}</h1>
    <p>Country: ${artist.strCountry}</p>
    <p>Style: ${artist.strGenre}</p>
  </div>
  <button class="album-button">
    <i class="fa-solid fa-compact-disc"></i>
    <p onclick="fetchAlbums('${artist.idArtist}')" class="button-title">Albums</p>
  </button>`;
    artistContainer.appendChild(div);
  });
};

const fetchAlbums = (id) => {
  // Im fixing here also 
  const url = `https://theaudiodb.com/api/v1/json/2/album.php?i=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showAlbum(data));
  const artistContainer = document.getElementById("artist");
  artistContainer.innerHTML = "";
};

const showAlbum = (data) => {
  // console.log(data);
  const albumContainer = document.getElementById("albums");
  // Im fixing here also 
  data.album.forEach((item) => {
    // console.log(item);
    const div = document.createElement("div");
    div.classList.add("album");
    // Im fixing here also 
    div.innerHTML = `
        <div class="album-image-container">
     
          <img src="${item.strAlbumThumb}"
            alt=""
          />
        </div>
        <div class="album-name">
          <h3>${item.strAlbum}</h3>
        </div>
      `;

    albumContainer.appendChild(div);
  });
};