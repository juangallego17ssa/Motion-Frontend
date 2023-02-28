import { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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

const Image = styled.img`
  width: 95px;
  height: 95px;
  padding-bottom: 12px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Button = styled.button`
  padding: 16px 38px;
  mix-blend-mode: normal;
  border: 1px solid #f2f2f2;
  border-radius: 30px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  background-color: white;
  color: #000000;
  text-transform: uppercase;

&:hover {
  cursor: pointer;
  background-color: grey;
}
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

  Input {
    width: 100%;
  }
`;

const Label = styled.p`
  font-size: 12px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Input = styled.input`
  padding: 10px 0;
  outline: none;
  border: none;
  font-size: 14px;
  border-bottom: 1px solid grey;
`;

const ThingsUserLikesContainer = styled.div`
  width: 100%;    
  padding: 0 60px 60px 60px;
  display: flex;
  flex-direction: column;
  border: 5px solid yellow;
`;

const ThingsUserLike = styled.div`
  width: 100%;  
  padding: 20px 0 40px 0 ;
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
  margin-right: 8px;
`;


//--------Component----------
const UserEdit = ({ userData }) => {
  const formRef = useRef();

  const [thingUserLikes, setThingUserLikes] = useState('');
  const [thingsUserLikesList, setThingsUserLikesList] = useState(userData.things_user_likes);

  const handleThingsChange = e => {
    setThingUserLikes(e.target.value);
  };

  const addThingUserLikes = e => {
    e.preventDefault();
    setThingsUserLikesList(prevThingsUserLikes => [...prevThingsUserLikes, thingUserLikes]);
    setThingUserLikes('');
  };

  const handleDeleteAccountClick = () => {
    console.log('delete');
  };

  const handleSaveClick = e => {
    e.preventDefault();
    console.log('save');

    const formData = new FormData(formRef.current);
    const formEntries = Object.fromEntries(formData.entries());
    const userData = {
      ...formEntries,
      things_user_likes: thingsUserLikesList,
    }

    const updateUserData = async () => {
      const data = JSON.stringify(userData);
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      };
      try {
        const res = await axios.patch('https://motion.propulsion-home.ch/backend/api/users/me/', data, config);
      } catch (error) {
        console.log(error);
      }
    };

    updateUserData();
  };

  return (
    <>
      <button> Upload image </button>
      <EditMain>
        <LeftContainer>
          <ImageContainer>
            <Image></Image>
            <Button>Update Image</Button>
          </ImageContainer>
          <ButtonsContainer>
            <Button onClick={handleDeleteAccountClick}>Delete Account</Button>
            <Button type='submit' form='editForm' >Save</Button>
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
              <Input type="password" name="password" id="password" defaultValue='password' />
            </FormField>
          </InputGrid>
          <ThingsUserLikesContainer>
            <Label htmlFor="things-I-like">Things I like</Label>
            {
              thingsUserLikesList.length !== 0
                ?
                <ThingsUserLike>
                  {
                    thingsUserLikesList.map((thing, idx) => {
                      return <Tag key={idx}>{thing}</Tag>
                    })
                  }
                </ThingsUserLike>
                :
                null
            }
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