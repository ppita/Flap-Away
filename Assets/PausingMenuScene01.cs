using UnityEngine;
using UnityEngine.UI; // we need this namespace in order to access UI elements within our script
using System.Collections;

public class PausingMenuScene01 : MonoBehaviour 
{
	public Canvas pauseMenu;
	public Button restartText;
	public Button resumeText;
	public Button mainMenuText;
	public Button pauseButton;
	public float paused = 0f;
	public float notPaused = 1f;


	
	void Start ()
		
	{
		pauseMenu = pauseMenu.GetComponent<Canvas>();
		restartText = restartText.GetComponent<Button> ();
		resumeText = resumeText.GetComponent<Button> ();
		mainMenuText = mainMenuText.GetComponent<Button> ();
		pauseButton = pauseButton.GetComponent<Button> (); 
		pauseMenu.enabled = false;
		pauseButton.enabled = true;

		
	}
	

	public void PausePress() 
		
	{
		pauseButton.enabled = false;
		pauseMenu.enabled = true;
		Time.timeScale = paused;
		
	}
	
	public void FixedUpdate()
		
	{
		Time.timeScale = paused;
		pauseMenu.enabled = false;
		pauseButton.enabled = true;
		Time.timeScale = notPaused;


	}
	

	public void RestartLevel () 
		
	{
		Application.LoadLevel (1);
		Time.timeScale = notPaused;
		
	}

	public void MainMenuGame () 
		
	{
		Application.LoadLevel (2); 
		
	}
	
}
