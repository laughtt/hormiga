



function limpiar(){
  $(".efecto_lateral").removeClass("abrir");
  $(".efecto_lateral").addClass("cerrar");
  $(".data").hide();
  $(".gigantografia").fadeIn();
  $(".p_titulo").html('');
  $(".p_descripcion").html('');
  $(".p_list").html('');
  $("#close").attr("src","");
  $(".btn_regresar").html("");
}

function limpiar2(){
  $(".efecto_abajo").removeClass("abrir_abajo");
  $(".efecto_abajo").addClass("cerrar_abajo");
  $(".imagenes").removeClass("ocultar");
  $(".imagenes").addClass("aparecer");
  $(".efecto_abajo").html("");
}

$("html").click(function(event) {

  limpiar();
  limpiar2();

});



$("#fuera_").click(function(e) {

  e.stopPropagation();

});


$("#1").click(function(e) {

  e.stopPropagation();
  
  $(".efecto_lateral").removeClass("cerrar");
  $(".efecto_lateral").addClass("abrir");
  $(".p_titulo").html('Banner');
  $(".p_descripcion").html('Uno de los materiales más utilizados en el ambito publicitario tomando en cuenta la utilidad requerida, como lo son:');
  $(".p_list").html('· Banderolas <br>· Bastidores<br>· Cuadros<br>· Vallas<br>· Avisos<br>· Cajas Luminarias<br>· Roller Screen');
  $(".btn_regresar").append("<img width='45px' src='background/iconos/retroceder.png' id='close'>");
  $(".data").fadeIn(1000);
  $(".gigantografia").fadeOut();
  cerrar();
});

$("#2").click(function(e) {
  e.stopPropagation();
  
  $(".efecto_lateral").removeClass("cerrar");
  $(".efecto_lateral").addClass("abrir");
  $(".p_titulo").html('Banner Blackaout');
  $(".p_descripcion").html('Un material que tiene la misma utilidad que el banner pero con un agregado util que es el no traslucir la luz, esenciales para:');
  $(".p_list").html('· Banderolas <br>· Bastidores<br>· Cuadros<br>· Vallas<br>· Avisos<br>· Cajas Luminarias<br>· Roller Screen<br>· Cerramientos');
  $(".btn_regresar").append("<img width='45px' src='background/iconos/retroceder.png' id='close'>");
  $(".data").fadeIn(1000);
  $(".gigantografia").fadeOut();
  cerrar();
});

$("#3").click(function(e) {
  e.stopPropagation();
  
  $(".efecto_lateral").removeClass("cerrar");
  $(".efecto_lateral").addClass("abrir");
  $(".p_titulo").html('Vinil');
  $(".p_descripcion").html('La especialidad de este material es ser autoadhesivo con un acabado brillante o mate para una calidad optima de impresión fotográfica, especial para: ');
  $(".p_list").html('· Decoraciones internas y externas<br>· Señaléticas<br>· Recubirmientos de muebles<br>· Brandeo Vehicular<br>· Sticker para casi todaslas superficies');
  $(".btn_regresar").append("<img width='45px' src='background/iconos/retroceder.png' id='close'>");
  $(".data").fadeIn(1000);
  $(".gigantografia").fadeOut();
  cerrar();
});

$("#4").click(function(e) {
 e.stopPropagation();
 $(".efecto_lateral").removeClass("cerrar");
 $(".efecto_lateral").addClass("abrir");
 $(".p_titulo").html('Vinil Blackaout');
 $(".p_descripcion").html('Material autoadhesivo preferiblemente para superficies que querramos tapar en su totalidad, especial para:');
 $(".p_list").html('· Vitrinas<br>· Decoraciones internas y externas<br>· Puertas de Vidrio<br>· Ventanales<br>· Lunas o Cristales');
 $(".btn_regresar").append("<img width='45px' src='background/iconos/retroceder.png' id='close'>");
 $(".data").fadeIn(1000);
 $(".gigantografia").fadeOut();
 cerrar();
});

