import AboutPage from "@/pages/AboutPage";
import BlogDetailsPage from "@/pages/BlogDetailsPage";
import BlogPage from "@/pages/BlogPage";
import CartPage from "@/pages/CartPage";
import ContestPage from "@/pages/ContestPage";
import DynamicPage from "@/pages/DynamicPage";
import ErrorPage from "@/pages/Error/ErrorPage";
import JoinCommunityPage from "@/pages/JoinCommunityPage";
import PhotoContest from "@/pages/PhotoContest";
import PhotoGallery from "@/pages/PhotoGallery";
import PlanTripPage from "@/pages/PlanTripPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import ShopPage from "@/pages/ShopPage";
import UserAccountPage from "@/pages/UserAccountPage";
import VerifyEmail from "@/pages/VerifyEmail";
import VerifyOtp from "@/pages/VerifyOtp";
import PrivateRoute from "@/routes/PrivateRoute";
import PublicRoute from "@/routes/PublicRoute";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ResetPassword from "@/pages/ResetPassword";
import CheckoutPage from "@/pages/CheckoutPage";
import SuccessPayment from "@/pages/SuccessPayment";
import ErrorPayment from "@/pages/ErrorPayment";
import ContactPage from "@/pages/ContactPage";
import AffiliatePage from "@/pages/AffiliatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        ),
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/plan-your-trip",
        element: <PlanTripPage />
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/contest",
        element: <ContestPage />,
      },
      {
        path: "/blogs",
        element:<BlogPage />
      },
      {
        path: "/blogs/:slug",
        element:<BlogDetailsPage />
      },
      {
        path: "/affiliate",
        element:<AffiliatePage />
      },
      {
        path: "/contact-us",
        element:<ContactPage />
      },
      {
        path: "/contest/photo-contest",
        element: (
          <PrivateRoute>
            <PhotoContest />
          </PrivateRoute>
        ),
      },
      {
        path: "/join-community",
        element: (
          <PrivateRoute>
            <JoinCommunityPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/products/:slug",
        element: <ProductDetailsPage />
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/photo-gallery",
        element: <PhotoGallery />
      },
      {
        path: "/account",
        element: (
          <PrivateRoute>
            <UserAccountPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/verify-email",
        element: <VerifyEmail />
      },
      {
        path: "/verify-otp",
        element: <VerifyOtp />
      },
      {
        path: "/reset-password",
        element: <ResetPassword />
      },
      {
        path: "/:slug",
        element: <DynamicPage />
      },
      {
        path: "/payment-success",
        element: (
          <PrivateRoute>
            <SuccessPayment />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-error",
        element: (
          <PrivateRoute>
            <ErrorPayment />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
