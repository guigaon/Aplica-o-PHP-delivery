<?php
namespace app\controllers;

use app\core\Controller;
use app\models\service\Service;
use app\core\Flash;
use app\models\service\pedidoService;
use app\util\utilService;
use app\models\service\ItemService;

class pedidoController extends Controller{
   private $tabela = "pedido";
   private $campo  = "id_pedido";
   
   public function __construct(){
	   $this->usuario = UtilService::getUsuario(); //nao deixa entrar se nao estiver logado
	   if(!$this->usuario){
		   $this->redirect(URL_BASE ."login");
		   exit;
		  
	   }
	}
   
    public function index(){
       $dados["lista"] = Service::lista($this->tabela); 
       $dados["view"]  = "pedido/Index";
       $this->load("template", $dados);
    }
    
    public function create(){
		$id_cliente = $this->usuario->id_cliente;
		$pedido = PedidoService::getPedidoNaoFinalizado($this->usuario->id_cliente);
        if(!$pedido){ //se nao existir pedido, cria um
			$id_pedido = Service::inserir(["id_cliente"=>$id_cliente, "data" =>hoje(), "hora" =>agora()], "pedido");
			$pedido = PedidoService::getPedido($id_pedido);
		}
		
		$dados["pedido"] = $pedido;
		$dados["itens"] = ItemService::listaPorPedido($pedido->id_pedido);
        $dados["view"] = "pedido/Create";
        $this->load("template", $dados);
    }
    
}