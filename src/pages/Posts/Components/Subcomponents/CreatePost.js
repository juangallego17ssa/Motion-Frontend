import { CreatePostStyled } from './CreatePost.style'
import jennifer from '../../../../assets/images/users/jennifer.png'
import sendButton from '../../../../assets/images/send_button.png'
import addPictureIcon from '../../../../assets/images/add_picture.png'
import addLinkIcon from '../../../../assets/images/add_link.png'
import { useState } from "react"
import motionAPI from '../../../../axios/motionAPI'
import { useNavigate } from 'react-router'



const CreatePost = (props) => {

    //// Controled post
    const [draftPost, setDraftPost] = useState("")

    const handleDraftPostChange = event => {
        setDraftPost(event.target.value);
    };



    const [showCreatePost, setShowCreatePost] = useState(false)

    const handleCreatePost = () =>{
        setShowCreatePost(true)
        setDraftPost("")
    }

    const handleHideCreatePost = (event) => {
        return (event.target.className==="darkBackground")? setShowCreatePost(false) : ""
    }

    // create post object
    const navigate = useNavigate()
    const sendPost = async () =>{
        const user = localStorage.getItem("user")
        console.log(JSON.parse(user))
        
        const token = localStorage.getItem("token")
        console.log(token)

        const content = draftPost

        const myBody = JSON.stringify({
            user: user,
            content: content,
        })
        
        const myConfig = {
            headers: {
                "Authorization":`Bearer ${token}`
            },
            method: "post",
            data: myBody,
        };
                
        // Fetch the data and save the token in the local storage
        try {
            const response = (await motionAPI("/social/posts/", myConfig)).data;
            console.log(response)
            setDraftPost("")
            setShowCreatePost(false)
            navigate("/")
            
        } catch (exception) {
            console.log(exception)
        }

    }


    const handleUploadImage = e => {
        const img = e.target.files[0];
        // uploadImagePost({ banner: img }, true);
    }

    // const uploadImagePost = async (dataToUpdate) => {
    //     const data = dataToUpdate;
    //     const config = {
    //       headers: {
    //         //'Content-Type': 'multipart/form-data' for images 
    //         'Content-Type': 'multipart/form-data',
    //         'Authorization': `Bearer ${localStorage.getItem('token')}`
    //       },
    //     };
    //     try {
    //       const res = await motionAPI.patch('users/me/', data, config);
    //       dispatch(updateUserData(res.data));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
        

return(
    <>
    <CreatePostStyled showCreatePost={showCreatePost}>
        
        <div className="createPostElementContainer">
            <div className="createPostElementLeft">
                <img src={jennifer} alt="user-avatar"/>
                <span className="createPostInput" onClick={handleCreatePost} >What’s on your mind, Jennifer?</span> 
            </div>
            <div className="createPostElementRight">
                <img src={sendButton} alt="send_button" />
            </div>
        </div>
        
        <div className="darkBackground" onClick={(event) => handleHideCreatePost(event)}></div>
        
        <div className="createPostElement">
            <div className="createPostElementContainer">
                <div className="createPostElementLeft">
                    <img src={jennifer} alt="user-avatar"/>
                    <textarea type="text" className="createPostInput" placeholder="What’s on your mind, Jennifer?" value={draftPost} onChange={handleDraftPostChange}/> 
                    <div className='pictureUpload'></div>
                </div>
            </div>

            <div className="attachAndSend">
                <div className="createPostAttachIcons">
                    <label>
                        <img src={addPictureIcon} alt="add picture" />
                        <input type="file" className="uploadInput" onChange={handleUploadImage}></input>
                    </label>
                    <img src={addLinkIcon} alt="add link" />
                </div>
                <div className="createPostElementRight" onClick={sendPost}>    
                    <img src={sendButton} alt="send button" />
                </div>
            </div>
        </div>

    </CreatePostStyled>
    </>
)

}

export default CreatePost
