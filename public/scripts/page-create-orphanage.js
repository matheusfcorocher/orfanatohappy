//create map
const map = L.map("mapid").setView([-22.7323931, -47.6468506], 15);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

let marker;

//create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //pega o valor do input quando clicka no mapa
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);

})

// upload of photos

function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images');
    //  pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload'); //pega todos
    // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //verificar se esta vazio o campo, se sim, nao adicionar ao container de imagens
    const input = newFieldContainer.children[0];

    if (input.value == "") {
        return
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value = "";

    //  adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
}

function deletePhotoField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = "";
        return
    }

    // deletar o campo
    span.parentNode.remove();
}

function toggleSelect(event) {
    // verificar se sim ou nao
    //retirar a class .active(dos botoes)
    document.querySelectorAll('.button-select button').forEach((button) => button.classList.remove('active'));

    // colocar a class .active nesse botao clickado
    const button = event.currentTarget;
    button.classList.add('active');


    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;

}

function validate(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //validar se lat e lng estao preenchidos
    if (!lat && !lng) {
        event.preventDefault();
        alert("Seleciona um ponto no mapa");
    }
}