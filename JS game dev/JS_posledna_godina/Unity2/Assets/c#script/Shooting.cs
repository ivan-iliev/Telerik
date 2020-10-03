using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Shooting: MonoBehaviour
{
    public GameObject bulletType;
    public float dist;
    public float speed;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    void OnMouseDown()
    {
        GameObject bullet = Instantiate(
            bulletType,
            transform.position + transform.forward * dist,
            transform.rotation
        );
        Rigidbody rb = bullet.GetComponent<Rigidbody>();
        rb.velocity = transform.forward * speed;
    }
}