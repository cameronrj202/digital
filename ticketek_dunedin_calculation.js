// JavaScript Document
alert("js attached")
var total_cost, concert, ticket_amount, ticket_price;
var database = firebase.database(); //creating the link to your database
var ticketsRef = database.ref('tickets');//creates a referene point to firebase, user node

function setBooking(){
	ticket_amount = document.getElementById("ticket_quantity").value;
	var BOOKING_FEE = 10;
	if (ticket_amount < i || ticket_amount > 5) {
		document.getElementById("5A").innerHTML = "Sorry you can't have less than 1 ticket or more than 5";
	} else {
		document.getElementById("5A").innerHTML = "";
		concert = document.getElementById("concert_select").value;
		var seat_type = document.getElementsByClassName("seat_type");
		ticket_price = this.dataset.price;
		total_cost = Number(ticket_amount * ticket_price + BOOKING_FEE);
		document.getElementById("tickets").innerHTML = ticket_amount;
		document.getElementById("concert").innerHTML = concert;
		document.getElementById("ticket_individual_price").innerHTML = "$" + ticket_price;
		document.getElementById("total_cost").innerHTML = "$" + total_cost;
		
	}
}
function validate() {
	var contact = document.getElementsByClassName("contact_info");
	var check = 0;
	for (var i = 0; i < contact.length; i ++) {
		var number = contact[i].getAttribute("data-number");
		var output = document.getElementById(number + "A");
		
		if (contact[i].checkedValidity() && !(contact[i] = " ")){
			console.log(contact[i].value);
			output.innerHTML = "";
			check++;
			console.log(check);
		} else {
			output.innerHTML = contact[i].getAttribute("data-error");
		}
		if (check == 4) {
			pushData();
		}
	}
}

function pushData() {
	alert("in push data function");
	 var data = { //creating a JSON file to be sent over the web
		concert:concert, //creating a key pair user_name will be the name of the field in your database
		total_cost:total_cost,
		quantity:ticket_amount,
		pricePerTicket:ticket_price
	}
	alert("data should now be updated!"); //test output
	userRef.push(data) //pushing the data to firebase, this data will be stored under the users node
	
}
var seat = document.getElementsByClassName("seat_type");
for (var i = 0; i < seat.length; i++) {
	seat[i].addEventListener('click', setBooking);
}
