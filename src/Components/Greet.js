

const Greet = (props)=>
{
    const {name,relation} = props;
    return (
        <div>
            <h1>Hello {name} {relation}</h1>
            {/* {props.children} */}
        </div>
    );
}
export default Greet;