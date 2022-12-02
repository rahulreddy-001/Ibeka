import Header from "./headerComponent";
import Banner from "./SubComponents/bannerComponent";
import Latest from "./latestComponent";
import Items from "./itemsComponent";
import Footer from "./footerComponent";
import RouteItem from "./routeItem";
import LikedItems from "./likedComponent";
import CartItems from "./cartComponent";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Items />
              <Latest />
            </>
          }
        />
        <Route path="/items/:id" element={<RouteItem />} />
        <Route path="/liked" element={<LikedItems />} />
        <Route path="/cart" element={<CartItems />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
