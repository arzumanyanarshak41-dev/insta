import { useState } from 'react';
import { LogIn } from '../Components/LogIn/LogIn';
import { SignUp } from '../Components/SingUp/SingUp';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Components/Home/Home';
import { General } from '../Components/General/General';
import { Search } from '../Components/Search/Search';
import { Direct } from '../Components/Direct/Direct';

export function App() {
 const users = [
  {
    fullname: "Arshak Arzumanyan",
    username: "arshak03",
    password: "pass1234",
    email: "arshak@gmail.com",
    userimg: "https://d23etkghwwc7sj.cloudfront.net/uploads/tour/images/685121414b2a6-khustup.webp",
    posts: 5,
    followers: 321,
    following: 178
  },
  {
    fullname: "John Smith",
    username: "john_s",
    password: "john2024",
    email: "john.smith@mail.com",
    userimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6RtzL7HpYjkJJJS-u9XZ6-n74KXF4OW9Jg&s",
    posts: 3,
    followers: 205,
    following: 245
  },
  {
    fullname: "Anna Brown",
    username: "anna_b",
    password: "anna@123",
    email: "anna.brown@mail.com",
    userimg: "https://media.istockphoto.com/id/1296154648/photo/portrait-of-a-happy-mature-man-smiling-at-camera.jpg?s=612x612&w=is&k=20&c=eh_5YMCi7TBIiaz2ac-DGrU4W6VTCMyFKTQiwvXlllE=",
    posts: 7,
    followers: 298,
    following: 320
  },
  {
    fullname: "Michael Johnson",
    username: "mike_j",
    password: "mikePass",
    email: "michael.j@email.com",
    userimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6XFswlnmcKAfCacpg0-3dWHzCiWxbVqPvA&s",
    posts: 2,
    followers: 310,
    following: 112
  },
  {
    fullname: "Emily Davis",
    username: "emily_d",
    password: "emily321",
    email: "emily.davis@email.com",
    userimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-1H5nzmbVW_UU74sC5zuIQe4FwW_Tm7XzQ&s",
    posts: 6,
    followers: 245,
    following: 400
  },
  {
    fullname: "David Wilson",
    username: "david_w",
    password: "wilson99",
    email: "david.wilson@mail.com",
    userimg: "https://masterpiecer-images.s3.yandex.net/a7fb7e48718e11eebf043abd0be4d755:upscaled",
    posts: 4,
    followers: 333,
    following: 289
  },
  {
    fullname: "Sophia Martinez",
    username: "sophia_m",
    password: "sophia777",
    email: "sophia.m@mail.com",
    userimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_1v9BHUenboGM-5dGAdk-fgIrCBEnXsbCw&s",
    posts: 5,
    followers: 222,
    following: 310
  },
  {
    fullname: "Daniel Taylor",
    username: "dan_t",
    password: "daniel123",
    email: "daniel.taylor@mail.com",
    userimg: "https://media.istockphoto.com/id/1206392555/photo/a-portrait-of-bearded-surprised-man-people-and-emotions-concept.jpg?s=612x612&w=is&k=20&c=aB7-mUGC2pAicvop72tXAlBS0IqddFy4ehnSfI0j_Ns=",
    posts: 3,
    followers: 290,
    following: 420
  },
  {
    fullname: "Olivia Anderson",
    username: "olivia_a",
    password: "oliviaPass",
    email: "olivia.anderson@mail.com",
    userimg: "https://masterpiecer-images.s3.yandex.net/9474a4db2be911eebcb75a1112d6d6c5:upscaled",
    posts: 8,
    followers: 345,
    following: 500
  },
  {
    fullname: "James Thomas",
    username: "james_t",
    password: "james000",
    email: "james.thomas@mail.com",
    userimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ESLGfYu71bYUn91-UTsmXIg_c5Gz9HhIQg&s",
    posts: 2,
    followers: 212,
    following: 150
  }
];


const[data,setData]=useState(users)
const [logedUser,setLogedUser] = useState({})
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LogIn data={data} setLogedUser = {setLogedUser}/>} />
        <Route path='/signup' element={<SignUp data={data} setData={setData}/>} />
        <Route path='/home' element={<Home logedUser={logedUser}/>}/>
        <Route path='/general' element={<General data={data} logedUser={logedUser}/>}/>
        <Route path='/search' element={<Search logedUser={logedUser} data={data}/>}/>
        <Route path='/massages' element={<Direct data={data} logedUser={logedUser}/>}/>
      </Routes>
    </div>
  );
}

