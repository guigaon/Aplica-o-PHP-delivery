$(function(){
   
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
					  'data-nome="' + data[i].produto +
					   '" data-valor="' + data[i].preco + '">' +
					  data[i].produto + " - R$ " + data[i].preco + '</a></div>';
					  
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
	var preco = $(obj).attr("data-valor");
	
	$(".listaProdutos").hide();
	$("#produto").val(nome);
	$("#id_produto").val(id);
	$("#preco").val(preco);
	$("#qtde").val(1);
	$("#qtde").focus();
}
