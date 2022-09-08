import React from 'react'
import { Form, Input, Button, Radio, Select, Checkbox } from "antd";
import './fayl.scss'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import nextId from 'react-id-generator';
import { /* setLocalStorage, */ getLocalStorage } from '../../utils/localstorage'
import { useGlobalCotext } from '../../context/context';

const NewContacts = () => {
  var forumData = getLocalStorage('forumData')
  /* useNavigate */
  const navigate = useNavigate()
  /* GlobalContext */
  const {setReducerData} = useGlobalCotext()
  /* Id unique */
  let random = Math.random() * 1000
  const id = parseInt(random) + nextId()
  

  const onFinish = (e) => {
    if (e.name.startsWith(" ") || e.surname.startsWith(" ") || e.fathersname.startsWith(" ")) {

      return toast.error("Unknown sign")
    }
    e.key = id
    e.id = id

    forumData.push(e)
    setReducerData(e)
    /* setLocalStorage('forumData', JSON.stringify(forumData)) */
    /* localStorage.setItem('forumData', JSON.stringify(forumData)) */
    navigate('/contacts')
    toast.success("Contact has been added")

  }
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  return (
    <div className='FormNewContacts' key={id}>
      <h1>New Contacts</h1>
      <Form key={id} className='FormClass' onFinish={onFinish}
        initialValues={{
          profession: "Front end Developer"
        }}
      >
        <Form.Item label="Name" name="name" required key={id}
          rules={[{ required: true, message: "Please select an name!" }]}>
          <Input required placeholder="Name"  ></Input>
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
                value ? Promise.resolve() : Promise.reject(new Error('Should accept terms')),
            },
          ]}
          {...tailFormItemLayout}
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

export default NewContacts