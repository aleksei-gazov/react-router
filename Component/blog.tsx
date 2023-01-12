import * as React from 'react';
import { TitleType } from '../App';
import { Input } from '../Component/Input';


type BlogPropsType = {
  serchArticleHandlerProps: (title: string)=> void
  bodySerch: TitleType[]
  filtredHandler: (value: string)=> void

}

export default function Blog(props: BlogPropsType) {

const serchArticleHandler = (title: string) => {
  props.serchArticleHandlerProps(title)
}



  return (
    <div>
   <Input 
   serchArticle={serchArticleHandler}
   filtred={props.filtredHandler}
   />
   {props.bodySerch.map((t)=> {
     return (
       <tr key={t.id}>
         <td >{t.img}</td>---
         <td >{t.title}</td>
       </tr>
     )
   })}
    </div>
  );
}
