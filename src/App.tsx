import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Accommodation from "./pages/Accommodation";
import Reservation from "./pages/Reservation";
import ReservationCheck from "./pages/ReservationCheck";
import ReservationList from "./pages/ReservationList";
import Profile from "./pages/Profile";
import Layout from "./components/layout/Layout";
import AccommodationRoom from "./pages/AccommodationRoom";
import AccommodationInformation from "./pages/AccommodationInformation";
import PageNotFound from "./pages/PageNotFound";
import Category from "./pages/Category";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/accommodation/:accommodationId" element={<AccommodationInformation />} />
        <Route path="/accommodation/:accommodationId/room/:roomOptionId" element={<AccommodationRoom />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reservation-check" element={<ReservationCheck />} />
        <Route path="/reservation-list" element={<ReservationList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
