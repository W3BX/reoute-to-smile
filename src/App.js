import React, { Fragment, useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "./slice/productSlice";
import TableComp from "./components/Table";
import AddproComp from "./components/Addproduct";

export default function App() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.value);

  useEffect(() => {
    fetch("https://dummyjson.com/products?select=id,title,description,price")
      .then((res) => res.json())
      .then((value) => dispatch(addProduct(value)));
  }, []);

  return (
    <div className="App">
      {product.length > 0 && (
        <Fragment>
          <AddproComp />
          <TableComp product={product} />
        </Fragment>
      )}
    </div>
  );
}
