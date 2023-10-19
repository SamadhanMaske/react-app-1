

const Greet = ({name,relation})=>
{
    return (
        <div>
            <h1>Hello {name} {relation}</h1>
            {/* {props.children} */}
        </div>
    );
}
export default Greet;