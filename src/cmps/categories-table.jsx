export const CategoriesTable = (props) => {
  const { categories } = props;
  return (
    <tr>
      <th>Full Name</th>
      {categories.map((c) => {
        return <th>{c.type}</th>;
      })}
    </tr>
  );
};
