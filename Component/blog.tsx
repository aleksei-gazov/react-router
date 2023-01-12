import * as React from 'react';
import { TitleType } from '../App';
import { Button } from '../Component/Button';
import { Input } from '../Component/Input';


type BlogPropsType = {
  serchArticleHandlerProps: (title: string)=> void
  bodySerch: TitleType[]
  filtredHandler: (value: string)=> void
  addArticleHandle: ()=> void

}

export default function Blog(props: BlogPropsType) {

const serchArticleHandler = (title: string) => {
  props.serchArticleHandlerProps(title)
}

const addArticle = ()=> {
  props.addArticleHandle()
}

  return (
    <div>
   <Input 
   serchArticle={serchArticleHandler}
   filtred={props.filtredHandler}
   />
   {props.bodySerch.map((t, index)=> {
     return (
       <tr key={index}>
         <td >{t.img}</td>---
         <td >{t.data}</td>---
         <td >{t.title}</td>
       </tr>
     )
   })}
   <Button callBack={addArticle} name={'accordion'}/>
    </div>
  );
}
