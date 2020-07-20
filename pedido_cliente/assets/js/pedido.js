$(function(){
   
	$("#btnInserir").on("click", function(){
		var id_produto = $("#id_produto").val();
		var valor = $("#valor").val();
		var qtde = $("#qtde").val();
		
		$.ajax({
			url: base_url + "item/salvar/",
			type: "POST",
			dataType: "json",
			data:{
				id_produto: id_produto,
				id_pedido: id_pedido,
				qtde:qtde,
				valor:valor
				
			},
			success: function (data){
				lista_itens(data);
			
			}
			}); 
   });
   
   $("#produto").on("keyup", function(){
       var q  = $(this).val();
	   $.ajax({
		  url: base_url + "produto/buscar/" + q,
		  type: "POST",
		  dataType: "json",
		  data:{},
		  success: function (data){
				$("#produto").after('<div class="listaProdutos"></div>');
				   html = "";
				   var i;
					for (i = 0; i < data.length; i++) {		  
					  html +='<div class="si"><a href="javascript:;" onclick="selecionarProduto(this)"'
					  + 'data-id="' + data[i].id_produto +
					  '"data-nome="' + data[i].produto +
					   '" data-valor="' + data[i].valor + '">' +
					  data[i].produto + " - R$ " + data[i].valor + '</a></div>';
					  
					}
					$(".listaProdutos").html(html);
					$(".listaProdutos").show();
			   }
			}); 
   });
   

function lista_itens(data){    
    html = "<tr>";
    var total_entrada = 0.00;
    for(var i in data){ 
        total_entrada += parseFloat(data[i].valor);
        var j = parseInt(i)+1;
        html += '<td align="left">' + data[i].id_item  + '</td>' + 	
            '<td align="left">' + data[i].produto + '</td>' + 
            '<td align="left">' + data[i].valor + '</td>' + 
            '<td align="left">' + data[i].qtde + '</td>' +
        	'<td align="left">' + data[i].total + '</td>' +
			'<td align="center"><a href="javascript:;" onclick="return excluir_item(this)" data-entidade = "item" data-id="' + data[i].id_item + '"class="btn btn-outline-vermelho">Excluir</a></td></tr>';

     }
     
     $("#lista_itens").html(html);
    
}

function selecionarProduto(obj){
	var id = $(obj).attr("data-id");
	var nome = $(obj).attr("data-nome");
	var valor = $(obj).attr("data-valor");
	
	$(".listaProdutos").hide();
	$("#produto").val(nome);
	$("#id_produto").val(id);
	$("#valor").val(valor);
	$("#qtde").val(1);
}

function excluir_item(obj){
	var entidade  	= $(obj).attr('data-entidade');
	var id  		= $(obj).attr('data-id');	
	if(confirm('Deseja realmente excluir ?')){
			 $.ajax({
				  url:base_url + entidade +"/excluir/" + id + "/" + id_pedido,
				  type: "POST",
				  dataType: "json",
				  data:{},
				  success: function (data){
						lista_itens(data);

				 }
			});
	}
}

});
