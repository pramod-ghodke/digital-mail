
<?php
//get data from form  

$name = $_POST['name'];
$mobile=$_POST['mobile'];
$email= $_POST['email'];
$message=$_POST['message'];

$to = "pramodghodke110@gmail.com";
$subject = "thehouz contact request from  $name";
$txt = "Name = ". $name ."\r\nEmail=". $email. "\r\nSubject = " . $mobile . "\r\nMessage=".$message;

$from = '$email';
 $fromName = 'Contact - thehouz.in';
 // Header for sender info
$headers = "From: $fromName"." <".$from.">";

if($email!=NULL && $name!=NULL && $mobile!=NULL && $message!=NULL){
    mail($to,$subject,$txt,$headers);
    echo"<script> alert('Thanks For contacting thehouz, We will get right back to you soon');
    window.location='http://thehouz.in/'; 
    </script>";
    
}
else
    {
        echo"<script> alert('Error in Submitting, Please Fill the form again');</script>";
}
//redirect





 // echo $contact->send();
?>
