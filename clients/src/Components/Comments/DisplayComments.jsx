import React,{useState} from 'react'
import './Comments.css'
function DisplayComments({cId,  commentBody,userCommented}) {
    const [Edit, setEdit] = useState(false);
    const [comtBdy, setcomtBdy] = useState("");

    const handleEdit=(ctId, ctBdy)=>{
        setEdit(true);
        setcomtBdy(ctBdy);
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        setEdit(false)
    }
  return (
    <>
    {
        Edit ? (<>
        <form className='comments_sub_from_comments'
        onSubmit={handleOnSubmit}
        >
            <input type="text"
            onChange={(e) => setcomtBdy(e.target.value)}
            placeholder="Edit comment..."
            value={comtBdy}
            className="comment_ibox"/>
            <input type="submit" value="add" className="comment_add_btn_comments" />
        </form>
        </>):(
            <p className="comment_body">{commentBody}</p>
        )
    }
        <p className="user_commented">- {userCommented} commented</p>
        <p className="EditDel_Display_Comment">
            <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
            <i>Delete</i>
        </p>
    </>
  )
}

export default DisplayComments
