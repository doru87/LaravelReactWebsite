<?php

namespace App\Http\Controllers;
use App\Categorii_Populare;
use App\Poze_Subcategorii;
use App\Toate_Categoriile;
use App\Subcategorii;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

class indexController extends Controller
{
    public function index() {
        $categorii = Categorii_Populare::all();
            return response()->json(['categorii' => $categorii]);
    }

    public function displayMinMaxPrice($id){
        $subcategorii = Subcategorii::where('id_categorie',$id)->get();
        $pret_minim = Subcategorii::where('id_categorie',$id)->min('pret');
        $pret_maxim = Subcategorii::where('id_categorie',$id)->max('pret');

        $collection = new Collection(['min' => $pret_minim, 'max' => $pret_maxim, 'subcategorii' => $subcategorii]);
            return response()->json(['minmaxprice' => $collection]);       
    }

    public function changeValueSlider(Request $request,$id){
        $pret_minim = $request->datele_mele[0];
        $pret_maxim = $request->datele_mele[1];

        $rezultat = Subcategorii::where('id_categorie',$id)->whereBetween('pret', [$pret_minim, $pret_maxim])->get();
            return response()->json(['rezultat' => $rezultat]);
    }

    public function diplayBackgroundImage($id){
        $imagineBackground = Toate_Categoriile::where('id',$id)->value('poza_subcategorie');
            return response()->json(['imagineBackground' => $imagineBackground]);
    }

    public function viewSubcategorii ($id) {
        $subcategorii = Subcategorii::where('id_categorie',$id)->get();
            return response()->json(['subcategorii' => $subcategorii]);
    }

    public function viewSubcategorie($nume) {
        $subcategorie = Subcategorii::where('nume',$nume)->first();
            return response()->json(['subcategorie' => $subcategorie]);
    }
    public function moreCategories(){
        $output = '';
        $maimultecategorii = DB::table('toate_categoriile')->leftJoin('categorii_populare','toate_categoriile.id','=','categorii_populare.id')->whereNull('categorii_populare.id')->select('toate_categoriile.nume_categorie','toate_categoriile.poza_categorie','toate_categoriile.id')->get();
        foreach($maimultecategorii as $categorie){
            $output .= '<div class="col-xl-3 col-md-4 col-lg-3">
            <div class="single_catagory">
                <div class="thumb">
                    <img src="images/backend_images/categorii/'.$categorie->poza_categorie.'" alt="">
                </div>
                <div class="hover_overlay">
                    <div class="hover_inner">
                        <a href="/subcategorii/'.$categorie->id.'"><h4>'.$categorie->nume_categorie.'</h4></a>
                    
                    </div>
                </div>
                </div>
            </div>';
           
           }
            return response()->json(['output' => $output]);
    }

    public function diplayGridList($nume){
        $id_subcategorie = Subcategorii::where('nume',$nume)->pluck('id');
        $poze = Poze_Subcategorii::where('id_subcategorie',$id_subcategorie)->get();
        return response()->json(['poze_subcategorii' => $poze]);
    }
    
}
