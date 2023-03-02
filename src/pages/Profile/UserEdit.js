import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import motionAPI from "../../axios/motionAPI";
import { updateUserData } from "../../redux/slices/user";
import { BsFillCameraFill } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { MdFileUpload } from 'react-icons/md';
import { ImBin2 } from 'react-icons/im';
import { Avatar, BackgroundEditContainer, Button, ButtonsContainer, EditMain, Form, FormField, ImageContainer, Input, InputGrid, InputImg, Label, LabelImg, LeftContainer, Popover, Tag, ThingsUserLikes, ThingsUserLikesContainer } from "./UserEdit.styles";


const UserEdit = ({ userData }) => {
  const formRef = useRef();
  const dispatch = useDispatch();

  const [thingUserLikes, setThingUserLikes] = useState('');
  const [thingsUserLikesList, setThingsUserLikesList] = useState(userData.things_user_likes);
  const [updateAvatarPopover, setUpdateAvatarPopover] = useState(false);

  const handleThingsChange = e => {
    setThingUserLikes(e.target.value);
  };

  const addThingUserLikes = e => {
    e.preventDefault();

    setThingsUserLikesList(prevThingsUserLikes => [...prevThingsUserLikes, thingUserLikes]);
    setThingUserLikes('');
  };

  const removeThingUserLikes = (thingToRemove) => {
    const filteredListWithoutThing = thingsUserLikesList.filter((thing, idx) => {
      return thingsUserLikesList[idx] !== thingToRemove;
    });
    setThingsUserLikesList([...filteredListWithoutThing]);
  };

  const handleUploadBackground = e => {
    const img = e.target.files[0];
    updateUserImages({ banner: img }, true);
  }

  const handleUploadAvatar = e => {
    e.preventDefault();
    const img = e.target.files[0];

    setUpdateAvatarPopover(prev => !prev);
    updateUserImages({ avatar: img });
  };

  const handleDeleteAvatar = e => {
    e.preventDefault();

    const userData = {
      avatar: null,
    }
    setUpdateAvatarPopover(prev => !prev);
    updateUserImages(userData);
  };

  const handleDeleteAccountClick = () => {
    console.log('delete');
  };

  const handleSaveClick = e => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const formEntries = Object.fromEntries(formData.entries());
    const userData = {
      ...formEntries,
      things_user_likes: thingsUserLikesList,
    }

    updateUserDataFromEdit(userData);
  };

  //-------------------API calls to update user data ans user avatar------------------
  const updateUserDataFromEdit = async (dataToUpdate) => {
    const data = JSON.stringify(dataToUpdate)
    const config = {
      headers: {
        //'Content-Type': 'multipart/form-data' for images 
        //'Content-Type': 'application/json'
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    };
    try {
      const res = await motionAPI.patch('users/me/', data, config);
      dispatch(updateUserData(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserImages = async (dataToUpdate) => {
    const data = dataToUpdate;
    const config = {
      headers: {
        //'Content-Type': 'multipart/form-data' for images 
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    };
    try {
      const res = await motionAPI.patch('users/me/', data, config);
      dispatch(updateUserData(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BackgroundEditContainer>
        <div>
          <BsFillCameraFill className="camera-icon" />
          <LabelImg htmlFor="inputBanner" className="banner-img">
            Update image
            <InputImg type="file" id="inputBanner" className="avatarUpload" onChange={handleUploadBackground} />
          </LabelImg>
        </div>
      </BackgroundEditContainer>
      <EditMain>
        <LeftContainer>
          <ImageContainer>
            {
              userData.avatar
                ?
                <Avatar avatarURL={userData.avatar} />
                :
                <Avatar>{userData.first_name.charAt(0)}</Avatar>
            }
            <div>
              <Button onClick={() => setUpdateAvatarPopover((prev) => !prev)}>Update Image</Button>
              {updateAvatarPopover
                ?
                (
                  <Popover>
                    <div>
                      <MdFileUpload />
                      <LabelImg htmlFor="inputAvatar">
                        Upload
                        <InputImg type="file" id="inputAvatar" className="avatarUpload" onChange={handleUploadAvatar} />
                      </LabelImg>
                    </div>
                    <div onClick={handleDeleteAvatar}>
                      <ImBin2 />
                      <p>Remove</p>
                    </div>
                  </Popover>
                )
                :
                null
              }
            </div>
          </ImageContainer>
          <ButtonsContainer>
            <Button onClick={handleDeleteAccountClick}>Delete Account</Button>
            <Button variant='purple' type='submit' form='editForm' >Save</Button>
          </ButtonsContainer>
        </LeftContainer>
        <Form ref={formRef} id='editForm' onSubmit={handleSaveClick} >
          <InputGrid>
            <FormField>
              <Label htmlFor="first_name">First Name</Label>
              <Input type="text" name="first_name" id="first_name" defaultValue={userData.first_name} />
            </FormField>
            <FormField>
              <Label htmlFor="last_name">Last Name</Label>
              <Input type="text" name="last_name" id="last_name" defaultValue={userData.last_name} />
            </FormField>
            <FormField>
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" id="email" defaultValue={userData.email} />
            </FormField>
            <FormField>
              <Label htmlFor="username">Username</Label>
              <Input type="text" name="username" id="username" defaultValue={userData.username} />
            </FormField>
            <FormField>
              <Label htmlFor="location">Location</Label>
              <Input type="text" name="location" id="location" defaultValue={userData.location} />
            </FormField>
            <FormField>
              <Label htmlFor="phone_number">Phone</Label>
              <Input type="text" name="phone_number" id="phone_number" defaultValue={userData.phone} />
            </FormField>
            <FormField>
              <Label htmlFor="about_me">About me</Label>
              <Input type="text" name="about_me" id="about_me" defaultValue={userData.about} />
            </FormField>
            <FormField>
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Enter a new password" />
            </FormField>
          </InputGrid>
          <ThingsUserLikesContainer>
            <Label htmlFor="things-I-like">Things I like</Label>
            <ThingsUserLikes>
              {thingsUserLikesList.length !== 0
                ?
                thingsUserLikesList.map((thing) => {
                  return (
                    <Tag key={thing}>
                      {thing}
                      <RxCross1 className="deleteX" onClick={() => removeThingUserLikes(thing)} />
                    </Tag>
                  )
                })
                :
                null
              }
            </ThingsUserLikes>
            <FormField className="things-I-like">
              <Input type="text" id="things-I-like" onChange={handleThingsChange} placeholder='Type something...' value={thingUserLikes} />
              <Button onClick={addThingUserLikes}> Add </Button>
            </FormField>
          </ThingsUserLikesContainer>
        </Form>
      </EditMain>
    </>
  )
}

export default UserEdit;