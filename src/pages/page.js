import {useState, useEffect} from 'react';
import axios from "axios";
import Layout from "../components/Layout";
import Link from 'next/link'

export default function Page() {
  const [users, setUser] = useState([]);

  const getUsers = async () => {
    try {
      const { data, status } = await axios.get('https://jsonplaceholder.typicode.com/users');
      if(status === 200) {
        console.clear();
        console.log(data);
        setUser(data);
      }
    }
    catch (error) {
      error.response.data;
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <Layout>
      <div>
        <h1>Hello, Next.js!</h1>
        <p>Description</p>

        <div>
          <ul>
            {users.map((user)=> (
              <li key={`id_${user.id}`}>{user.id} - {user.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}