$("#5").click(function(e) {
 e.stopPropagation();
 $(".efecto_lateral").removeClass("cerrar");
 $(".efecto_lateral").addClass("abrir");
 $(".p_titulo").html('Microperforador');
 $(".p_descripcion").html('Es un material autoadhesivo con microperforaciones circulares para ofrecer una impresión traslúcida en función de visión a un solo sentido, es decir: En vitrina logras una visión de adentro para afuera pero no de afuera para adentro, por ende es especial para:');
 $(".p_list").html('· Vitrinas<br>· Lunas<br>· Ventanales<br>· Lunas Vehiculares<br>· Decoración externa de fachadasde vidrio');
 $(".btn_regresar").append("<img width='45px' src='background/iconos/retroceder.png' id='close'>");
 $(".data").fadeIn(1000);
 $(".gigantografia").fadeOut();
 cerrar();
});

$("#6").click(function(e) {
  e.stopPropagation();
  
  $(".efecto_lateral").removeClass("cerrar");
  $(".efecto_lateral").addClass("abrir");
  $(".p_titulo").html('Backligth');
  $(".p_descripcion").html('Este material ofrece uno de los mejores acabados en cuanto a resoluciones y colores, hecha especialmente para avisos luminosos de muy alta resolucion lo cual es necesario para decoraciones internas, tales como:');
  $(".p_list").html('· Cajas Luminosas<br>· Señalizaciones con luminaria<br>· Cuadros Luminosos<br>· Displays Modulares');
  $(".btn_regresar").append("<img width='45px' src='background/iconos/retroceder.png' id='close'>");
  $(".data").fadeIn(1000);
  $(".gigantografia").fadeOut();

cerrar();

});

function cerrar(){
$("#close").click(function(e) {
 e.stopPropagation();
 limpiar();
});
}

function cerrar_2(){
 $("#cerrar_abajo").click(function(e) {
 e.stopPropagation();
 limpiar2();
}); 
}

$("#ab_1").click(function(e) {
  e.stopPropagation();
  $(".efecto_abajo").html("");
  $(".efecto_abajo").removeClass("cerrar_abajo");
  $(".efecto_abajo").addClass("abrir_abajo");
  $(".imagenes").removeClass("aparecer");
  $(".imagenes").addClass("ocultar");
  $(".efecto_abajo").append(' <div class="col-md-6"><div class="co-lg-12 h1_tarjeta" style="padding: 0px 15px"><h1>TARJETAS <br>PERSONALES</h1></div><div class="col-sm-7  p_tarjeta"><p>Impresión de tarjetas personales a full color en cartulinas finas impresas alta calidad con gran detalle. Imprimimos couche y otros papeles. Se imprimen ambas caras, tenemos cartulinas ecológicas, kimberly, fedrigoni, favini, couche plastificado mate, cartulina hilo y opalina. Tenemos distintos tipos de aplicaciones para las tarjetas, tales como:</p></div><div class="col-sm-5 p_tarjeta"><p>· Laminados Mate o Brillante <br>· Barnizado UV con reserva <br>· Sectorizado UV <br>· Repujado <br>· Boleados <br>· Troquelados <br>· Pavonadas</p></div></div><div  class="col-md-5 img_tarjeta"  style=" margin-top: 20px;padding:0px 30px" align="center"><div style="clear: both;"></div><div class="col-xs-4"><img src="background/impresion/t9.png" class="img-responsive"></div><div class="col-xs-4"><img src="background/impresion/t_1.png" class="img-responsive"></div><div class="col-xs-4"><img src="background/impresion/t2.png" class="img-responsive"></div><div class="col-xs-4"><img src="background/impresion/t3.png" class="img-responsive"></div><div class="col-xs-4"><img src="background/impresion/t4.png" class="img-responsive"></div><div class="col-xs-4"><img src="background/impresion/t5.png" class="img-responsive"></div><div class="col-xs-4"><img src="background/impresion/t6.png" class="img-responsive"></div><div class="col-xs-4"><img src="background/impresion/t7.png" class="img-responsive"></div><div class="col-xs-4"><img src="background/impresion/t8.png" class="img-responsive"></div></div><div align="right" class="cerrar_2" style="top: 0;right:0;position: absolute;width: 100%;cursor: pointer ;margin-right:20px;margin-top:20px"><img  width="45px" src="background/iconos/abajo.png" id="cerrar_abajo" ></div> ');
  cerrar_2();

});

