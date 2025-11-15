export  function Actor ({name})
{
    return <h4>{name}</h4>
}

export function ChildOfActor ({name,age})
{
    return <div>
        <h3>Actor of Children </h3>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
    </div>
}