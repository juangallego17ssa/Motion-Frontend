import { CreatePostStyled, MiniImage, MyCloseImage, MylinkIcon } from './CreatePost.style'
import jennifer from '../../../../assets/images/users/jennifer.png'
import sendButton from '../../../../assets/images/send_button.png'
import addPictureIcon from '../../../../assets/images/add_picture.png'
import addLinkIcon from '../../../../assets/images/add_link.png'
import { useState } from "react"
import motionAPI from '../../../../axios/motionAPI'
import { useNavigate } from 'react-router'
import { v4 as uuid } from "uuid";



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
        setMyPostImages([])
    }

    const handleHideCreatePost = (event) => {
        return (event.target.className==="darkBackground")? setShowCreatePost(false) : ""
    }

    // create post object

    


    const navigate = useNavigate()
    const sendPost = async () =>{
        const user = localStorage.getItem("user")
        
        const token = localStorage.getItem("token")

        const content = draftPost

        // const images = myPostImages.map(imageObject => {return {posts: imageObject.file}})
        // console.log(images)
        // console.log(myPostImages)

        const formData = new FormData();
        formData.append("user",user)
        formData.append("content",content)
        formData.append("images",myPostImages[0])
        formData.append("images",myPostImages[1])
        formData.append("images",myPostImages[2])
        console.log(formData.getAll("images")[0])

        
        const myConfig = {
            headers: {
                "Authorization":`Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
            method: "post",
            // data: myBody,
            data: formData,
        };


        // const myBody = JSON.stringify({
        //     user: user,
        //     content: content,
        //     // images: myPostImages,
        // })
        
                
        // Fetch the data and save the token in the local storage
        try {
            const response = (await motionAPI("/social/posts/", myConfig)).data;
            setDraftPost("")
            setShowCreatePost(false)
            navigate("/")

            
        } catch (exception) {
            console.log(exception)
        }

    }

    const handleDeleteImage = (event) => {
        let imgs = [...myPostImages]
        const index = +event.target.getAttribute("index")
        imgs.splice(index, 1)
        setMyPostImages(imgs)
    }
    
    
    const [myPostImages, setMyPostImages] = useState([])
    // const [imagesToSend, setImagesToSend] = useState([])

    const handleUploadImage = e => {
        if (myPostImages.length===4) {return window.alert("Maximum 4 pictures per post!")}
        const myNewImage = {e.target.files[0] 
        // url: URL.createObjectURL(e.target.files[0]),

        const imgs = [...myPostImages, myNewImage]
        setMyPostImages(imgs)
        // {
            // image: e.target.files[0],
            // image: e.target.files[0],
            // posts: e.target.files[0]
        // }
        // const imageToSend = {
        //     image: e.target.files[0],
        // }
        
        // const imgsToSend = [...imagesToSend, imageToSend]
        // setImagesToSend(imgs)
        // console.log(myPostImages)
    }


        

return(
    <>
    <CreatePostStyled showCreatePost={showCreatePost} isImages={myPostImages.length>0}>
        
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
                </div>
            </div>
            
            <div className='pictureUpload'>
                {myPostImages.map((image,index) =>   <MiniImage key={uuid()} image={image}>
                                                        <MyCloseImage/>
                                                        <div className="closingContainer" index={index} onClick={handleDeleteImage}></div>
                                                    </MiniImage>)}
            </div>

            <div className="attachAndSend">
                <div className="createPostAttachIcons">
                    <label>
                        <img src={addPictureIcon} alt="add picture" />
                        <input type="file" className="uploadInput" accept="image/*" onChange={handleUploadImage}></input>
                    </label>
                    <MylinkIcon/>
                    {/* <img src={addLinkIcon} alt="add link" /> */}
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
