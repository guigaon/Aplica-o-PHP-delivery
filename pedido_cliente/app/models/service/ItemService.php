<?php
namespace app\models\service;

use app\models\dao\itemDao;
use app\models\validacao\itemValidacao;

class ItemService{
	public static function listaPorPedido($id_pedido){
		$dao = new ItemDao();
		return $dao->listaPorPedido($id_pedido);
	
	}
	
	 public static function salvar($item, $campo, $tabela){
        $validacao = itemValidacao::salvar($item);
        return Service::salvar($item, $campo, $validacao->listaErros(), $tabela);
    }
	
    //valida se um pedido tem mais do mesmo produto
    public static function getItem($id_pedido, $id_produto) {
        $dao = new ItemDao();
        return $dao->getItem($id_pedido, $id_produto);
        
    }
}

?>