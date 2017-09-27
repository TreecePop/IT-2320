window.onload = function() {
	var bambiAge = document.getElementsByClassName("bambi-age")[0];
	var images = document.getElementsByClassName("bambi-image")[0];
	var hImages = document.getElementsByClassName("bambi-image-highlight")[0];
	
	var phantomAge = document.getElementsByClassName("phantom-age")[0];
	var images2 = document.getElementsByClassName("phantom-image")[0];
	var hImages2 = document.getElementsByClassName("phantom-image-highlight")[0];
	
	var x = document.getElementsByClassName("list")[0];

	x.addEventListener("mouseover", listFunction);
	x.addEventListener("mouseout", listFunctionOut);
	images.addEventListener("click", ToggleHighlight);
	images2.addEventListener("click", ToggleHighlight2);
	
	alert("Welcome");
}



function listFunction() 
{
	this.className = "ul-mouseon";
}

function listFunctionOut() 
{
	this.className = "";
}

document.getElementsByClassName("picone").addEventListener("click", function() {
	document.getElementsByClassName("bambi-age").innerHTML = "Hel";
});


function ToggleHighlight()
{
	
	var bambiAge = document.getElementsByClassName("bambi-age");
	var images = document.getElementsByClassName("bambi-image");
	var hImages = document.getElementsByClassName("bambi-image-highlight");
		
	if(images[0] != null)
	{
		bambiAge[0].innerHTML = "She's a 2 year old Domestic Shorthair!:";
		images[0].className = "bambi-image-highlight";
	}
	else
	{
		bambiAge[0].innerHTML = "This is Bambi:";
		hImages[0].className = "bambi-image";
	}
}

function ToggleHighlight2()
{
	var phantomAge = document.getElementsByClassName("phantom-age");
	var images = document.getElementsByClassName("phantom-image");
	var hImages = document.getElementsByClassName("phantom-image-highlight");
		
	if(images[0] != null)
	{
		phantomAge[0].innerHTML = "He's a 3 year old Miniature Pinscher Mix!:";
		images[0].className = "phantom-image-highlight";
	}
	else
	{
		phantomAge[0].innerHTML = "This is Phantom:";
		hImages[0].className = "phantom-image";
	}
}

