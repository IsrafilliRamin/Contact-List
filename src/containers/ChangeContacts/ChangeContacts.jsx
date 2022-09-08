import React, { useEffect } from 'react'
import { Form, Input, Button, Radio, Select, Checkbox } from "antd";
import { useGlobalCotext } from '../../context/context';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {setLocalStorage,getLocalStorage} from '../../utils/localstorage'

const ChangeContacts = () => {
  /* Globalcontext */
  var {setData } = useGlobalCotext()
  var forumData = getLocalStorage('forumData')
  /* useNavigate */
   const navigate = useNavigate()
/* useParams */
  let {id} = useParams()
  let Change = forumData.find(changeData=>changeData.id === id)
  setLocalStorage("change",JSON.stringify(Change))
  var locChange = localStorage.getItem("change")
  var parsLoc = JSON.parse(locChange)
 

  if(locChange === "change"){
    localStorage.getItem("change")
    
  }
 

  
  
  useEffect(()=>{
    setLocalStorage("change",JSON.stringify(Change))
  },[Change])

  
  const onFinish = (e) => {
    e.key = id
    const newObj = {...e,id}
   const newData = forumData.map(filt=>{
      if(filt.id === newObj.id ){
        return newObj
      }
      return filt
    })
    setLocalStorage('forumData',JSON.stringify(newData))
    setData(newData)
    navigate('/contacts')
    toast.info("Contact changed")
  }


  
  return (
    <div key={id} className='FormNewContacts'>
    <h1>Edit Contact</h1>
    <Form key={id} className='FormClass' onFinish={onFinish}
      initialValues={{
        name: parsLoc?.name,
        surname: parsLoc?.surname,
        fathersname: parsLoc?.fathersname,
        profession: parsLoc?.profession,
        radio:parsLoc?.radio,
        email:parsLoc?.email
      }}
    >
      <Form.Item key={id} label="Name" name="name" required
        rules={[{ required: true, message: "Please select an name!" }]}>
        <Input required placeholder="Name" ></Input>
      </Form.Item>
      <Form.Item label="Surname" name="surname" required>
        <Input placeholder="Surname" required></Input>
      </Form.Item>
      <Form.Item label="Father's name" required name="fathersname">
        <Input placeholder="Father's name" required ></Input>
      </Form.Item>
      <Form.Item name={['email']} required label="Email" rules={[{ type: 'email' }]}>
        <Input required placeholder='Email' />
      </Form.Item>
      <Form.Item label='Works' required name='profession'>
        <Select >
          <Select.Option value="Front end Developer">Front end Developer</Select.Option>
          <Select.Option value="Back end Developer">Back end Developer</Select.Option>
          <Select.Option value="Fullstack Developer">Fullstack Developer</Select.Option>
          <Select.Option value="React Developer">React Developer</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Gender" required
        name="radio"
        rules={[{ required: true, message: "Please select an Gender!" }]}>
        <Radio.Group >
          <Radio value="Men" required> Men </Radio>
          <Radio value="Women" required> Women </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
       
      >
        <Checkbox>
        I agree to the terms
        </Checkbox>
      </Form.Item>
      <Form.Item>
        {/* <NavLink to='/'> */}
        <Button


          block type='primary' htmlType='submit'>Send Form</Button>
        {/*  </NavLink>    */}
      </Form.Item>
    </Form>
  </div>
  )
}

export default ChangeContacts