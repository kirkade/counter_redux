
type ButtonsType = {
    name: string,
    callback: () => void,
    disabled:boolean
}

export const MyButton = (props: ButtonsType) => {

    return (
        <div>
            <button onClick={() => props.callback()} disabled={props.disabled}>{props.name}</button>
        </div>
    )
}