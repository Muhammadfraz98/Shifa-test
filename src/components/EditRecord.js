import React,{useState,useEffect} from "react";
import { Modal ,Button, Form} from "react-bootstrap";

const EditModal = ({show,onHide,user}) => {
    const [updatedRecord, setUpdatedRecord] = useState([]);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [cnic, setCnic] = useState('');
    const [fathername, setFatherName] = useState('');
    const [address, setAddress] = useState('');

    useEffect(()=>{
        console.log("user >>",user);
        },[])

    const onhandleUpdate = e =>{
        e.preventDefault();
        const data={name: name, date, cnic, fathername, address}
        if(name.length> 0  && date.length>0 && cnic.length>0 && fathername.length > 0 && address.length>0) {
            console.log("Data:",data)
            var recievedData = data;
            console.log("recievedData:" ,recievedData)
            // localStorage.setItem("record", data);
            updatedRecord.push(data)
            localStorage.setItem("AllRecords", JSON.stringify(updatedRecord));
          }
    }

    return (
        <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={user.name} onChange={e => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDOB">
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="text" placeholder="Father Name" value={user.date} onChange={e => setDate(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCnic">
                <Form.Label>Cnic</Form.Label>
                <Form.Control type="text" placeholder="Date Of Birth" value={user.cnic} onChange={e => setCnic(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFatherName">
                <Form.Label>Father Name</Form.Label>
                <Form.Control type="text" placeholder="Father Name" value={user.fathername} onChange={e => setFatherName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" value={user.address} onChange={e => setAddress(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={()=>onhandleUpdate}>
                Update Record
            </Button>
            </Form>

        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    )
}
export default EditModal;