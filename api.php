<?php

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'POST':
        $raw=file_get_contents('php://input');
        $json=json_decode($raw,true); 
        $nftId=$json['nftId'];
        // $command= "bash image.sh";
        $command= "python3 /home/kira/Me/Hack/HACKATHON/image.py $nftId";
        $sh = shell_exec($command);
        echo($sh);
        break;
    default:
        $message = "Error send a server method";
        echo($message);
        break;
}

?>