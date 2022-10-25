import { useState } from "react";
const UsersView = () => {
  const [users,setUsers] = useState([])
  // const [user,setUser] = useState({})
  // const [userId, setUserId] = useState(0)
  const [userName,setUserName] = useState("")
  const [userAge, setUserAge] = useState(0)
  const [curEditUserName, setCurUserEditName] = useState("")
  const [curEditUserAge, setCurUserEditAge] = useState(0)
  
  const handleSubmit = e =>{
    e.preventDefault()
    const user = {
      id: users.length,
      name: userName,
      age: userAge
    }
    setUsers([...users,user])
    setUserAge(0)
    setUserName("")
  }
  const editUser = (e,id) =>{
    e.preventDefault()
    let curUsers = [...users]
    curUsers[id] = {
      id: id,
      name: userName,
      age: userAge
    }
    setUsers(curUsers)
    setUserAge(0)
    setUserName("")
  }
  const deleteUser = (id) =>{
    let curUsers = [...users]
    curUsers.splice(id,1)
    curUsers.map((user,index)=>{user.id= index})
    setUsers(curUsers)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> nom :</label>
        <input
          type="text"
          value={userName}
          onChange={e=>setUserName(e.target.value)}
        />
        <label> age :</label>
        <input
          type="text"
          value={userAge}
          onChange={e=>setUserAge(e.target.value)}
        />
        <button>Ajouter</button>
      </form>
      {users.length >0 &&
        users.map((user) =>(
          <form key={user.id} onSubmit={e=>editUser(e,user.id)}>
            <label>nom :</label>
            <input
              type="text"
              value={curEditUserName? curEditUserName: user.name}
              onChange={e=>setCurUserEditName(e.target.value)}
            />
            <label>age :</label>
            <input 
              type="text"
              value={curEditUserAge?curEditUserAge:user.age}
              onChange={e=>setCurUserEditAge(e.target.value)}
            />
            <button type="button" onClick={()=>deleteUser(user.id)}>supprimer</button>
            <button type="submit"> Modifier</button>
          </form>
        ))
      }
    </>
  )
}
export default UsersView;
