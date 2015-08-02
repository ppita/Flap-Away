#pragma strict
//this is the currently selected object. Unused variable at the moment.
static var currentObject : GameObject;

//these are simply pieces of geometry with an alpha texture on them. 
//You can create any kind of glow geometry to fit your character, vehicle, etc.
var character1Glow : GameObject;
var character2Glow : GameObject;
var character3Glow : GameObject;
var character4Glow : GameObject;
var character5Glow : GameObject;
var character6Glow : GameObject;
var character7Glow : GameObject;
var character8Glow : GameObject;

var platformBird : GameObject;
var platformHovercraft : GameObject;

function Start()
{
character1Glow.GetComponent.<Renderer>().enabled = true;  // We're going to make sure all of the highlighted glows are OFF at scene start.
character2Glow.GetComponent.<Renderer>().enabled = false;
character3Glow.GetComponent.<Renderer>().enabled = false;
character4Glow.GetComponent.<Renderer>().enabled = false;
character5Glow.GetComponent.<Renderer>().enabled = false;
character6Glow.GetComponent.<Renderer>().enabled = false;
character7Glow.GetComponent.<Renderer>().enabled = false;
character8Glow.GetComponent.<Renderer>().enabled = false;

platformBird.SetActive(true);
platformHovercraft.SetActive(false);

}

function Update() 
{ 
if (Input.GetMouseButtonUp (0)) {
	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
	var hit : RaycastHit;
	
	if (Physics.Raycast (ray, hit, 100))
		{
				// The pink text is where you would put the name of the object you want to click on (has attached collider).
				
	            if(hit.collider.name == "Bird") 
				SelectedCharacter1(); //Sends this click down to a function called "SelectedCharacter1(). Which is where all of our stuff happens.
			
				if(hit.collider.name == "Hovercraft")
				SelectedCharacter2();
					
				if(hit.collider.name == "_Character3")
				SelectedCharacter3();
		
				if(hit.collider.name == "_Character4")
				SelectedCharacter4();
				
				if(hit.collider.name == "_Character5")
				SelectedCharacter5();
				
				if(hit.collider.name == "_Character6")
				SelectedCharacter6();
				
				if(hit.collider.name == "_Character7")
				SelectedCharacter7();
				
				if(hit.collider.name == "_Character8")
				SelectedCharacter8();
		}                
	} 
}

function SelectedCharacter1() {
				Debug.Log ("Character 1 SELECTED"); //Print out in the Unity console which character was selected.
				character1Glow.GetComponent.<Renderer>().enabled = true; //these lines turn on or off the appropriate character glow.
				character2Glow.GetComponent.<Renderer>().enabled = false;
				character3Glow.GetComponent.<Renderer>().enabled = false;
				character4Glow.GetComponent.<Renderer>().enabled = false; 
				character5Glow.GetComponent.<Renderer>().enabled = false; 
				character6Glow.GetComponent.<Renderer>().enabled = false; 
				character7Glow.GetComponent.<Renderer>().enabled = false; 
				character8Glow.GetComponent.<Renderer>().enabled = false; 
				platformBird.SetActive(true);
				platformHovercraft.SetActive(false);
}

function SelectedCharacter2() {
				Debug.Log ("Character 2 SELECTED");
				character1Glow.GetComponent.<Renderer>().enabled = false; //these lines turn on or off the appropriate character glow.
				character2Glow.GetComponent.<Renderer>().enabled = true;
				character3Glow.GetComponent.<Renderer>().enabled = false;
				character4Glow.GetComponent.<Renderer>().enabled = false; 
				character5Glow.GetComponent.<Renderer>().enabled = false; 
				character6Glow.GetComponent.<Renderer>().enabled = false; 
				character7Glow.GetComponent.<Renderer>().enabled = false; 
				character8Glow.GetComponent.<Renderer>().enabled = false; 
				platformBird.SetActive(false);
				platformHovercraft.SetActive(true);
}

