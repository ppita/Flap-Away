using UnityEngine;
using UnityEngine.UI; // we need this namespace in order to access UI elements within our script
using System.Collections;

public class GameOverMenu : MonoBehaviour 
{
	public Canvas gameOverCanvas;
	public RawImage superStelar;
	public RawImage platinum;
	public RawImage gold;
	public RawImage silver;
	public RawImage bronze;
	public RawImage dude;
	public static float myScore = 0;
	public GUISkin guiSkin;

	void OnGUI(){
	
		GUI.skin = guiSkin;
		GUI.Label(new Rect(Screen.width / 2 - 60,10, 200, 30), ("Score: " + myScore));
	
	}

	void Start ()

	{
		gameOverCanvas = gameOverCanvas.GetComponent<Canvas>();
		superStelar = superStelar.GetComponent<RawImage> ();
		platinum = platinum.GetComponent<RawImage> ();
		gold = gold.GetComponent<RawImage> ();
		silver = silver.GetComponent<RawImage> ();
		bronze = bronze.GetComponent<RawImage> ();
		dude = dude.GetComponent<RawImage> ();

		gameOverCanvas.enabled = false;

		
	}
	
	public void OnTriggerEnter(Collider col)
	{

		if (col.GetComponent<Collider>().tag == "Tubes") {
		gameOverCanvas.enabled = true;
			Time.timeScale = 0f;
		

			if(myScore > -1 && myScore < 6 ) {
				superStelar.enabled = false;
				platinum.enabled = false;
				gold.enabled = false;
				silver.enabled = false;
				bronze.enabled = false;
				dude.enabled = true;

			}

			if(myScore > 6 && myScore < 11 ) {
				superStelar.enabled = false;
				platinum.enabled = false;
				gold.enabled = false;
				silver.enabled = false;
				bronze.enabled = true;
				dude.enabled = false;
			}

			if(myScore > 11 && myScore < 21 ) {
				superStelar.enabled = false;
				platinum.enabled = false;
				gold.enabled = false;
				silver.enabled = true;
				bronze.enabled = false;
				dude.enabled = false;
			}

			if(myScore > 21 && myScore < 31 ) {
				superStelar.enabled = false;
				platinum.enabled = false;
				gold.enabled = true;
				silver.enabled = false;
				bronze.enabled = false;
				dude.enabled = false;
			}

			if(myScore > 31 && myScore < 41 ) {
				superStelar.enabled = false;
				platinum.enabled = true;
				gold.enabled = false;
				silver.enabled = false;
				bronze.enabled = false;
				dude.enabled = false;
			}

			if(myScore > 41) {
				superStelar.enabled = true;
				platinum.enabled = false;
				gold.enabled = false;
				silver.enabled = false;
				bronze.enabled = false;
				dude.enabled = false;
			}
		}
	}
}
