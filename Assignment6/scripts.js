var Cavs = {};

//Constructor
Cavs.Player = function (firstName, lastName, position, jerNumber) {
	this.FirstName = firstName;
	this.LastName = lastName;
	this.Position = position;
	this.JerseyNumber = jerNumber;
}

//Prototype
Cavs.Player.prototype.GetInfo = function() {
	return 'First Name: ' + this.FirstName + "<br>" + 'Last Name: ' + this.LastName + "<br>" + 'Position: ' + this.Position + "<br>" + 'Jersey Number: ' + this.JerseyNumber + "<br><br>";
}

Cavs.Player.prototype.SetFirstName = function(name) {
	this.FirstName = name;
}

Cavs.Lebron = new Cavs.Player('Lebron', 'James', 'Small Forward', 23);
Cavs.Kevin = new Cavs.Player('Kevin', 'Love', 'Center', 0);
Cavs.Iman = new Cavs.Player('Iman', 'Shumpert', 'Small Forward', 4)
Cavs.JR = new Cavs.Player('J.R.', 'Smith', 'Small Forward', 5)

Cavs.Lebron.SetFirstName("King");
document.write(Cavs.Lebron.GetInfo());
document.write(Cavs.Kevin.GetInfo());
document.write(Cavs.Iman.GetInfo());
document.write(Cavs.JR.GetInfo());
