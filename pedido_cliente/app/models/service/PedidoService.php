<?php
namespace app\models\service;

use app\models\validacao\pedidoValidacao;

class pedidoService{
    public static function salvar($pedido, $campo, $tabela){
        $validacao = PedidoValidacao::salvar($pedido);
        return Service::salvar($pedido, $campo, $validacao->listaErros(), $tabela);
    }
}

