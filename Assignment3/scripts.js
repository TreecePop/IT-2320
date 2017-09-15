alert("Welcome");

function listFunction(x) 
{
	x.className = "ul-mouseon";
}

function listFunctionOut(x) 
{
	x.className = "";
}

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

