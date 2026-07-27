$(document).ready(function () {
  fetch(`json/plantillas.json?v=${Date.now()}`)
    .then((response) => response.json())
    .then((data) => {
      setTable("#plantillas-generales", data.generales);
      setTable("#plantillas-comisiones", data.comisiones);
    });

  fetch(`json/documentos.json?v=${Date.now()}`)
    .then((response) => response.json())
    .then((data) => {
      setTable("#circulares", data.circulares);
    });
});

function setTable(id, data) {
  $(id).DataTable({
    data: data,
    columns: [
      {
        data: "enlace",
        render: function (data, type, row) {
          return `<a target="_blank" href="${data}" class="btn-link">${row.nombre}</a>`;
        },
      },
    ],
    pageLength: 5,
    lengthMenu: [
      [5, 10, 25, 50, 100, -1],
      [5, 10, 25, 50, 100, "Todos"],
    ],
  });
}



