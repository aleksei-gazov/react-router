import * as React from 'react';
import { Aside } from './Component/Aside';
import Blog from './Component/blog';
import { Header } from './Component/Header';
import './style.css';

export type TitleType = {
  id: number
  img: string
  title: string
  text: string
}

export default function App() {
  const [titles, setTitle] = React.useState<Array<TitleType>>([
{id: 1, img: 'photo', title: 'Friends', text: 'hello main friends'},
{id: 2, img: 'photo', title: "London", text: 'hello main friends'},
{id: 3, img: 'photo', title: 'Abba', text: 'hello main friends'},
{id: 4, img: 'photo', title: "Crud", text: 'hello main friends'},
{id: 5, img: 'photo', title: "Berlin", text: 'hello main friends'},
  ])
  const [titleInput, setTitleInput] = React.useState<Array<TitleType>>(titles)
console.log(titleInput)
const setserchArticleHandler= (title: string)=> {
console.log(Date())
}
let a = titleInput
 const filtredHandler = (value: string)=> {
     if (value === 'sortArticleA_Z') {
      setTitleInput([...a.sort((a, b) => a.title > b.title ? 1 : -1)])   
    }
    if (value === "sortArticleZ_A") {
      setTitleInput([...a.sort((a, b) => a.title < b.title ? 1 : -1)])
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
    />
    </div>
    </div>
  );
}
