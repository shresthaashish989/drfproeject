import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/usercomponents/Layout'
import Homepage from './pages/userpage/Homepage'
import AdminHeader from './components/admincomponents/AdminHeader'
import AdminDashboards from './pages/adminpage/AdminDashboards'
import Register from './pages/userpage/Register'
import Login from './pages/userpage/Login'
import Bloglist from './pages/adminpage/Bloglist'
import AddBlog from './pages/adminpage/AddBlog'
import AddCategory from './pages/adminpage/AddCategory'


const Myroutes = () => {
  return (
    <>
    <Router>
        <Routes>
            {/* normal user */}
            <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>

            

            </Route>
            <Route path='/admin/' element={<AdminHeader/>}>
            <Route index element={<AdminDashboards/>}/>
            <Route path='addblog' element={<AddBlog/>}/>
            <Route path='addlist' element={<Bloglist/>}/>
            <Route path='addcategory' element={<AddCategory/>}/>

            </Route>
        </Routes>
    </Router>
    </>
  )
}

export default Myroutes