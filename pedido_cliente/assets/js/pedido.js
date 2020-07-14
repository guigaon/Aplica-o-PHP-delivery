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
				console.log(data);
			
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
});

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
