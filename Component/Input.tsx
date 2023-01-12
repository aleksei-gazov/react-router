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
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      props.filtred(event.currentTarget.value)
    }
    const SearchHandler = () => {
       props.serchArticle(title)
       setTitle('')
    }
    return (
      <div>
  <input  value={title} onChange={onChangeInputHandler} onBlur={SearchHandler}/>
        <input name="city" list="cities"onBlur={onChangeHandler} />
<datalist id="cities">
   <option value='Friends' />
   <option value="London" />
   <option value="Berlin" />
  
</datalist>
      </div>
      
    )
}