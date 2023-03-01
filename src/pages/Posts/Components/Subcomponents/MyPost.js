import styled from "styled-components"

const MyPostStyled = styled.div`

    background-color: white;
    margin: 2%;
    width: 20%;
    min-width: 500px;

`

const MyPost = (props) => {


    
return(
    <MyPostStyled>{props.post}</MyPostStyled>
)

}

export default MyPost




{/* <div className="post1 post">
                <div className="headerPost"></div>
                <div className="textPost">
                    Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas
                    laudem iracundia et, ad per utamur ceteros apeirian…
                </div>
                <div className="picturesPost"></div>
                <div className="footerPost"></div>
                </div>
                <div className="post2 post">
                <div className="headerPost"></div>
                <div className="textPost">
                Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas
                laudem iracundia et, ad per utamur ceteros apeirian…
                </div>
                <div className="footerPost"></div>
                </div>
                <div className="repost post">
                <div className="headerPost"></div>
                <div className="textPost">
                    Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas
                    laudem iracundia et, ad per utamur ceteros apeirian…
                </div>
                <div className="repostPost"></div>
                <div className="footerPost"></div>
                </div> */}