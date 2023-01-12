import * as React from "react";
type InputPropsType = {
    serchArticle: (title: string)=> void
    filtred: (value: string)=> void
}

export const Input = (props: InputPropsType) => {
const [title, setTitle] = React.useState('')

    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
       setTitle(event.currentTarget.value)
    }
    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      props.filtred(event.currentTarget.value)
    }
    const SearchHandler = () => {
       props.serchArticle(title)
       setTitle('')
    }
    return (
      <div>
  <input  value={title} onChange={onChangeInputHandler} onBlur={SearchHandler}/>
   <select onChange={onChangeHandler} >
   <option value="">Выберите значение</option>
  <option value='newArticle'>newArticle</option>
  <option value="sortArticleA_Z">Sort Article A-Z</option>
  <option value="sortArticleZ_A">Sort Article Z-A</option>
  
</select>


      </div>
      
    )
}