Object.defineProperty(Ciudad, 'arrayCiudades', {
  get: function () {
    var arrayCiudades = new Array();
    for (var [key, value] of Object.entries(Ciudad)) {
      arrayCiudades.push(value);
    }
    return arrayCiudades;
  }
});

Object.defineProperty(Ciudad, 'arraySort', {
  get: function (array) {
    return Ciudad.arraySort = getArraySort;
  }
});

function getArraySort(array) {
  let arraySort = new Array();
  array.forEach(function (element) {
    let elementCapitalize = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    arraySort.push(elementCapitalize);
  });
  return arraySort.sort();
}

//UI
function UIShowArray(array, caption) {
  const contenido = document.querySelector('#content');
  var div = document.createElement('div');
  div.innerHTML = `
    <h4 class="text-danger">${caption}</h4>
    `;
  contenido.appendChild(div);

  array.forEach(function (element) {
    var label = document.createElement('label');
    label.className = 'alert alert-success';
    label.innerHTML = `
            <div class='card-header mt-2'> 
                    <strong>${element}</strong>
            </div>           
        `;
    contenido.appendChild(label);
  });
}

//EVENTOS DEL DOM
document.getElementById('nombre-ciudad-form')
  .addEventListener('submit', function (e) {

    if (Ciudad.barcelona === '' || Ciudad.madrid === ''
      || Ciudad.valencia === '' || Ciudad.malaga === ''
      || Ciudad.cadiz === '' || Ciudad.santander === '') {
      e.preventDefault();
      return;
    }

    if (isFormDisabled()) {
      UIShowArray(Ciudad.arraySort(Ciudad.arrayCiudades), 'Fase 2');

      e.preventDefault();
    }
  });



