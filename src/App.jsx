import TodoList from "./1.TodoList/TodoList";
import Banner from "./2.Props/Banner";
import BannerContent from "./2.Props/BannerContent";
import Button from "./3.Event Handling/Button";
import State from "./4.State/State";
import MainLayout from "./7.Middle/Layout/MainLayout";
import About from "./7.Middle/Pages/About";
import Blog from "./7.Middle/Pages/Blog";
import BlogDetail from "./7.Middle/Pages/Blog-Detail";
import Contact from "./7.Middle/Pages/Contact";
import ContactPage from "./7.Middle/Pages/ContactPage";
import Course from "./7.Middle/Pages/Course";
import CourseDetail from "./7.Middle/Pages/CourseDetail";
import HomePage from "./7.Middle/Pages/HomePage";
import PageNotFound from "./7.Middle/Pages/PageNotFound";
import Payment from "./7.Middle/Pages/Payment";
import Privacy from "./7.Middle/Pages/Privacy";
import StudentProfile from "./7.Middle/Pages/StudentProfile";

function App() {
  return (
    <div>
      <MainLayout>
        <HomePage />
        <About />
        <ContactPage />
        <PageNotFound />
        <BlogDetail />
        <Blog />
        <Contact />
        <CourseDetail />
        <Course />
        <Payment />
        <Privacy />
        <StudentProfile />
      </MainLayout>
      {/* <TodoList /> */}
      {/* <Banner width="300px" height="200px" background="orange">
        <BannerContent {...contentProps} />
        <h3>Hello</h3>
        <p>This is fucking feeling</p>
      </Banner> */}
      {/* <Button /> */}
      {/* <State defaultCount={100} /> */}
    </div>
  );
}

export default App;
