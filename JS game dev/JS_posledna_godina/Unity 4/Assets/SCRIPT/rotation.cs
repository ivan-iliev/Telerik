using UnityEngine;
using System.Collections;

public class rotation : MonoBehaviour
{
    [SerializeField]
    private float tumble;

    void Start()
    {
        GetComponent<Rigidbody>().angularVelocity = Random.insideUnitSphere * tumble;
    }
}