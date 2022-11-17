export function TableData({ name, email, course, children }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>  
      <td>{course}</td>
      {children}
    </tr>
  );
}