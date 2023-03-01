import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import motionAPI from "../../axios/motionAPI";
import { BsFillCameraFill } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { MdFileUpload } from 'react-icons/md';
import { ImBin2 } from 'react-icons/im';
import { updateUserData } from "../../redux/slices/user";


const BackgroundEditContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: grey;
    opacity: 80%;
    border: none;
    padding: 8px 16px;
    border-radius: 40px;

    .camera-icon{
      color: white;
      width: 20px;
      height: 18px;
    }

    .banner-img {
      color: white;
    }

  }
`;

const EditMain = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
`;

const LeftContainer = styled.div`
  min-width: 320px;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 2px solid #f2f2f2;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 12px;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block; position: relative; width: 100px; height: 100px; overflow: hidden; border-radius: 50%;

  img {
    width: auto; height: 100%; margin-left: -12px;
  }

  div{
    font-size: 30px;
  }
`;

const Popover = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-top: 23px;

  >div{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 25px;

    &:hover {
      cursor: pointer;
      background-color: #f2f2f2;
    }

    >*{
      &:first-child {
        width: 24px;
        height: 24px;
        color: #a9a9a9
      }
    }

    >p {
      padding-left: 20px;
      font-size: 14px;
    }
  }
`;

const LabelImg = styled.label`
  color: black;
  cursor: pointer;
  padding-left: 15px;
  font-size: 14px;
`;

const InputImg = styled.input`
  display: none;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Button = styled.button`
  padding: 20px 48px;
  mix-blend-mode: normal;
  border: 1px solid #f2f2f2;
  border-radius: 30px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  background-color: white;
  color: #000000;
  text-transform: uppercase;
  font-size: 10px;

  &:hover {
    cursor: pointer;
    background-color: grey;
  }

  &.save-btn {
    background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    border: transparent;
    border-radius: 30px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const InputGrid = styled.div`
  padding: 60px 60px 40px 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
`;

const FormField = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;

  &.things-I-like {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Label = styled.p`
  font-size: 12px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  outline: none;
  border: none;
  font-size: 14px;
  border-bottom: 1px solid grey;
`;

const ThingsUserLikesContainer = styled.div`
  padding: 0 60px 60px 60px;
  display: flex;
  flex-direction: column;
`;

const ThingsUserLikes = styled.div`
  width: 100%;  
  padding: 20px 0;
`;

const Tag = styled.p`
  width: max-content;
  text-align: center;
  padding: 9px 16px;
  background: #f2f2f2;
  mix-blend-mode: normal;
  border-radius: 18px;
  color: black;
  float: left;
  margin: 0  8px 16px 0;
  display: flex;
  align-items: center;

  .deleteX {
    width: 10px;
    padding-left: 15px;
    cursor: pointer;
  }
`;


//--------Component----------
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
    updateUserDataFromEdit({ banner: img }, true);
  }

  const handleUploadAvatar = e => {
    const img = e.target.files[0];

    setUpdateAvatarPopover(prev => !prev);
    updateUserDataFromEdit({ avatar: img }, true);
  };

  const handleDeleteAvatar = e => {
    e.preventDefault();

    const userData = {
      avatar: '',
    }
    updateUserDataFromEdit(userData);
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

  //-------------------API call to update user data------------------
  const updateUserDataFromEdit = async (dataToUpdate, isImage) => {
    let data = {};
    isImage
      ?
      data = dataToUpdate
      :
      data = JSON.stringify(userData)
    const config = {
      headers: {
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
          <LabelImg htmlFor="inputAvatar" className="banner-img">
            Update image
            <InputImg type="file" id="inputAvatar" className="avatarUpload" onChange={handleUploadBackground} />
          </LabelImg>
        </div>
      </BackgroundEditContainer>
      <EditMain>
        <LeftContainer>
          <ImageContainer>
            <Avatar>
              {
                userData.avatar
                  ?
                  <img src={userData.avatar} />
                  :
                  <div>{userData.first_name.charAt(0)}</div>
              }
            </Avatar>
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
            <Button className="save-btn" type='submit' form='editForm' >Save</Button>
          </ButtonsContainer>
        </LeftContainer>
        <FormContainer ref={formRef} id='editForm' onSubmit={handleSaveClick} >
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
              <Input type="text" id="things-I-like" onChange={handleThingsChange} placeholder='Type something...' />
              <Button onClick={addThingUserLikes}> Add </Button>
            </FormField>
          </ThingsUserLikesContainer>
        </FormContainer>
      </EditMain>
    </>
  )
}

export default UserEdit;