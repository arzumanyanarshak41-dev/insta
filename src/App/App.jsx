import { useState } from 'react';
import { LogIn } from '../Components/LogIn/LogIn';
import { SignUp } from '../Components/SingUp/SingUp';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Components/Home/Home';
import { General } from '../Components/General/General';
import { Search } from '../Components/Search/Search';
import { Direct } from '../Components/Direct/Direct';
import { VewArchive } from '../Components/VewArchive/VewArchive';
import { Profil } from '../Components/Profil/Profil';
import { EditProfile } from '../Components/EditProfile/EditProfile';

export function App() {
  const users = [
  {
    fullname: "Instagram Admin",
    username: "admin",
    password: "admin123",
    email: "admin@instagram.com",
    userimg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png",
    posts: 0,
    followers: 0,
    following: 0,
    messages: [],
    bio: "Official Instagram Admin Account 📸 | Here to help!",
    isFollowing: false
  },
  {
    fullname: "Arshak Arzumanyan",
    username: "arshak03",
    password: "pass1234",
    email: "arshak@gmail.com",
    userimg: "https://d23etkghwwc7sj.cloudfront.net/uploads/tour/images/685121414b2a6-khustup.webp",
    posts: 0,
    followers: 321,
    following: 178,
    messages: [],
    bio: "Frontend developer in progress ⚛️ | React & JS | From Armenia 🇦🇲",
    isFollowing: false
  },
  {
    fullname: "John Smith",
    username: "john_s",
    password: "john2024",
    email: "john.smith@mail.com",
    userimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6RtzL7HpYjkJJJS-u9XZ6-n74KXF4OW9Jg&s",
    posts: 0,
    followers: 205,
    following: 245,
    messages: [],
    bio: "Coffee lover ☕ | Digital creator | NYC",
    isFollowing: false
  },
  {
    fullname: "Anna Brown",
    username: "anna_b",
    password: "anna@123",
    email: "anna.brown@mail.com",
    userimg: "https://media.istockphoto.com/id/1296154648/photo/portrait-of-a-happy-mature-man-smiling-at-camera.jpg?s=612x612&w=is&k=20&c=eh_5YMCi7TBIiaz2ac-DGrU4W6VTCMyFKTQiwvXlllE=",
    posts: 0,
    followers: 298,
    following: 320,
    messages: [],
    bio: "Lifestyle | Travel ✈️ | Mindfulness 🌿",
    isFollowing: false
  },
  {
    fullname: "Michael Johnson",
    username: "mike_j",
    password: "mikePass",
    email: "michael.j@email.com",
    userimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6XFswlnmcKAfCacpg0-3dWHzCiWxbVqPvA&s",
    posts: 0,
    followers: 310,
    following: 112,
    messages: [],
    bio: "Fitness & health 💪 | Everyday motivation",
    isFollowing: false
  },
  {
    fullname: "Emily Davis",
    username: "emily_d",
    password: "emily321",
    email: "emily.davis@email.com",
    userimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-1H5nzmbVW_UU74sC5zuIQe4FwW_Tm7XzQ&s",
    posts: 0,
    followers: 245,
    following: 400,
    messages: [],
    bio: "UX/UI designer 🎨 | Minimal & clean design",
    isFollowing: false
  },
  {
    fullname: "David Wilson",
    username: "david_w",
    password: "wilson99",
    email: "david.wilson@mail.com",
    userimg: "https://masterpiecer-images.s3.yandex.net/a7fb7e48718e11eebf043abd0be4d755:upscaled",
    posts: 0,
    followers: 333,
    following: 289,
    messages: [],
    bio: "Photographer 📸 | Nature & street shots",
    isFollowing: false
  },
  {
    fullname: "Sophia Martinez",
    username: "sophia_m",
    password: "sophia777",
    email: "sophia.m@mail.com",
    userimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_1v9BHUenboGM-5dGAdk-fgIrCBEnXsbCw&s",
    posts: 0,
    followers: 222,
    following: 310,
    messages: [],
    bio: "Fashion | Beauty ✨ | Self-love",
    isFollowing: false
  },
  {
    fullname: "Daniel Taylor",
    username: "dan_t",
    password: "daniel123",
    email: "daniel.taylor@mail.com",
    userimg: "https://media.istockphoto.com/id/1206392555/photo/a-portrait-of-bearded-surprised-man-people-and-emotions-concept.jpg?s=612x612&w=is&k=20&c=aB7-mUGC2pAicvop72tXAlBS0IqddFy4ehnSfI0j_Ns=",
    posts: 0,
    followers: 290,
    following: 420,
    messages: [],
    bio: "Tech enthusiast 🤖 | Code & coffee",
    isFollowing: false
  },
  {
    fullname: "Olivia Anderson",
    username: "olivia_a",
    password: "oliviaPass",
    email: "olivia.anderson@mail.com",
    userimg: "https://masterpiecer-images.s3.yandex.net/9474a4db2be911eebcb75a1112d6d6c5:upscaled",
    posts: 0,
    followers: 345,
    following: 500,
    messages: [],
    bio: "Travel blogger 🌍 | Sharing moments",
    isFollowing: false
  },
  {
    fullname: "James Thomas",
    username: "james_t",
    password: "james000",
    email: "james.thomas@mail.com",
    userimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ESLGfYu71bYUn91-UTsmXIg_c5Gz9HhIQg&s",
    posts: 0,
    followers: 212,
    following: 150,
    messages: [],
    bio: "Simple life | Good vibes only ✌️",
    isFollowing: false
  }
];


  const [data, setData] = useState(users)
  const [logedUser, setLogedUser] = useState({})
  const [choosedUser, setChoosedUser] = useState({})
  const [who, setWho] = useState(data[0])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LogIn data={data} setLogedUser={setLogedUser} />} />
        <Route path='/signup' element={<SignUp data={data} setData={setData} />} />
        <Route path='/home' element={<Home logedUser={logedUser} />} />
        <Route path='/general' element={<General data={data} logedUser={logedUser} setChoosedUser={setChoosedUser} setWho={setWho} />} />
        <Route path='/search' element={<Search logedUser={logedUser} data={data} setChoosedUser={setChoosedUser} setWho={setWho} />} />
        <Route path='/massages' element={<Direct data={data} logedUser={logedUser} setData={setData} who={who} setChoosedUser={setChoosedUser}/>} />
        <Route path="/archive" element={<VewArchive logedUser={logedUser} />} />
        <Route path='/profile' element={<Profil choosedUser={choosedUser} logedUser={logedUser} setChoosedUser={setChoosedUser} setData={setData} data={data} setWho={setWho}/>} />
        <Route path='/editProfile' element={<EditProfile logedUser={logedUser} data={data} setData={setData} setLogedUser={setLogedUser} />} />
      </Routes>
    </div>
  );
}

