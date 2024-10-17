import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Components/Footer';
import CourseDetails from './Pages/CourseDetails';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import Instructor from './Pages/Instructor';
import InstructorDetails from './Pages/InstructorDetails';
import News from './Pages/News';
import NewDetails from './Pages/NewsDetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About />} />
        <Route path='/course/details/:id' element={<CourseDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/instructor' element={<Instructor />} />
        <Route path='/instructor/details/:id' element={<InstructorDetails />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/details/:id' element={<NewDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
