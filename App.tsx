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
  const [title, setTitle] = React.useState<Array<TitleType>>([
{id: 1, img: 'photo', title: 'Friends', text: 'hello main friends'},
{id: 2, img: 'photo', title: 'Friends', text: 'hello main friends'},
{id: 3, img: 'photo', title: 'Friends', text: 'hello main friends'},
{id: 4, img: 'photo', title: 'Friends', text: 'hello main friends'},
{id: 5, img: 'photo', title: 'Friends', text: 'hello main friends'},
  ])

const setserchArticleHandler= (title: string)=> {
console.log(Date())
}

  return (
    <div>
    <Blog 
    bodySerch={title}
    serchArticleHandlerProps={setserchArticleHandler}   
    />
    </div>
  );
}
