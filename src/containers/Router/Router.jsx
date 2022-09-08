import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainContacts from '../MainContacts/MainContacts'
import NewContacts from '../NewContacts/NewContacts'
import ChangeContacts from '../ChangeContacts/ChangeContacts'
import Error from '../Error/Error'
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainContacts />} />
                <Route path='/contacts/' element={<MainContacts />} />
                <Route path='contacts/new/' element={<NewContacts />} />
                <Route path='/contacts/edit/:id' element={<ChangeContacts />} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router