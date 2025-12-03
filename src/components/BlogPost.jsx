// src/components/BlogPost.jsx
import { useState } from 'react';

export default function BlogPost({ title, content, initialViews = 0, initialLikes = 0 }) {
  const [views, setViews] = useState(initialViews);
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  // Increase views when component loads
  useState(() => setViews(prev => prev + 1));

  const handleLike = () => setLikes(prev => prev + 1);

  const handleComment = () => {
    if (commentInput.trim() === "") return;
    setComments(prev => [...prev, commentInput]);
    setCommentInput("");
  };

  return (
    <div className="blog-post" style={{ border: "1px solid #ccc", padding: "20px", marginBottom: "20px" }}>
      <h2>{title}</h2>
      <p>{content}</p>

      {/* Bottom section */}
      <div className="blog-footer" style={{ borderTop: "1px solid #eee", marginTop: "20px", paddingTop: "10px" }}>
        <span>👁️ {views} views</span> |{" "}
        <span>❤️ {likes} likes</span> |{" "}
        <span>💬 {comments.length} comments</span>
        <div style={{ marginTop: "10px" }}>
          <button onClick={handleLike}>Like</button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <input 
            type="text" 
            value={commentInput} 
            onChange={(e) => setCommentInput(e.target.value)} 
            placeholder="Add a comment..." 
          />
          <button onClick={handleComment}>Comment</button>
        </div>
        {/* Display comments */}
        <ul>
          {comments.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </div>
    </div>
  );
}
