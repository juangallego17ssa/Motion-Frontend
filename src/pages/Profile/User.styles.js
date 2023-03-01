import styled, { css } from "styled-components";

export const UserContainer = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 34px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
`;

export const UserLeftContainer = styled.div`
  border-right: 2px solid #f2f2f2;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:40px;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 12px;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-image: url(${props => props.avatarURL});
  background-position: center;
`;

export const Name = styled.p`
  font-size: 24px;
  padding-bottom: 8px;
`;

export const Location = styled.p`
  font-size: 14px;
`;

export const Button = styled.button`
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

export const UserRightContainer = styled.div`
  min-width: 832px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserInfo = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 40px 60px;
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

export const UserInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

export const UserAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const TextAbout = styled.p`
  width: 320px;
  min-height: 30px;
  font-size: 16px;
`;

export const UserContactDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;

export const UserEmail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserPhone = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfoRight = styled.div`
`;

export const TagContainer = styled.div`
  padding-top: 22px;
`;

export const Tag = styled.p`
  width: max-content;
  text-align: center;
  padding: 9px 16px;
  background: #f2f2f2;
  mix-blend-mode: normal;
  border-radius: 18px;
  color: black;
  float: left;
  margin: 0 8px 16px 0;
`;

export const UserNumbers = styled.div`
  border-top: 2px solid #f2f2f2;
  width: 100%;
  box-sizing: border-box;
  padding: 40px 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 78px;
`;

export const Number = styled.p`
  font-size: 24px;
  padding-bottom: 7px;
`;

export const Text = styled.p`
  font-size: 16px;
`;