export default function OneUser({
  user: {
    id, name, username, email,
    address: {street, suite, city, zipcode, geo: { lat, lng } },
    phone, website,
    company: {
      name: cname,
      catchPhrase,
      bs
    }
  } }) {

  return (
    <>
        <tbody>
          <tr>
          <td>{id}</td>
          <td>{username}</td>
          <td>{name}</td>
          <td><a href={`mailto:${email}`}>{email}</a></td>
          <td>{phone}</td>
          <td><a href={`http://${website}`}>{website}</a></td>
          <td>{zipcode},{street},{suite},{city}</td>
          <td><b>{cname}</b><br />{catchPhrase}<br />{bs}</td>
          </tr>
        </tbody>
    </>
  )
}