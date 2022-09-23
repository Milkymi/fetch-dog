document.addEventListener('DOMContentLoaded', () => {
  // количество загружаемых изображений
  const IMAGES_COUNT = 4;

  // ссылка для загрузки изображений
  const IMAGES_URL = `https://dog.ceo/api/breeds/image/random/${IMAGES_COUNT}`;

  // ссылка для загрузки списка пород
  const BREEDS_URL = "https://dog.ceo/api/breeds/list";

  // узел, в котором будет список изображений
  const imagesContainer = document.querySelector('.images');

  // узел, в котором будет список пород
  const breedsContainer = document.querySelector('.breeds');

  // узел кнопки обновления
  const button = document.querySelector('button');

  async function fetchAndRenderImages() {
    try {
      const res = await fetch(IMAGES_URL);
      const data =  await res.json();
      console.log(data);
      imagesContainer.textContent = "";
      data.message.map((item) => {
        const imagesItem = document.createElement("div");
        imagesItem.className = 'images__item';
        const images = document.createElement("img");
        images.src = item;
        imagesItem.append(images);
        imagesContainer.append(imagesItem); 
    });
    } catch (error) {
      console.log(error.message);
    }
  }

  fetchAndRenderImages();

  async function fetchBreedsList() {
    try{
        const res = await fetch(BREEDS_URL);
        const data =  await res.json();
        console.log(data);
        breedsContainer.textContent = "";
        data.message.map((item) => {
        const breedsItem = document.createElement("li")
        breedsItem.textContent = item;
        breedsContainer.append(breedsItem); 
    });
    } catch (error) {
      console.log(error.message);
    }

  }

  fetchBreedsList();


  button.addEventListener('click', () => {
    fetchAndRenderImages();
  });



});
