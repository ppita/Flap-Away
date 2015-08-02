using UnityEngine;
using UnityEngine.UI; // we need this namespace in order to access UI elements within our script
using System.Collections;

public class PausingMenuScene02 : MonoBehaviour 
{
	public Canvas pauseMenu;
	public Button restartText;
	public Button resumeText;
	public Button mainMenuText;
	public Button pauseButton;
	
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
		Time.timeScale = 0f;
		
	}
	
	public void ResumePress() 
		
	{
		pauseMenu.enabled = false;
		pauseButton.enabled = true;
		Time.timeScale = 1.0f;
		
	}
	
	public void RestartLevel () 
		
	{
		Application.LoadLevel (0);
		Time.timeScale = 1.0f;
		
	}
	
	public void MainMenuGame () 
		
	{
		Application.LoadLevel (2); 
		
	}
	
}