$("#ab_2").click(function(e) {
  e.stopPropagation();
  $(".efecto_abajo").html("");
  $(".efecto_abajo").removeClass("cerrar_abajo");
  $(".efecto_abajo").addClass("abrir_abajo");
   $(".imagenes").removeClass("aparecer");
  $(".imagenes").addClass("ocultar");
  $(".efecto_abajo").append('<div class="volante_img" style=""><img src="background/volante/volante.png" class="img-responsive"></div><div class="col-md-4 col-sm-12 col-xs-12"></div><div class="col-md-8 col-sm-12 col-xs-12 volantes" style="padding: 0px 30px;"><h1>VOLANTES <br> FLYERS</h1> <p>Ofrecemos el servicio de imprenta OffSet para todo tipo de material publicitario como volantes, flyers, folletos, tripticos, dipticos, de alto impacto para un público masivo, en diversos papeles y gramajes, Impresos en OffSet de alta calidad. <br><br>Tambien brindamos el mejor servicio de impresión para diversos materiales publicitarios aplicado para todo tipo de empresa, PYME, y modelos de negocio o rubros, salones de belleza, dulcerias, ferreterías, venta de autos, show rooms, agencias BTL, mecánicas, estudios fotográficos. <br><br>Impresos en Papel Couche de 115 gramos. Tamaños de volantes full color A6 (1/4 de hoja A4/Oficio), A5 (1/2 hoja A4/Oficio) y A4/Oficio completo</p></div> <div align="right" class="cerrar_2" style="top: 0;right:0;position: absolute;width: 100%;cursor: pointer ;margin-right:20px;margin-top:20px"><img  width="45px" src="background/iconos/abajo.png" id="cerrar_abajo" ></div>')
cerrar_2();
});

$("#ab_3").click(function(e) {
  e.stopPropagation();
  $(".efecto_abajo").html("");
  $(".efecto_abajo").removeClass("cerrar_abajo");
  $(".efecto_abajo").addClass("abrir_abajo");
   $(".imagenes").removeClass("aparecer");
  $(".imagenes").addClass("ocultar");
  $(".efecto_abajo").append('<div class="volante_img" style=""><img src="background/etiquetas/etiqueta.png" class="img-responsive"></div><div class="col-md-4 col-sm-12 col-xs-12"></div><div class="col-md-8 col-sm-12 col-xs-12 volantes" style="padding: 0px 30px;"><h1>ADHESIVOS <br>ETIQUETAS</h1> <p>Impresión de stickers adhesivos y etiquetas en pliegos a full color en papel Couche adhesivo, papel adhesivo mate, vinil adhesivo transparente, vinil blanco, vinil de colores solidos.Tambien ofrecemos el servicio de semi-corte de adhesivos a maquina en ploter de corte. </p><p>· Vinilos adhesivos <br>· Vinilo Adhesivo Blanco <br>· Stickers adhesivos para autos (Vinilo adhesivo troquelado en colores solidos) <br>· Vinilo adhesivo de colores solidos (corte ploteo) <br>· Etiquetas Transparentes en vinil <br>· Vinil Reflectivo</p></div> <div align="right" class="cerrar_2" style="top: 0;right:0;position: absolute;width: 100%;cursor: pointer ;margin-right:20px;margin-top:20px"><img  width="45px" src="background/iconos/abajo.png" id="cerrar_abajo" ></div>');
cerrar_2();
});

