using UnityEngine;
using System.Collections;

public class Generate : MonoBehaviour {
	
	public GameObject tubes;
	public float time = 1.0f;
	public float repeatRate = 1.5f;
	
	// Use this for initialization
	void Start()
	{
		InvokeRepeating("CreateObstacle", time, repeatRate);

	}
	
	void CreateObstacle()
	{
		Instantiate (tubes);
	}
}
