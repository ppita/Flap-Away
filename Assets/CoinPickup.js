var CoinSound: AudioClip;

function OnTriggerEnter (info : Collider)
{
	if (info.tag == "Player")
	{
		GameOverMenu.myScore += 1;
		AudioSource.PlayClipAtPoint(CoinSound, transform.position);
		Destroy(gameObject);
	
	}

}