import * as React from "react";

export type ProfileType = {
    name: string

}

export const Profile=(props: ProfileType) => {
    // const onClickHandler = () => {
    //     props.callBack()
    // }
return (
    <div>
      {props.name}
    </div>
)
}