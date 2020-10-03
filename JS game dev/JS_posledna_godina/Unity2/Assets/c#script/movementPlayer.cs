using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class movementPlayer : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        float u = Input.GetAxis("Vertical");
        transform.position = transform.position + transform.forward * u * Time.deltaTime;
        float v = Input.GetAxis("Horizontal");
        transform.Rotate(Vector3.up * u * Time.deltaTime);
    }
}
