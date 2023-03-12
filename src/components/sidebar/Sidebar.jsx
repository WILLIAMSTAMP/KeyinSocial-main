import "./Sidebar.css"
import {Users} from "../../userData";
import CloseFriend from "../closeFriend/CloseFriend";
import {Feed, Chat, OndemandVideo, Groups, Bookmarks, QuestionAnswerSharp, WorkOutlineSharp, LocalActivitySharp, SchoolSharp  } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      <ul className="sidebarList">
        
        <li className="sidebarListItem">
        <Feed className="feedIcon"/>
        <span className="sidebarListItemText">Feed</span>
        </li>

        <li className="sidebarListItem">
          <Chat className="chatIcon"/>
          <span className="sidebarListItemText">Chats</span>
        </li>

        <li className="sidebarListItem">
          <OndemandVideo className="videoIcon"/>
          <span className="sidebarListItemText">Videos</span>
        </li>

        <li className="sidebarListItem">
          <Groups className="groupsIcon"/>
          <span className="sidebarListItemText">Groups</span>
        </li>

        <li className="sidebarListItem">
          <Bookmarks className="bookmarksIcon"/>
          <span className="sidebarListItemText">Bookmarks</span>
        </li>

        <li className="sidebarListItem">
          <QuestionAnswerSharp className="questionsIcon"/>
          <span className="sidebarListItemText">Questions</span>

        </li>
        <li className="sidebarListItem">
          <WorkOutlineSharp className="jobsIcon"/>
          <span className="sidebarListItemText">Jobs</span>
        </li>

        <li className="sidebarListItem">
          <LocalActivitySharp className="eventsIcon"/>
          <span className="sidebarListItemText">Events</span>

        </li>
        <li className="sidebarListItem">
          <SchoolSharp className="coursesIcon"/>
          <span className="sidebarListItemText">Courses</span>
        </li>

      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr"/>
      <ul className="sidebarFriendList">
        {Users.map(u=>(
          <CloseFriend key={u.id} user={u}/>
        ))}
        
      </ul>
      </div>
    </div>
  )
}
