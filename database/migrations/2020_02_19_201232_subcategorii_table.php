<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SubcategoriiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subcategorii', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('id_categorie');
            $table->string('nume');
            $table->string('poza');
            $table->text('descriere');
            $table->integer('pret');
            $table->string('adresa');
            $table->integer('telefon');
            $table->string('email');
            $table->timestamps();
      
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subcategorii');
    }
}
