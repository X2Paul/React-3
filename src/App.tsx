import { useEffect, useState } from 'react'
import { UserInterface } from './types/UserInterface.ts'

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, [])

  return (
    <div>
      <h1>100 posts list</h1>
      <ul>
        {users.map((user: UserInterface) => (
          <li><b>id: </b> {user.id}<br /><b>title: </b>{user.title}<br /><b>body: </b>{user.body}<hr /></li>
        ))}
      </ul>
    </div>
  )
}

export default App
