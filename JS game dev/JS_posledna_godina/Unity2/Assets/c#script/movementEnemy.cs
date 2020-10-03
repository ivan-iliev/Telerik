using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class movementEnemy : MonoBehaviour
{
    public GameObject target;
    public float force;
    private Rigidbody rb;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    void Update()
    {

    }

    void FixedUpdate()
    {
        Vector3 dir = Vector3.Normalize(target.transform.position - transform.position);
        rb.AddForce(dir * force);
    }
}
