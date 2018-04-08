(function($) {
  google.load("visualization", "1", {
    packages: ["corechart"]
  });
  google.setOnLoadCallback(drawChart);

  function drawChart() {
    var skillData = google.visualization.arrayToDataTable([
        ['Lang', 'Ability'],
        ['JavaScript', 8],
        ['Node.js', 7],
        ['Objective-C', 6],
        ['Linux', 2],
        ['Learning', 1]
      ]),
      intrstData = google.visualization.arrayToDataTable([
        ['Stuff', 'Stength'],
        ['Technology', 8],
        ['Startup', 6],
        ['Piano', 4]
      ]);

    var skillChart = new google.visualization.PieChart(document.getElementById('skillPie')),
      interestingChart = new google.visualization.PieChart(document.getElementById('intrstPie'));
    skillChart.draw(skillData);
    interestingChart.draw(intrstData);
  }
})(jQuery);
