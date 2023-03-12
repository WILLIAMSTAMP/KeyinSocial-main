import "./Share.css"
import {AddAPhotoOutlined, Label, RoomOutlined, SentimentSatisfiedOutlined  } from "@mui/icons-material";
// The "Share" component is positioned at the top of the "feed" component and is called from inside the "Feed" component function. 
// The component contains 6 elements (ShareInput, photo/video upload, tag, location, emoji and a submit button element.)
export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg"src="/assets/1.jpg" alt="" />
                {/* Search */}
                <input placeholder="What's on your mind? " className="shareInput"/>
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    {/* Photo/video */}
                    <div className="shareOption">
                        <AddAPhotoOutlined className="uploadMedia"/>
                        <span className="shareOptionText">Photo/Video</span>
                    </div>
                    {/* Tag */}
                    <div className="shareOption">
                        <Label className="tagFriend"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    {/* Location */}
                    <div className="shareOption">
                        <RoomOutlined className="location"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    {/* Emoji */}
                    <div className="shareOption">
                    <SentimentSatisfiedOutlined className="emoji"/>
                        <span className="shareOptionText">Emoji</span>
                    </div>
                </div>
                {/* Share Button */}
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
