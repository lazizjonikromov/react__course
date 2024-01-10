import axios from 'axios'
import React, { useEffect, useState } from 'react'

function MethodRequests() {
  const [users, setData] = useState(null)

  // GET

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios.get('https://reqres.in/api/users')
  //     .then(res => setData(res.data.data))
  //     .catch(err => console.log(err));
  //   }

  //   fetchData()
  // }, [])

  // POST

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios.post('https://reqres.in/api/users', {
  //       "name": "morpheus",
  //       "job": "leader"
  //     })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  //   }

  //   fetchData()
  // }, [])

  // UPDATE

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios.put('https://reqres.in/api/users/2', {
  //       "name": "Laziz",
  //       "job": "Frontend Developer"
  //     })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  //   }

  //   fetchData()
  // }, [])

  // DELETE

  useEffect(() => {
    const fetchData = async () => {
      await axios.delete('https://reqres.in/api/users/2')
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }

    fetchData()
  }, [])
  
    
  return (
    <>
      <h2>Method of Requests // Using Axios</h2>
      {/* {
        users?.map((user, index) => {
          return(
            <div key={index}>
              <h3>{user.first_name}</h3>
            </div>
          )
        }) 
      } */}
    </>
  )
}

export default MethodRequests