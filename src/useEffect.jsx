export default function ShowUser ({user})
{
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email:  {user.email}</p>
        </div>
    )
}