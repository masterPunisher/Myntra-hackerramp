
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1  from './components/Navbar1';
import Post from './components/Post';

function Home() {
  return (
    <div >
    <Navbar1/>
<div>
 <Post nickname="Sample1" profilepicture="https://c4.wallpaperflare.com/wallpaper/294/365/277/hrithik-roshan-5k-bollywood-wallpaper-preview.jpg" caption="HRX Pehno Be!" image="https://media.istockphoto.com/photos/young-smiling-handsome-man-in-casual-clothes-posing-isolated-on-blue-picture-id1249420269?b=1&k=20&m=1249420269&s=170667a&w=0&h=Bg1BPWCH2z_hpe0HbHf5Ns_CAHD1h_q3lYy4XR69UrY="/>
 <Post nickname="Sample2" profilepicture="https://wallpapercave.com/wp/wp4704772.jpg" caption="Ayushman Khurana" image="https://wallpapercave.com/wp/wp4704773.jpg"/>
 <Post nickname="Sample3" profilepicture="https://media.istockphoto.com/photos/portrait-of-a-mature-man-with-a-little-smile-at-the-camera-right-side-picture-id1277873802?b=1&k=20&m=1277873802&s=170667a&w=0&h=jkQ_v0-o10phanZhWxRn9QpvCAUKn8qwdWT5BtR9QWk=" caption="Post Caption" image="https://media.istockphoto.com/photos/handsome-man-downtown-picture-id896858190?b=1&k=20&m=896858190&s=170667a&w=0&h=lGElMXXHNuUVm9i9M2tcTJ7RQFuN1Kk9d4Qj8Z94wME="/>

 </div>
 
   </div>
  );
}

export default Home;
