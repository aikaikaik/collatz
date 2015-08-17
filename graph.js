var getMax = function get_max_val_from_arr(arr){
  return arr.reduce(function(pval,val,i,arr){
    if(pval>val){return pval;}else{return val;}
  },-Infinity);
};
var getData = function get_data_for_graphs(){
  var d = [];
  for(var i = 2; i < 800; i++){
    var result = calc(i);
    d.push([i,result.length,getMax(result)]);
  }
  return d;
};
var drawChart = function draw_google_chart(){
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'begining number');
  data.addColumn('number', '# of steps');
  data.addColumn('number', 'max');
  data.addRows(getData());
  var options = {
    chart: {
      title: 'collatz-eral'
    }
    ,width: 450
    ,height: 500
    ,series: {
      0: {axis: 'steps'}
      ,1: {axis: 'max'}
    }
    ,axes: {
      y: {
        steps: {label: '# of steps'}
        ,max: {label: 'max num'}
      }
    }
  };
  var chart = new google.charts.Line(document.getElementById('linechart'));
  chart.draw(data, options);
};
google.load('visualization', '1.1', {packages: ['line']});
google.setOnLoadCallback(drawChart);
