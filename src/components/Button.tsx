
type ButtonsType = {
    name: string,
    callback: () => void,
}

export const Button = (props: ButtonsType) => {

    return (
        <div>
            <button onClick={() => props.callback()}>{props.name}</button>
        </div>
    )
}