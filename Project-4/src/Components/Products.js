import { Link, Outlet } from "react-router-dom";
function Products() {
  return (
    <div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new"> New </Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default Products;