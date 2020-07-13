<?php
namespace app\controllers;

use app\core\Controller;
use app\models\service\Service;

class ProdutoController extends Controller {
	
	//busca por letra inicial
	public function buscar ($q){
		$lista = Service::getLike("produto", "produto", $q, true);
		echo json_encode($lista);
		
		
	}
	
	
	
}


?>