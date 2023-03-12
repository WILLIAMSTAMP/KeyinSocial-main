import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import "./Home.css"

// The "Home" component contains Topbar, Sidebar, Feed and Rightbar components. All components are imported at the top and the Home component is then called in the main App.js.

export default function Home() {
  return (
    <>
   <Topbar/>
   {/* Placing "Sidebar", "Feed" and "Rightbar" components  inside "homecontainer" className enables us to specifity attributes and layout of the "Home" page.    */}
   <div className="homeContainer">
   <Sidebar/>
   <Feed/>
   <Rightbar/>
   </div>
    </>
  )
}
