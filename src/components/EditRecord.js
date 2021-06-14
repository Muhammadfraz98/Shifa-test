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
       
        const {name,date,cnic,fathername,address}=user;
        setName(name);
        setDate(date);
            setCnic(cnic);
            setFatherName(fathername);
            setAddress(address);
        console.log("user >>",user);

        },[user])

    const onhandleUpdate = e =>{
        e.preventDefault();
        let allRecords = JSON.parse(localStorage.getItem('AllRecords'));
        console.log("all records",allRecords);
        const data={name: name, date, cnic, fathername, address}
                allRecords.length > 0 && allRecords.map((record,index) => {
                    if(record.cnic === cnic){
                        console.log("found cnics");
                        allRecords[index]=data;
                    }
                })
           localStorage.setItem("AllRecords",JSON.stringify(allRecords));    
          
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
                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDOB">
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="text" placeholder="Father Name" value={date} onChange={e => setDate(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCnic">
                <Form.Label>Cnic</Form.Label>
                <Form.Control type="text" placeholder="Date Of Birth" value={cnic} onChange={e => setCnic(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFatherName">
                <Form.Label>Father Name</Form.Label>
                <Form.Control type="text" placeholder="Father Name" value={fathername} onChange={e => setFatherName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="button" onClick={onhandleUpdate}>
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