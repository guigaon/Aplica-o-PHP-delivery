$(function() {	
	//Menu mobile
	
	$('.mobmenu').click (function(){
	$('.menu-lateral').slideToggle();
	$(this).toggleClass('active');
		return false;
	});	
	
	$('.filtro').click (function(){
			$('.mostraFiltro').slideToggle();
			$(this).toggleClass('active');
				return false;
	});
	
		
	
  
 //grafico bar
   var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Janeiro", "Fervereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
          datasets: [{
            data: [15339, 21345, 18483, 24003, 23489, 24092, 10034],
            lineTension: 0,
            backgroundColor: '#607bd7',
            borderColor: '#607bd7',
            borderWidth: 1,
            pointBackgroundColor: '#607bd7',
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          },
          legend: {
            display: false,
          }
        }
      });
	  
	//Grafico pizza 01
	var ctx = document.getElementById("myChart2");
		 var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ["Lucro","Gasto"],
          datasets: [{
            data: [34339, 12345],
            lineTension: 0,
            backgroundColor: ['#0C99F1','#FF7373'],
            borderColor: '#2D3244',
            borderWidth: 1,
            pointBackgroundColor: '#2D3244',
          }]
        }
		
      });
	  
	    
 
 });