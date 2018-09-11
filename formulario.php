<?php


        
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$pedido = $_POST["pedido"];
$observaciones = $_POST["text_area"];
$cuerpo = '
<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>
<div>
<div  style="color:white;font-weight:bold;font-size:30px;background-color:black;padding:15px;">FORMULARIO CONTACTENOS</div><br>
<div style="font-size:24px"><b>Fecha: </b><span style="color:#000000;">   '.date('d/m/Y').'</span></div>
<div style="font-size:24px"><b>Hora: </b><span style="color:#000000;">   '.date('h:i:s').'</span></div><br>
</div>
<div style="height:5px;width:100%;background-color:rgba(241, 207, 0,1)">



</div>
<div ><br>
<div style="font-size:24px"><b>Nombre: </b><span style=\"color:#000000;\">    '.$nombre.'</span></div><br>
<div style="font-size:24px"><b>Email: </b><span style=\"color:#000000;\">    '.$email.'</span></div><br>
<div style="font-size:24px"><b>Pedido: </b><span style=\"color:#000000;\">    '.$pedido.'</span></div><br>
<div style="font-size:24px"><b>Observaciones: </b><span style=\"color:#000000;\">   '.$observaciones.'</span></div><br>
</div> 
</body>
</html>';
        require "phpmailer/class.phpmailer.php";
    
          $mail = new PHPMailer;
		  
		  //indico a la clase que use SMTP
          $mail->IsSMTP();
		  
          //permite modo debug para ver mensajes de las cosas que van ocurriendo
          //$mail->SMTPDebug = 2;

		  //Debo de hacer autenticación SMTP
          $mail->SMTPAuth = true;
          $mail->SMTPSecure = "ssl";

		  //indico el servidor de Hotmail para SMTP
          $mail->Host = "smtp.gmail.com";

		  //indico el puerto que usa gmail
          $mail->Port = 465;

		  //indico un usuario / clave de usuario de gmail
          $mail->Username = "rodrigourp.96@gmail.com";
          $mail->Password = "nickyjam13";
       
          $mail->From = "usuario@gmail.com";
        
          $mail->FromName = "Administrador";
        
          $mail->Subject = "Hormiga comunicacion - contacto";
          
          $mail->AddReplyTo($email, $nombre);

          $mail->addAddress("jcarpioherrera@gmail.com", "Administrador");
        
          $mail->MsgHTML($cuerpo);
        
    
  
        
          if($mail->Send())
        {
    echo "Enhorabuena el mensaje ha sido enviado con exito.";
    }
        else
        {
    echo "Lo siento, ha habido un error al enviar el mensaje.";
    }

?>