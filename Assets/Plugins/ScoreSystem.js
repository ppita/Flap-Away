static var myScore = 0;
public var guiSkin : GUISkin;

function OnGUI()
{
	GUI.skin = guiSkin;
	GUI.Label(Rect((Screen.width / 2) - 60,10, 200, 30), "Score: " + myScore);

}