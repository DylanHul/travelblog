
  function drawMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ]);

    var options = {};
    options['dataMode'] = 'regions';

    var container = document.getElementById('regions_div');
    var geomap = new google.visualization.GeoMap(container);

    geomap.draw(data, options);
  };

  module.exports = drawMap
