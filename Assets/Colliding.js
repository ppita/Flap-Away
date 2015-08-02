var CollidingSound: AudioClip;

function OnTriggerEnter (info : Collider)
{
	if (info.tag == "Player")
	{
		AudioSource.PlayClipAtPoint(CollidingSound, transform.position);
		Time.timeScale = 0f;
	}

}