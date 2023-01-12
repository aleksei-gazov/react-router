import * as React from 'react';
import Blog from './Component/blog';
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
{id: 3, img: 'photo', title: 'Friends', text: 'hello main friends'},
{id: 4, img: 'photo', title: "London", text: 'hello main friends'},
{id: 5, img: 'photo', title: "Berlin", text: 'hello main friends'},
  ])
  const [titleInput, setTitleInput] = React.useState<Array<TitleType>>(titles)

const setserchArticleHandler= (title: string)=> {
console.log(Date())
}
 const filtredHandler = (value: string)=> {
    if (value === 'Friends') {
      setTitleInput(titleInput.filter(item => item.title === value))   
    }
    if (value === "London") {
      setTitleInput(titleInput.filter(item =>  item.title === value))
  } else  setTitleInput(titles)
}

 return (
    <div>
    <Blog 
    bodySerch={titleInput}
    serchArticleHandlerProps={setserchArticleHandler}   
    filtredHandler={filtredHandler}
    />
    </div>
  );
}
