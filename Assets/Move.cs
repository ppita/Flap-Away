using UnityEngine;
using System.Collections;


public class Move : MonoBehaviour {
	
	public float speed = 150.0F;
	public float gravity = 350.0F;
	public float flyPower = 0.65F;
	public float goForward = 0.65F;
	public float rotate = 180F;
	private Vector3 moveDirection = Vector3.zero;
	bool didFlap = false;
	public bool hasToRotate  = false;
	public bool ableRotation = true;


	public float rotationDownTarget = 90.0F;
	public float rotationUpTarget = 360.0F;
	public float rotationarySpeedDown = 15.0F;
	public float rotationarySpeedUp = 100.0F;

	public float maximumGap = 1189.41f;
	public float minimumGap = 1189.41f;
	public float minimumHeight = 0f;

	[SerializeField]
	Vector3 _lastPosition;

	void Start () {
		_lastPosition = this.transform.position;
	}
	
	
	void FixedUpdate() {




	
		//if (moveDirection.y < minimumHeight){
			//hasToRotate = true;
		//}
		
		//if (moveDirection.y > minimumHeight) {
		//	hasToRotate = false;
		//}
		
		if (hasToRotate == true && ableRotation == true) {
			float angleDown = Mathf.MoveTowardsAngle(transform.eulerAngles.x, rotationDownTarget, rotationarySpeedDown * Time.deltaTime);
			transform.eulerAngles = new Vector3 (angleDown, 270, 0);



			
			
		}
		
		if (hasToRotate == false && ableRotation == true) {
			float angleUp = Mathf.MoveTowardsAngle(transform.eulerAngles.x, rotationUpTarget, rotationarySpeedUp *  Time.deltaTime);
			transform.eulerAngles = new Vector3 (angleUp, 270, 0);

					
			
			
		}
	
	
	}
	
	void Update() {



		CharacterController controller = GetComponent<CharacterController>();
		if (Input.GetKeyDown (KeyCode.Space) || Input.GetMouseButtonDown (0) ) {
			didFlap = true;
			moveDirection = new Vector3(0, flyPower, 0);
			moveDirection = transform.TransformDirection(moveDirection);
			moveDirection *= speed;



		}
		moveDirection.y -= gravity * Time.deltaTime;
		controller.Move(moveDirection * Time.deltaTime);

		if ((this.transform.position.y - _lastPosition.y) > 0)
			hasToRotate = false;



		if ((this.transform.position.y - _lastPosition.y) < 0)
			hasToRotate = true;
			

		_lastPosition = this.transform.position;
		

		}


}


