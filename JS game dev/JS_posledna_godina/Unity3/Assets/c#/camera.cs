using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class camera : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject attach;
    private Vector3 offset;
    void Start()
    {
        offset = transform.position - attach.transform.position;
    }

    // Update is called once per frame
    void LateUpdate()
    {
        transform.position = attach.transform.position + offset;
    }
}