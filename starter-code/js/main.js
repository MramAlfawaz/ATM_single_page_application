$('#screen__landing').hide();
$('#screen__withdrawal').hide();
$('#screen__deposit').hide();
$('#screen__balance').hide();

$(".btn").click(function(event) {
    console.log("you clicked: ", this.innerHTML)
   })

   $(".btn").click(function(event) {
    var thingClicked = this.innerHTML
    console.log(thingClicked)
     $(".input").html(thingClicked)
   })

//validation PIN
function validationFun() {
    var x , text;
  
    // Get the value of the input field with id="input"
    x = document.querySelector(".input").value;
  
    // If x is Not a Number or less than one or greater than 10
    if ( x == 1234 ) {
      text = "correct";
      $('#screen__pin').hide();
      $('#screen__landing').show();

    } else {

      text = "invalid PIN";
    }
    document.getElementById("msg").innerHTML = text;
  }

  // close btn
  function closeFun() {
    $('#screen__landing').show();
    $('#screen__withdrawal').hide();
    $('#screen__deposit').hide();
    $('#screen__balance').hide();    
    $('#screen__pin').hide();
  }

  function towithdraw() {
    $('#screen__landing').hide();
    $('#screen__withdrawal').show();
  }

  function todeposit() {
    $('#screen__landing').hide();
    $('#screen__deposit').show();
  }

  function balance() {
    var amount = document.getElementById('initBalance'); 
    initBalance.innerText = amountInAccount + "\n SAR" ;

  }

  let amountInAccount = 10000;


  function checkbalance() {
    var amount = document.getElementById('balanceAmount'); 
       balanceAmount.innerText = amountInAccount + "\n SAR" ;
    $('#screen__landing').hide();
$('#screen__balance').show();

  }

  

function withdrawlMoney(amount){
	if(amountInAccount % 5 != 0){
        swal({
                title: 'Incorrect Withdrawal Amount (enter only multiple of 5)'
                 });
        return false;
	}else	if(amount >= amountInAccount){
		swal({
                     title: 'Insufficient Funds'
                     });
		return false;
    }

    amountInAccount = amountInAccount - amount ;

    swal({
             title: 'Successful Transaction! \n Available Balance is: SAR '+ amountInAccount
          });}

function enterAmount(){
	var amount = document.getElementById("amount").value;
	withdrawlMoney(amount);
}
document.getElementById("do").addEventListener("click", enterAmount);




function depositMoney(depos) {
    if(amountInAccount % 5 != 0){
        swal({
                title: 'Incorrect Withdrawal Amount (enter only multiple of 5)'
                 });
        return false;
	}else	if(depos == 0){
		swal({
                     title: 'Insufficient'
                     });
		return false;
    }

    amountInAccount = amountInAccount + parseInt(depos) ;

    swal({
             title: 'Successful Deposit! \n updated Balance is: SAR '+ amountInAccount
          });}

function enterAmount2(){
	var depos = document.getElementById("depos").value;
	depositMoney(depos);
}
document.getElementById("doDepos").addEventListener("click", enterAmount2);


