
import Post from "../post/Post";
import Share from "../share/Share.jsx";
import "./Feed.css";
import { Posts } from "../../userData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* Posts.map pulls properties from the userData array.
        Post key is the unique id for each user.

        Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable and unique identity:  */}
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}