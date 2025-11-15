// Conditional Rending -1 
// export default function Todo ({name,isDone})
// {
//     if (isDone)
//     {
//         return <h3>Wel done {name} Complate!.</h3>
//     }
//     else
//     {
//         return <h3>Work on {name}</h3>
//     }
// }


// Conditional Rending -2 using ternary operator
// export default function Todo ({name,isDone})
// {
//     return <h3>{isDone ? 'Finished': 'work on '} {name}</h3>
// }

// Conditional Rending -3 using by && just true condition 
// export default function Todo ({name,isDone})
// {
//     return <h3>{isDone && 'Finished: '} {name}</h3>
// }

// Conditional Rending -3 using by || just False condition 
export default function Todo ({name,isDone})
{
    return <h3>{isDone || 'Work on: '} {name}</h3>
}