$("#ab_4").click(function(e) {
  e.stopPropagation();
  $(".efecto_abajo").html("");
  $(".efecto_abajo").removeClass("cerrar_abajo");
  $(".efecto_abajo").addClass("abrir_abajo");
   $(".imagenes").removeClass("aparecer");
  $(".imagenes").addClass("ocultar");
  $(".efecto_abajo").html('<div class="papel_img" style=""><img src="background/papel/papel.png" class="img-responsive"></div><div class="col-md-7 col-sm-12 col-xs-12 volantes" style="padding: 0px 30px;"><h1>PAPEL <br>MEMBRETADO</h1> <p>La construcción de una Papelería conlleva una optimización de recursos, dado que tanto los sobres, las hojas cartas con membrete ó papel membretado y las tarjetas personales, son elementos necesarios para el funcionamiento de la empresa. Al transformarlos a su vez en agentes de comunicación, éstos rentabilizan al máximo las inversiones necesarias.</p><p>Papeles disponibles: <br><br>· Papel Bond <br>· Kimberly <br>· Fedrigoni <br>· Favini</p></div><div class="col-md-5 col-sm-12 col-xs-12"></div> <div align="right" class="cerrar_2" style="top: 0;right:0;position: absolute;width: 100%;cursor: pointer ;margin-right:20px;margin-top:20px"><img  width="45px" src="background/iconos/abajo.png" id="cerrar_abajo" ></div>');
cerrar_2();
});


$("#ab_5").click(function(e) {
  e.stopPropagation();
  $(".efecto_abajo").html("");
  $(".efecto_abajo").removeClass("cerrar_abajo");
  $(".efecto_abajo").addClass("abrir_abajo");
   $(".imagenes").removeClass("aparecer");
  $(".imagenes").addClass("ocultar");
  $(".efecto_abajo").append('<div class="col-md-7 col-sm-12 col-xs-12 volantes" style="padding: 0px 30px;"><h1>CALENDARIOS</h1> <br><p>Las empresas al crear sus estrategias de publicidad muchas veces invierten grandes cantidades de dinero y mucho esfuerzo en herramientas que no dan tan buenos resultados. Si deseas tener un elemento de publicidad económico y duradero, además de muy útil, debes considerar los calendarios publicitarios como herramienta de publicidad para tu empresa.  <br><br>Pero por qué debería considerar estos elementos al promocionar su marca. En realidad hay muchas razones que a continuación podrá encontrar y que reportarán en su empresa innumerables beneficios a través del uso de estos calendarios o almanaques. </p></div><div class="col-md-5 col-sm-12 col-xs-12 calendario" align="center"><img src="background/calendario/calendario.png" class="img-responsive"></div> <div align="right" class="cerrar_2" style="top: 0;right:0;position: absolute;width: 100%;cursor: pointer ;margin-right:20px;margin-top:20px"><img  width="45px" src="background/iconos/abajo.png" id="cerrar_abajo" ></div>');
cerrar_2();
});
$("#ab_6").click(function(e) {
  e.stopPropagation();
  $(".efecto_abajo").html("");
  $(".efecto_abajo").removeClass("cerrar_abajo");
  $(".efecto_abajo").addClass("abrir_abajo");
   $(".imagenes").removeClass("aparecer");
  $(".imagenes").addClass("ocultar");
  $(".efecto_abajo").append('<div class="cata_img" style=""><img src="background/catalogo/catalogo.png" class="img-responsive"></div><div class="col-md-6 col-sm-12 col-xs-12 volantes" style="padding: 0px 30px;"><h1>CATÁLOGO</h1> <p>Son las publicaciones que nos ofrecen información sobre una serie de productos o servicios, de una empresa. Es el mejor medio que tiene una empresa para ofrecer publicidad sobre sus productos directamente al consumidor, permite enseñar de una forma correcta todos los contenidos deseados por la empresa, sin limitar calidad ni espacio en la publicación de sus productos. <br><br>Impresión offset con la mejor nitidez en papeles finos de la más alta calidad.</p></div><div class="col-md-6 col-sm-12 col-xs-12"></div><div align="right" class="cerrar_2" style="top: 0;right:0;position: absolute;width: 100%;cursor: pointer ;margin-right:20px;margin-top:20px"><img  width="45px" src="background/iconos/abajo.png" id="cerrar_abajo" ></div>');
cerrar_2();
});
$("#ab_7").click(function(e) {
  e.stopPropagation();
  $(".efecto_abajo").html("");
  $(".efecto_abajo").removeClass("cerrar_abajo");
  $(".efecto_abajo").addClass("abrir_abajo");
   $(".imagenes").removeClass("aparecer");
  $(".imagenes").addClass("ocultar");
  $(".efecto_abajo").append('<div class="col-md-5 col-sm-12 col-xs-12 clase" align="center"><br><img src="background/brochure/brochure.png" class="img-responsive"></div><div class="col-md-7 col-sm-12 col-xs-12 volantes" style="padding: 0px 30px;"><br><br><h1>BROCHURE</h1> <p>Ofrecemos impresiones de Brochure en material diverso, plastificado o no, a full color con fotos y textos explicativos de los servicios o productos del cliente, acabados barnizado UV sectorizado, plastificado mate, doblez y mas.<br><br>Expresados en la mejor calidad para representación de su marca o proyecto.</p></div><div align="right" class="cerrar_2" style="top: 0;right:0;position: absolute;width: 100%;cursor: pointer ;margin-right:20px;margin-top:20px"><img  width="45px" src="background/iconos/abajo.png" id="cerrar_abajo" ></div>');
cerrar_2();
});

