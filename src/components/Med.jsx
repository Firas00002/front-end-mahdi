import React from 'react'
import Reacttable from './Reacttable'
import { Button, Card, Container, Row, Col } from "react-bootstrap";

import './test.css'
import Home from './Home';
import Modal from 'react-modal';




Modal.setAppElement('#root');
const Med = () => {
  const [fName, setFName] = React.useState('')
    const [lName, setLName] = React.useState('')
    const [age, setAge] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [height, setHeight] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [weight, setWeight] = React.useState('')
    const [list, setList] = React.useState([])

    const handleClick =(e)=>{
       
        const newPatient ={
            id:Math.random(),
            firstname:fName,
            lastname:lName,
             createtime:Date.now()
            

        };
        setList([...list,newPatient])
        e.preventDefault();
        setIsOpen(false)
    }
  
    
    const [entities, setEntities] = React.useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    
  
    function closeModal() {
      setIsOpen(false);
    }
    
    
    
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
            <button onClick={openModal}>Ajouter un Patient</button>
    <Modal
      isOpen={modalIsOpen}
      
      onRequestClose={closeModal}
      
      contentLabel="Example Modal"
    >
      
      
      
      <form>
      <div id="wrap" className="">
                <br/>
                <br/>
                <div className="container align-items-center">
                
                    <h1>Provide Details to Add Patient</h1><br/>

                    <form >

                        <div>First Name: <input required value={fName} onChange={(e)=>setFName(e.target.value)} className="form-control mr-sm-2"  type="text" placeholder="First name" /></div><br/>
                        <div>Last Name: <input className="form-control mr-sm-2" value={lName} onChange={(e)=>setLName(e.target.value)} type="text" placeholder="Last name" /></div><br/>
                        <div className="radio" >Gender:<br/> <input className="" name="gender" value="Male"  type="radio" /> Male <input className="" name="gender" value="Female"  type="radio" /> Female </div><br/>
                        <div>Age: <input className="form-control mr-sm-2" value={age} onChange={(e)=>setAge(e.target.value)}  type="text" placeholder="Age" /></div><br/>
                        <div>Email: <input className="form-control mr-sm-2" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" /></div><br/>
                        <div>Weight: <input className="form-control mr-sm-2" value={weight} onChange={(e)=>setWeight(e.target.value)} type="text" placeholder="Weight in Kg" /></div><br/>
                        <div>Height: <input className="form-control mr-sm-2" value={height} onChange={(e)=>setHeight(e.target.value)} type="text" placeholder="Height in Metre" /></div><br/>
                        <div>Description: <input className="form-control mr-sm-2" value={description} onChange={(e)=>setDescription(e.target.value)}  type="text" /></div><br/>
                    
                    <div> <button onClick={handleClick} className="btn btn-success" type="submit">Add Patient</button> </div>

                    
                    </form>

                    <h3 style={{color: "green"}} className="label label-success"></h3>
                    
                </div> 
                
            </div>
            
      </form>
    </Modal>
            </Col>
            <Col md="12">
              <h4 className="title">Liste des utilisateurs</h4>
              <Card className="card-header">
                <Card.Body>
                  <Reacttable
                    data={entities}
                    columns={[
                      {
                        Header: "Nom et Prenom",
                        accessor: "nom_prenom",
                      },
                      {
                        Header: "Login",
                        accessor: "login",
                      },
                      {
                        Header: "e-mail",
                        accessor: "email",
                      },
                      {
                        Header: "téléphone",
                        accessor: "tel",
                      },
                      {
                        Header: "Etat",
                        accessor: "etat",
                        Cell: ({ cell }) => (cell.row.values.etat === 1?"Activé":"Désactivé"),
                      },
                      
  
                      {
                        Header: "actions",
                        accessor: "id",
                        Cell: ({ cell }) => (
                          <div className="actions-right block_action">
                            <Button
                              onClick={() => {
                                window.location.replace(
                                  "/ajoute" + cell.row.values.id
                                );
                              }}
                              variant="warning"
                              size="sm"
                              className="text-warning btn-link edit"
                            >
                              <i className="fa fa-edit" />
                            </Button>
                            
                          </div>
                        ),
                      },
                    ]} 
                    className="-striped -highlight primary-pagination"
                  />
                  {entities.length === 0 ? (
                    <div className="text-center">Aucun donnée trouvé</div>
                  ) : (
                    ""
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className='patient_Tableau'>{list.map((t,i) => (
            <div><ul key={i}>
              <li><img style={{width:100}} src="https://img.freepik.com/photos-gratuite/icone-dossier-jaune_53876-71296.jpg?w=2000" alt="dossier" />
              {t.firstname}{t.lastname}
              
              
              </li>
              
            </ul></div>
          ))}</div>
        
      </>
    );
  }
  
  
  

export default Med