function SelectedCharacter3() {
				Debug.Log ("Character 3 SELECTED");
				character1Glow.GetComponent.<Renderer>().enabled = false; //these lines turn on or off the appropriate character glow.
				character2Glow.GetComponent.<Renderer>().enabled = false;
				character3Glow.GetComponent.<Renderer>().enabled = true;
				character4Glow.GetComponent.<Renderer>().enabled = false; 
				character5Glow.GetComponent.<Renderer>().enabled = false; 
				character6Glow.GetComponent.<Renderer>().enabled = false; 
				character7Glow.GetComponent.<Renderer>().enabled = false; 
				character8Glow.GetComponent.<Renderer>().enabled = false; 
}

function SelectedCharacter4() {
				Debug.Log ("Character 4 SELECTED");
				character1Glow.GetComponent.<Renderer>().enabled = false; //these lines turn on or off the appropriate character glow.
				character2Glow.GetComponent.<Renderer>().enabled = false;
				character3Glow.GetComponent.<Renderer>().enabled = false;
				character4Glow.GetComponent.<Renderer>().enabled = true; 
				character5Glow.GetComponent.<Renderer>().enabled = false; 
				character6Glow.GetComponent.<Renderer>().enabled = false; 
				character7Glow.GetComponent.<Renderer>().enabled = false; 
				character8Glow.GetComponent.<Renderer>().enabled = false; 
}

function SelectedCharacter5() {
				Debug.Log ("Character 5 SELECTED");
				character1Glow.GetComponent.<Renderer>().enabled = false; //these lines turn on or off the appropriate character glow.
				character2Glow.GetComponent.<Renderer>().enabled = false;
				character3Glow.GetComponent.<Renderer>().enabled = false;
				character4Glow.GetComponent.<Renderer>().enabled = false; 
				character5Glow.GetComponent.<Renderer>().enabled = true; 
				character6Glow.GetComponent.<Renderer>().enabled = false; 
				character7Glow.GetComponent.<Renderer>().enabled = false; 
				character8Glow.GetComponent.<Renderer>().enabled = false; 
}

function SelectedCharacter6() {
				Debug.Log ("Character 6 SELECTED");
				character1Glow.GetComponent.<Renderer>().enabled = false; //these lines turn on or off the appropriate character glow.
				character2Glow.GetComponent.<Renderer>().enabled = false;
				character3Glow.GetComponent.<Renderer>().enabled = false;
				character4Glow.GetComponent.<Renderer>().enabled = false; 
				character5Glow.GetComponent.<Renderer>().enabled = false; 
				character6Glow.GetComponent.<Renderer>().enabled = true; 
				character7Glow.GetComponent.<Renderer>().enabled = false; 
				character8Glow.GetComponent.<Renderer>().enabled = false; 
}

function SelectedCharacter7() {
				Debug.Log ("Character 7 SELECTED");
				character1Glow.GetComponent.<Renderer>().enabled = false; //these lines turn on or off the appropriate character glow.
				character2Glow.GetComponent.<Renderer>().enabled = false;
				character3Glow.GetComponent.<Renderer>().enabled = false;
				character4Glow.GetComponent.<Renderer>().enabled = false; 
				character5Glow.GetComponent.<Renderer>().enabled = false; 
				character6Glow.GetComponent.<Renderer>().enabled = false; 
				character7Glow.GetComponent.<Renderer>().enabled = true; 
				character8Glow.GetComponent.<Renderer>().enabled = false; 
}

function SelectedCharacter8() {
				Debug.Log ("Character 8 SELECTED");
				character1Glow.GetComponent.<Renderer>().enabled = false; //these lines turn on or off the appropriate character glow.
				character2Glow.GetComponent.<Renderer>().enabled = false;
				character3Glow.GetComponent.<Renderer>().enabled = false;
				character4Glow.GetComponent.<Renderer>().enabled = false; 
				character5Glow.GetComponent.<Renderer>().enabled = false; 
				character6Glow.GetComponent.<Renderer>().enabled = false; 
				character7Glow.GetComponent.<Renderer>().enabled = false; 
				character8Glow.GetComponent.<Renderer>().enabled = true; 
}
