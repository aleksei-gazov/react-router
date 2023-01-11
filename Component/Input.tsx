import * as React from "react";
type InputPropsType = {
    serchArticle: (title: string)=> void
}

export const Input = (props: InputPropsType) => {
const [title, setTitle] = React.useState('')

    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
       setTitle(event.currentTarget.value)
    }
    const SearchHandler = () => {
       props.serchArticle(title)
       setTitle('')
    }
    return (
      <div>
  <input  value={title} onChange={onChangeInputHandler} onBlur={SearchHandler}/>
        <input name="city" list="cities"  />
<datalist id="cities">
   <option value="Naples" />
   <option value="London" />
   <option value="Berlin" />
   <option value="New York" />
   <option value="Frattamaggiore" />
</datalist>
      </div>
      
    )
}