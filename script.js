function reset(){
    $(".tip-amount-number label").text("$0.00");
    $(".total-amount label").text("$0.00");

}
function tip_amount(n){
    let bill=$(".bill-amount-number input").val();
    let tipamount=(bill)*n/100;
    let tipamoutstr=tipamount.toString().split('.')[1]
    let total=parseInt(bill)+parseInt(tipamount);
    if (tipamount==parseInt(tipamount)){
        $(".tip-amount-number label").text("$"+tipamount+".00");
        $(".total-amount label").text("$"+total+".00");

    }
    else if (tipamoutstr.length==1){
        $(".tip-amount-number label").text("$"+tipamount+"0");
        $(".total-amount label").text("$"+total+".00");

    }
    else{
        $(".tip-amount-number label").text("$"+tipamount);
        $(".total-amount label").text("$"+total+".00");

    }

    
}
function custom_tip_amount(){
    let custom_tip=$(".custom input").val();
    tip_amount(custom_tip)  
}

$(document).ready(function () {
});