import styled from "styled-components"
import avatar from '../../../../assets/images/users/jennifer.png'
import menu from '../../../../assets/svgs/menu.svg'



const MyPostStyled = styled.div`

    background-color: white;
    margin: 0px 0px 30px 30px;
    width: 560px;
    border-radius: 3px;

    .headerPost{
        margin: 30px;
        height: 42px;
        display: flex;
        justify-content:space-between;
        align-items: center;


        .headerLeft{
            display: flex;

            .avatarDiv{

                height: 40px;
                width: 40px;
                overflow: hidden;
                border-radius: 50%;

                img{
                    display: inline;
                    margin: 0 auto;
                    height: 100%;
                    width: auto;
                }
            }

            .nameAndDate{
                display:flex;
                flex-direction:column;
                margin-left: 25px;
                font-size: 14px;
                color: #7d7d7d;
                align-items:flex-start; 
                justify-content: center;


                .userFullName{
                    color:black;
                    font-weight:400;
                    margin-bottom:7px;
                }

            }



        }

        .headerRight{
            display:flex;
            height:100%;
            align-items:flex-start;
            justify-content: center;
        }


    }

    .textPost{

        margin: 30px;
        display: flex;
        justify-content:space-between;
        align-items: center;


    }

    .imagePost{
        background-color:black;
    }

    
`

const MyPost = (props) => {
    console.log(props.post)
    const firstName = props.post.user.first_name
    const lastName = props.post.user.last_name
    const avatar = props.post.user.avatar
    const created = new Date(props.post.created)
    const image = props.post.images[0] ? props.post.images[0].image :""
    const now = new Date()
    const minutesAgo = Math.abs(now-created)/1000/60
    const hoursAgo = minutesAgo/60
    const daysAgo = hoursAgo/24
    const getTimeAgo = () => {
        if (minutesAgo<=5){
            return "just now"
        } else if (minutesAgo < 60) {
            return Math.floor(minutesAgo) + " minutes ago"
        } else if (hoursAgo < 24) {
            return Math.floor(hoursAgo) + " hours ago"
        } else if (daysAgo < 4) {
            return Math.floor(daysAgo) + " day ago"
        } else {
            return created.getDate
        }
    }
    const timeAgo = getTimeAgo()
    const content = props.post.content
    
    return(
    <MyPostStyled>
        <div className="post1 post">
            <div className="headerPost">
                <div className="headerLeft">
                    <div className="avatarDiv"><img src={avatar} alt="user-avatar"/></div>
                    <div className="nameAndDate">
                        <span className="userFullName">{firstName + " " + lastName}</span> 
                        <span className="datePost">{timeAgo}</span> 
                    </div>
                </div>
                    
                <div className="headerRight">
                    <img src={menu} alt="menu icon" />
                </div>
                    
            </div>
            <div className="textPost">
                {content}
            </div>
            <div className="imagePost">
                <img src={image} />
            </div>
            <div className="picturesPost"></div>
            <div className="repost post"></div>
            <div className="footerPost"></div>
        </div>
    </MyPostStyled>
)

}

export default MyPost