$("#ab_8").click(function(e) {
  e.stopPropagation();
  $(".efecto_abajo").html("");
  $(".efecto_abajo").removeClass("cerrar_abajo");
  $(".efecto_abajo").addClass("abrir_abajo");
   $(".imagenes").removeClass("aparecer");
  $(".imagenes").addClass("ocultar");
  $(".efecto_abajo").append('<div class="cata_img" style=""><img src="background/triptico/triptico.png" class="img-responsive"></div><div class="col-md-6 col-sm-12 col-xs-12 volantes" style="padding: 0px 30px;"><h1>TRIPTICOS <br>DIPTICOS</h1> <p>En material bond o couche, a un solo color o full color, con diseño y diagramación acorde al estilo del cliente y a la cultura de marketing.<br><br>Diseño personalizado a la medida de su empresa, asesoramiento gráfico y visual para el mejor acabado de su material impreso.</p></div><div class="col-md-6 col-sm-12 col-xs-12"></div><div align="right" class="cerrar_2" style="top: 0;right:0;position: absolute;width: 100%;cursor: pointer ;margin-right:20px;margin-top:20px"><img  width="45px" src="background/iconos/abajo.png" id="cerrar_abajo" ></div>');
cerrar_2();
});
$("#ab_9").click(function(e) {
  e.stopPropagation();
  $(".efecto_abajo").html("");
  $(".efecto_abajo").removeClass("cerrar_abajo");
  $(".efecto_abajo").addClass("abrir_abajo");
   $(".imagenes").removeClass("aparecer");
  $(".imagenes").addClass("ocultar");
  $(".efecto_abajo").append('<div class="folder_img" style=""><img src="background/folder/folder.png" class="img-responsive"></div><div class="col-md-5 col-sm-12 col-xs-12"></div><div class="col-md-7 col-sm-12 col-xs-12 volantes" style="padding: 0px 30px;"><h1>FOLDERS <br>PUBLICITARIOS</h1> <p>Impresión de folders y carpetas a full color en Couche, Foldcote, Cartulinas finas, impresión de alta calidad y acabado de primera. <br><br>Contamos con gran variedad de diseños, modelos y acabados para sus Folders y Carpetas corporativas en Tamaño Oficio y A4. <br><br>Impresos en Cartulina Foldcote y Couche. con bolsillo para solapa, a full color, con acabados como plastificado mate, brillante, barniz UV con reserva, pan de oro, pliegues y líneas de agua para su correcto doblez.</p></div><div align="right" class="cerrar_2" style="top: 0;right:0;position: absolute;width: 100%;cursor: pointer ;margin-right:20px;margin-top:20px"><img  width="45px" src="background/iconos/abajo.png" id="cerrar_abajo" ></div>');
cerrar_2();
});
$("#ab_10").click(function(e) {
  e.stopPropagation();
   $(".efecto_abajo").html("");
  $(".efecto_abajo").removeClass("cerrar_abajo");
  $(".efecto_abajo").addClass("abrir_abajo");
   $(".imagenes").removeClass("aparecer");
  $(".imagenes").addClass("ocultar");
  $(".efecto_abajo").append('<div class="mer_img" style=""><img src="background/mer/mer.png" class="img-responsive"></div><div class="col-md-7 col-sm-12 col-xs-12 volantes" style="padding: 0px 30px;"> <br> <br> <h1>MERCHANDING</h1> <br> <p>Llaveros publicitarios, llaveros destapador y pines publicitarios, lapiceros publicitarios y ecológicos, tazas , tomatodos, pelotas antiestress, mugs, casco destapador, bolsas publicitarias y ecologicas.</p></div><div class="col-md-5 col-sm-12 col-xs-12"></div> <div align="right" class="cerrar_2" style="top: 0;right:0;position: absolute;width: 100%;cursor: pointer ;margin-right:20px;margin-top:20px"><img  width="45px" src="background/iconos/abajo.png" id="cerrar_abajo" ></div>');
cerrar_2();
});


