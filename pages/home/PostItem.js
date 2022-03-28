
import StyleLayout from '/styles/StyleLayout.module.css'
function PostHeader({ author, date }) {
  return (
    <div className={StyleLayout.post_header}>
      <img className={StyleLayout.avatar} src={author.avatar} />
      <div className={StyleLayout.details}>
          <span>{author.name}</span>
          <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className={StyleLayout.PostComments}>
      <div className={StyleLayout.divider} />
      {comments.map(comment => (
        <div key={comment.id} className={StyleLayout.comment}>
          <img className={StyleLayout.avatar} src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}
 
function PostItem({ author, date, content, comments }) {
  return (
    <div className={StyleLayout.post}>
      <PostHeader author={author} date={date} />
      <p className={StyleLayout.postcontent}>{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;
