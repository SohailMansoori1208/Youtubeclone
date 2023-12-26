import React,{useState} from 'react'
import './Comments.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comments';
import moment from 'moment';

function DisplayComments({cId,  commentBody,userId,userCommented,commentedOn}) {
    const [Edit, setEdit] = useState(false);
    const [comtBdy, setcomtBdy] = useState("");
    const [cmtId, setcmtId] = useState("");
    const CurrentUser = useSelector((state) => state?.currentUserReducer);



    const handleEdit=(ctId, ctBdy)=>{
        setEdit(true);
         setcmtId(ctId);
         setcomtBdy(ctBdy);
     };

    const dispatch= useDispatch();
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        if (!comtBdy) {
            alert("Type Your comments");
          } else {
            dispatch(
              editComment({
                id: cmtId,
                commentBody: comtBdy,
              })
            );
            setcomtBdy("");
          }
        setEdit(false)
    };
    const handleDel=(id)=>{
        dispatch(deleteComment(id))
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
        <p className="user_commented">- {userCommented} commented {moment(commentedOn).fromNow()}</p>
        {CurrentUser?.result._id === userId && (
        <p className="EditDel_Display_Comment"> 
            <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
            <i onClick={()=>handleDel(cId)}>Delete</i>
        </p>
        )}
    </>
  )
}

export default DisplayComments
