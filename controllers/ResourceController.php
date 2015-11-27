<?php 

namespace app\controllers;

use Yii;
use yii\rest\ActiveController;
use app\models\Country;


class ResourceController extends ActiveController
{
    public $modelClass = 'app\models\Country';

    public function actionSearch()
    {
       /* $model = new Country();
        $model->code = 'AR';
        $model->name = 'Argentina';
        $model->population = 15000000;
        
        $model->save();*/
    }

    public function actionAdd()
    {
    	//$params = Yii::$app->request->post();
    	$model = new Country();

    	$codigo = Yii::$app->request->getBodyParam('code');
        $model->code = $codigo;
        $model->name = Yii::$app->request->getBodyParam('name');
        $model->population = Yii::$app->request->getBodyParam('population');

        $model->save();

        //throw new \yii\web\HttpException(404, 'codigo = '.$codigo);

    }
}

