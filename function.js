function Email(){
    let name = document.getElementById('name').value;
    let email = "tiana.larmond19@gmail.com";
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    //"%0D%0A" is the url encoded version of the newline character
    //window.open("mailto:" + email + "?subject=" + subject + "&body=" + name + "%0D%0A" + message );
    window.location = "mailto:" + email + "?subject=" + subject + "&body=" + name + "%0D%0A" + message;
}


function Confirmation(){
    
    let answer = prompt("Are you sure you want to SEND? \nYes or No?", "");

    if (answer == 'Yes' || answer == 'yes' || answer == 'YES'){
        //document.write("<h3>Message SENT!<h3>");
        //alert("Message SENT!");
        Email();
    }
    else if(answer == 'No' || answer == 'no' || answer == 'NO'){
        //document.write("<h3>Message CANCELLED!<h3>");
        alert("Message CANCELLED!");
    }
}