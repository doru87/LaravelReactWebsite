<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Subcategorii;
class SearchController extends Controller
{
    public function show($cuvant){
        $output = '';

        $date = Subcategorii::where('nume','like', '%' . $cuvant . '%')->get();

    foreach($date as $data){

         $output .= '
            <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="single_explorer" id="'.$data->nume.'" data-value="'.$data->nume.'">
                    <div class="thumb">
                        <img src="\images\backend_images\subcategorii'.$data->poza.'" alt=""></img>
                    </div>
                    <div class="explorer_bottom d-flex">
                        <div class="icon">
                            <i class="flaticon-food"></i>
                        </div>
                        <div class="explorer_info">
                            <h3><a href="/subcategorie/'.$data->nume.'">'.$data->nume.'</a></h3>
                            <p>'.$data->adresa.'</p>
                            <ul>
                                <li> <i class="fa fa-phone"></i>
                                '.$data->telefon.'</li>
                            <li><i class="fa fa-envelope"></i>'.$data->nuemailme.'</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>';
        
        }
          return response()->json(['output' => $output]);
    }

}
