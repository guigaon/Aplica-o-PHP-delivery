<?php
namespace app\controllers;

use app\core\Controller;
use app\core\Flash;
use app\models\service\Service;
use app\models\service\itemService;

class ItemController extends Controller{
	private $tabela = "item";
	private $campo  = "id_item";
    
    public function salvar(){
        $item = new \stdClass();		
        $item->id_item       	= null;
        $item->id_produto       = $_POST['id_produto'];
        $item->id_pedido 		= $_POST['id_pedido'];
        $item->valor 			= $_POST['valor'];
        $item->qtde 			= $_POST['qtde'];
        $item->total 			= $item->valor * $item->qtde;
        
        Flash::setForm($item);
        if(itemService::salvar($item, $this->campo, $this->tabela)){
            $erro = -1;
            $msg = Flash::getMsg();
        }else{
            $erro = 1;
            $msg = Flash::getErro();            
        }
        
        //PedidoService::atualizarPedido($item->id_pedido);
        $lista = ItemService::listaPorPedido($item->id_pedido);
        echo json_encode(["erro" => $erro, "msg" => $msg, "lista" => $lista]);
        
    }
    
    public function excluir($id_item, $id_pedido){
        Service::excluir($this->tabela, $this->campo, $id_item);
        $lista = ItemService::listaPorPedido($id_pedido);
        echo json_encode($lista);
    }
}


?>