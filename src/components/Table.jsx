import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function TableComp({ product }) {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {product.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.description}</td>
              <td>{value.price}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableComp;
