import { Button, Modal, Table } from 'antd'
import { DeleteOutlined, EditOutlined, InfoOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import './fayl.scss'
import { useGlobalCotext } from '../../context/context';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Modall from '../Modal/Modall'
import {setLocalStorage,getLocalStorage} from '../../utils/localstorage'




const Main = () => {
  /* useNavigate */
  const navigate = useNavigate()
  /* Global context */
  var { data, setDeleted } = useGlobalCotext()
  /* Local storage */
  var forumData = getLocalStorage('forumData')
  
  const [openModal, setOpenModal] = useState(false);
 const [inData,setInData] = useState([])

 
 if(!forumData){
  forumData=[]
  setLocalStorage('forumData',JSON.stringify([]))
 }

 
 
/* Info Contact list  */

  const infoContact = (id)=>{
     const infoData = forumData.filter(infofilt=>infofilt.id === id)
     setInData(infoData)
     toast.info("Info Contact")
  }





  /* Remove Contact list */
  const removeContact = (id)=>{
      Modal.confirm({
        title: "Are you sure, you want to delete this contact list?",
        onOk: ()=>{
          var newList = forumData.filter(item=>item.id !== id )
          setDeleted(newList)
          // setData(newList)
          // setLocalStorage('forumData',JSON.stringify(newList))
          toast.error('Contact deleted')
        }
      })
       
   }

  var colums = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key',
     
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
      key: 'key'
    },
    {
      title: 'Fathers name',
      dataIndex: "fathersname",
      key: 'key'
    },
    {
      title: 'Professions name',
      dataIndex: "profession",
      key: 'key',
    },
    {
      title: 'Edit  Info  Delete',
      dataIndex: "action",
      key: 'action',
      render: (_, { icons }) => (
        <>
          {icons.map((icon,id) => {
            return (
              <Button
                key={id}
                type='text'
                icon={icon}
                className='icon-button'
                onClick={(e)=>{
                  const Id = e.currentTarget.querySelector('span').dataset.id;
                  const dataType = e.currentTarget.querySelector('span').dataset.type
                  if(dataType === 'deleteIcon' ){
                    removeContact(Id)
                  }
                  if(dataType === "editIcon"){
                   navigate(`/contacts/edit/${Id}`)
                   
                  }
                  if(dataType === "infoIcon"){
                    infoContact(Id)
                    setOpenModal(true)
                    
                  }
                }} 
              />
            )
          })}
        </>
      )
    }
  ]

  const dataIcon =  forumData.map(contact => {
    return {
      id: contact.id,
      key: contact.key,
      name: contact.name,
      surname: contact.surname,
      fathersname: contact.fathersname,
      profession: contact.profession,
      icons: [
        <EditOutlined
        className='iconEdit'
        data-id={contact.id}
        data-type='editIcon' />,
        <InfoOutlined
        className='iconInfo'
        data-id={contact.id}
        data-type='infoIcon' />,
        <DeleteOutlined
          className='iconDelete'
          data-id={contact.id}
          data-type='deleteIcon'
        />
      ]
    }
  })

  return (
    <div className='Table' >
      <Table className='t1' key={data}   dataSource={dataIcon} columns={colums} >
      </Table>
      {openModal && <Modall closemodal={setOpenModal} inData={inData}  />}
    </div>
  )
}

export default  Main