import "../../sass/post/_posts.component.scss";
import IUser from "../../types/user.type";
import { Avatar,IconButton } from "@mui/material";
import { ThumbUp } from "@mui/icons-material";


interface UserInfoProps {
    currentUser: IUser & { accessToken: string };
}

export const Posts:React.FC<UserInfoProps> = ({currentUser}):React.ReactElement =>{


    return(
        <div className="Main-Post-Container">
            <div className="head-position">
                <div className="user-info-portion">
                    <div className="user-avatar">
                        <Avatar>{currentUser.username?.charAt(0) ?? '?'}</Avatar>
                    </div>
                    <div className="user-info-detail">
                        <div className="user-name">{currentUser.username ?? "?"}</div>
                        <div className="post-creation-date">1 day ago</div>
                    </div>
                </div>
                <div className="post-description-portion">
                    This is our developers diary social app.
                </div>
            </div>
            <div className="body-portion">
                <img src="src/assets/43575.jpg" alt="" srcSet=""/>
            </div>
            <hr id="hr-post"/>
            <div className="footer-portion">
                <div className="like-post">
                    <IconButton size="small" color="primary">
                        <ThumbUp/>
                    </IconButton>
                    1 people like.
                </div>
                <div className="comment">Comments</div>
            </div>

        </div>
    )
}