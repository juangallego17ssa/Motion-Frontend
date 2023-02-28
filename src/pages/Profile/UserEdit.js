import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormField = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const InputGrid = styled.div`
  padding: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
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

//--------Component----------
const UserEdit = ({ userData }) => {
  const handleDeleteAccountClick = () => {
    console.log('delete');
  }

  const handleSaveClick = () => {
    console.log('save');
  }

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
            <Button onClick={handleSaveClick}>Save</Button>
          </ButtonsContainer>
        </LeftContainer>
        <FormContainer>
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
              <Label htmlFor="phone">phone</Label>
              <Input type="text" name="phone" id="phone" defaultValue={userData.phone} />
            </FormField>
            <FormField>
              <Label htmlFor="about">About</Label>
              <Input type="text" name="about" id="about" defaultValue={userData.about} />
            </FormField>
            <FormField>
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" id="password" defaultValue='password' />
            </FormField>
            <FormField>
              <Label htmlFor="things-I-like">Things I like</Label>
              <div>
                Cooking, etc
              </div>
              <div>
                <Input type="text" name="things-I-like" id="things-I-like" defaultValue={userData.things_user_likes} />
                <Button> Add </Button>
              </div>
            </FormField>
          </InputGrid>
        </FormContainer>
      </EditMain>
    </>
  )
}

export default UserEdit;