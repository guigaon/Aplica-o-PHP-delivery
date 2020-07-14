<?php
namespace app\models\service;

use app\models\dao\PedidoDao;

class pedidoService{

	public static function getPedidoNaoFinalizado($id_cliente){
		$dao = new PedidoDao();
		return $dao->getPedidoNaoFinalizado($id_cliente);
		
		
	}
	
	public static function getPedido($id_cliente){
		$dao = new PedidoDao();
		return $dao->getPedido($id_cliente);
		
		
	}
}

