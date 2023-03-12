import ListUser from "../components/ListUsers";

export default function UsersPage({users}){
    return <>
        <h1>Table</h1>
        <table>
          <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Name</th>
          <th>Email  </th>
          <th>Phone</th>
          <th>Website</th>
          <th>Address</th>
          <th>Company</th>
          </tr>
          </table>
            <ListUser users={[...users]}/>
      
        </>
}

export async function getStaticProps(context) {
    const users = [
        await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(),
        await (await fetch('https://jsonplaceholder.typicode.com/users/2')).json(),
        await (await fetch('https://jsonplaceholder.typicode.com/users/3')).json(),
        await (await fetch('https://jsonplaceholder.typicode.com/users/4')).json(),
        await (await fetch('https://jsonplaceholder.typicode.com/users/5')).json(),
    ];

    return {
      props: {users}, 
    }
  }