import * as React from 'react';
import { Aside } from './Component/Aside';
import Blog from './Component/blog';
import { Header } from './Component/Header';
import './style.css';

export type TitleType = {
  id: number
  data: string
  img: string
  title: string
  text: string
}

export default function App() {
   let data = new Date().toLocaleDateString()
  const [titles, setTitle] = React.useState<Array<TitleType>>([
{id: 1, data: '11.01.2023', img: 'photo', title: 'Friends', text: 'hello main friends'},
{id: 2, data: data, img: 'photo', title: "London", text: 'hello main friends'},
{id: 3, data:'10.01.2023', img: 'photo', title: 'Abba', text: 'hello main friends'},
{id: 4, data:'01.09.2012', img: 'photo', title: "Crud", text: 'hello main friends'},
{id: 5, data: data, img: 'photo', title: "Berlin", text: 'hello main friends'},
  ])
  const [titleInput, setTitleInput] = React.useState<Array<TitleType>>(titles)
console.log(titleInput)
  const dopTitles = [
    {id: 1, data: '11.01.2023', img: 'photo', title: 'Friends', text: 'hello main friends'},
{id: 2, data: data, img: 'photo', title: "London", text: 'hello main friends'},
{id: 3, data:'10.01.2023', img: 'photo', title: 'Abba', text: 'hello main friends'},
  ]

const setserchArticleHandler= (title: string)=> {

}

const  addArticleHandle = () => {
  // let a = titleInput.concat(dopTitles)
  setTitleInput(titleInput.concat(dopTitles))
}

let a = titleInput
 const filtredHandler = (value: string)=> {
     if (value === 'sortArticleA_Z') {
      setTitleInput([...a.sort((a, b) => a.title > b.title ? 1 : -1)])   
    }
    if (value === "sortArticleZ_A") {
      setTitleInput([...a.sort((a, b) => a.title < b.title ? 1 : -1)])
  } 
    if (value === "data") {
      setTitleInput([...a.sort((a, b) => a.data < b.data ? 1 : -1)])
  } 
}

 return (
    <div className={'container'}>
      <Header/>
      <Aside/>
      <div className={'container_blog'}>
    <Blog 
    bodySerch={titleInput}
    serchArticleHandlerProps={setserchArticleHandler}   
    filtredHandler={filtredHandler}
    addArticleHandle={ addArticleHandle}
    />
    </div>
    </div>
  );
}
