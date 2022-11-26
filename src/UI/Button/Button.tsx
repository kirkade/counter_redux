
type ButtonsType = {
    name: string,
    callback: () => void,
    disabled:boolean
}

export const Button = (props: ButtonsType) => {

    return (
        <div>
            <button onClick={() => props.callback()} disabled={props.disabled}>{props.name}</button>
        </div>
    )
}