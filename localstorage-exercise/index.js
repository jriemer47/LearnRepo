(function() {
  'use strict';

  const favorites = {};

  const renderCars = function(cars) {
    const $tbody = $('tbody');

    $tbody.html('');

    for (const car of cars) {
      const $tdMake = $('<td>').text(car.make);
      const $tdModel = $('<td>').text(car.model);
      const $tdColor = $('<td>').text(car.color);
      const $tdPrice = $('<td>').text(car.price);

      const $tdFav = $('<td>').css('cursor', 'pointer');

      if (favorites[car.id]) {
        $tdFav.text('❤️');
      }
      else {
        $tdFav.text('💔');
      }

      $tdFav.on('click', () => {
        favorites[car.id] = !favorites[car.id];

        renderCars(cars);
      });

      const $tr = $('<tr>');

      $tr.append($tdMake);
      $tr.append($tdModel);
      $tr.append($tdColor);
      $tr.append($tdPrice);
      $tr.append($tdFav);

      $tbody.append($tr);
    }
  };

  const $xhr = $.ajax({
    method: 'get',
    url: 'https://api.myjson.com/bins/4sydf',
    dataType: 'json'
  });

  $xhr.done((data) => {
    renderCars(data);
  });
})();
