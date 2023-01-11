import * as React from "react";
type InputPropsType = {
    title: string
    serchArticle: (title: string)=> void
}

export const Input = (props: InputPropsType) => {
const [title, setTitle] = React.useState('')

    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
       setTitle(event.currentTarget.value)
    }
    const SearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
       props.serchArticle(event.currentTarget.value)
    }
    return (
        <input  value={title} onChange={onChangeInputHandler} onBlur={SearchHandler}/>
    )
}