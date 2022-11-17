export function TableHead({ children }) {
  return (
    <tr>
      <th>Nome</th>
      <th>Email</th>
      <th>Curso</th>
      {children}
    </tr>
  );
}