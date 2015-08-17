var getData = function get_data_for_graphs(){
  var d = [];
  for(var i = 2; i < 800; i++){
    var result = calc(i);
    d.push([i,result.length]);
  }
  return d;
};
var drawChart = function draw_google_chart(){
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'begining number');
  data.addColumn('number', '# of steps');
  data.addRows(getData());
  var options = {
    chart: {
      title: 'collatz-eral'
      ,subtitle: '# of steps for diffrent steps'
    }
    ,width: 450
    ,height: 500
  };
  var chart = new google.charts.Line(document.getElementById('linechart'));
  chart.draw(data, options);
};
google.load('visualization', '1.1', {packages: ['line']});
google.setOnLoadCallback(drawChart);
