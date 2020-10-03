using UnityEngine;
public class spawn : MonoBehaviour
{
    [SerializeField]
    private GameObject[] AsteroidPrefabs;

    void Start()
    {
        SpawnAsteroids(150);
    }

    private void SpawnAsteroids(int amount)
    {
        for (int i = 0; i < amount; i++)
        {
            var pos = new Vector3(Random.Range(-150, 150), Random.Range(-150, 150), Random.Range(-150, 150));
            var chosenAsteroid = AsteroidPrefabs[Random.Range(0, AsteroidPrefabs.Length)];
            var asteroid = Instantiate(chosenAsteroid, pos, Quaternion.identity);

            // You can still manipulate asteroid afterwards like .AddComponent etc
        }
    }
}