$(".efecto_abajo").click(function(e) {

  e.stopPropagation();

});



$(".data").hide(); 







// FULL PAGE EFECTO
var myFullpage = new fullpage('#fullpage', {
  anchors: ['home', 'impresion', 'gigantografia','señaletica', 'disenoweb', 'nosotros', 'contactenos'],
  menu: '.menu'
});



// OCULTAR GIGANTOFRIA EN OTRAS SECCIONES
var sections = ["#section0", "#section1", "#section3_0","#section3","#section4","#section5"];

for (i = 0; i < sections.length; i++) { 

  $(sections[i]).mouseover(function(e) {

   limpiar();

 });
}

var sections2 = ["#section0", "#section2", "#section3_0","#section3","#section4","#section5"];
for (i = 0; i < sections.length; i++) { 

  $(sections2[i]).mouseover(function(e) {

   limpiar2();

 });
}

// FORMULARIOS DE LA PAGINA  
function form_first(){

 var form = $("#form_first").serialize();

 $.ajax({
   data:form,
   url :'formulario.php',
   method:"post",
   beforeSend: function () {

    $("#form1").attr("disabled",true);
    $("#form1").html("");
    $("#form1").html("<img src='background/iconos/gif.gif' class='img-responsive'>");

  },
  success:function (respuesta) {


    alert(respuesta);
    $("#form1").attr("disabled",false);
    $("#form1").html("");
    $("#form1").html("Enviar Mensaje");
    $("#nombre").val("");
    $("#email").val("");
    $("#pedido").val("");
    $("#text_area").val("");

  }
});}



 function form_second(){

   var form = $("#form_second").serialize();

   $.ajax({
     data:form,
     url :'formulario2.php',
     method:"post",
     beforeSend: function () {

      $("#form_2").attr("disabled",true);
      $("#form_2").html("");
      $("#form_2").html("<img src='background/iconos/gif.gif' class='img-responsive'>");

    },
    success:function (respuesta) {


      alert(respuesta);
      $("#form_2").attr("disabled",false);
      $("#form_2").html("");
      $("#form_2").html("Enviar Mensaje");
      $("#anchura").val("");
      $("#altura").val("");
      $("#material").val("");
      $("#observaciones").val("");
      $("#estimado").val("");

    }
  });}