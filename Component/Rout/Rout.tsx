import * as React from "react";
import {Routes, Route, Navigate, NavLink} from 'react-router-dom';
import { AboutPage } from "../../Component/Rout/AboutPage";
import { Content } from "../../Component/Rout/Content";
import { HomePage } from "../../Component/Rout/HomePage";
import { Error } from "../../Component/Rout/Error";
import { Layout } from "../../Component/Rout/Layout";
import { SinglePage } from "../../Component/Rout/SinglePage";
import {CreatePost } from "../../Component/Rout/CreatePost";
import { BlogPage } from "../../Component/Rout/BlogPage";

export const Rout =() => {

return (
    <div>
     <Routes>
       <Route path='/' element={ <Layout/>}>
       <Route index element={<Navigate to ={<HomePage/>} />}/>
       <Route path='home' element={<HomePage />}/>
       <Route path='content' element={<Content/>}/>
       <Route path='blog' element={<BlogPage/>}/>
       <Route path='blog/:id' element={<SinglePage/>}/>
       <Route path='blog/new' element={<CreatePost/>}/>
       <Route path='about' element={<AboutPage/>}/>
       <Route path='*' element={<Error/>}/>
       </Route>
     </Routes>
    </div>
)
}