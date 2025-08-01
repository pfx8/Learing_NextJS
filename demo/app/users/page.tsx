export default async function UsersPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json()
    
    return (
      <div>
        <p></p>
        <h1>Users list</h1>
        <ul>
            {users.map((user: {id: number; name: string}) =>(
                <li key={user.id}>
                    <h4>{user.name}</h4>
                </li>
            ))}
        </ul>
      </div>
    );
}