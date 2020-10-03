using UnityEngine;
using System.Collections;

public class MoveCamer : MonoBehaviour
{
    public GameObject attach;
    private Vector3 saveCoordinates;

    void Start()
    {
        saveCoordinates = new Vector3(transform.position.x - attach.transform.position.x, transform.position.y - attach.transform.position.y, transform.position.z - attach.transform.position.z);
    }
    void LateUpdate()
    {
        transform.position = new Vector3(attach.transform.position.x, attach.transform.position.y, attach.transform.position.z) + saveCoordinates;
        //transform.position.x = attach.transform.position.x;
    }
}
