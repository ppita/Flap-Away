using UnityEngine;
using System.Collections;

public class Obstacle : MonoBehaviour {
	
	public Vector3 velocity = new Vector3(0, 0, -35);
	public float range = 35;
	
	// Use this for initialization
	void Start()
	{
		GetComponent<Rigidbody2D>().velocity = velocity;
		transform.position = new Vector3(transform.position.x, transform.position.y - range * Random.value, transform.position.z);
	}
}