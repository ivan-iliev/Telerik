using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class move : MonoBehaviour
{
    
    public float speedF;
    public float speedQSEW;
    public float speedAD;
    public Rigidbody player;

    void Start()
    {

        player = GetComponent<Rigidbody>();

    }

    void FixedUpdate()
    {
        targetspeed = Mathf.Round(speed * maxspeed);
        currentspeed = Mathf.Round(GetComponent<Rigidbody>().velocity.z);

        float roll = Input.GetAxis("Horizontal"); //A en D
        float pitch = Input.GetAxis("Vertical"); //W en S
        float yaw = Input.GetAxis("Roll"); //Q en E
        float throttle = Input.GetAxis("Throttle"); //R en F

        if (Input.GetKey("r") && speed < 1f)
        {

        }
        if (Input.GetKey("f") && speed > -0.1f)
        {

        }

        GetComponent<Rigidbody>().AddRelativeTorque(pitch * turnspeed * Time.deltaTime, yaw * turnspeed * Time.deltaTime, -roll * turnspeed * Time.deltaTime);
    
}