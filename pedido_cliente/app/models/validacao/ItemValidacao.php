<?php
namespace app\models\validacao;

use app\core\Validacao;

class ItemValidacao{
    public static function salvar($item){
        $validacao = new Validacao();
        
        $validacao->setData("id_produto", $item->id_produto);
        $validacao->setData("id_pedido", $item->id_pedido);
        $validacao->setData("valor", $item->valor);
        $validacao->setData("qtde", $item->qtde);
        
        //fazendo a validação
        $validacao->getData("id_produto")->isVazio();
        $validacao->getData("id_pedido")->isVazio();
        $validacao->getData("valor")->isVazio();
        $validacao->getData("qtde")->isVazio();
        
        return $validacao;
        
    }
}

