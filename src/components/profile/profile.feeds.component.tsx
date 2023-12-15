import IUser from "../../types/user.type";
import "../../sass/profile/_profile.feeds.component.scss";
import {Avatar,Button,IconButton} from "@mui/material";
import {Flag,AddAPhoto,VideoCall} from "@mui/icons-material";
import { useState } from "react";
import { Posts } from "../posts/posts.component";

interface UserProfileFieldProps {
    currentUser: IUser & { accessToken: string };
}

export const ProfileFeeds:React.FC<UserProfileFieldProps> = ({currentUser}):React.ReactElement =>{

    const [userPostDescription,setUserPostDescription] = useState("");

    const updatePostDescription = (e:React.ChangeEvent<HTMLInputElement>) =>{ setUserPostDescription(e.target.value)}
    const handleButtonClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{ e.preventDefault();}
    return(
        <div className="Main-Feeds-Container">
            <div className="top-container">
                <div className="feed-input-container">
                    <div className="avatar-container">
                        <Avatar>{currentUser.username?.charAt(0) ?? '?'}</Avatar>
                    </div>
                    <div className="input-container">
                        <input 
                        id="Post-Description"
                        placeholder="What`s on your mind?"
                        value={userPostDescription}
                        onChange={updatePostDescription}
                        />
                    </div>
                </div>
                <div className="feed-post-button-container">
                    <Button onClick={handleButtonClick}>Post</Button>
                </div>
                <hr id="hr-id"/>
                <div className="icon_buttons_action">
                    <div className="icon_button_action">
                        <label htmlFor="Upload_File">
                            <input type="file" accept="image/*,video/*" id="Upload_File" hidden></input>
                            <IconButton id="VideoIc"> <VideoCall/> </IconButton>
                        </label>
                        <h5 className="action_button_text">Live Video</h5>
                    </div>
                    <div className="icon_button_action">
                        <label htmlFor="Upload_File">
                            <input type="file" accept="image/*,video/*" id="Upload_File" hidden></input>
                            <IconButton id="PhotoIc" component="span"> <AddAPhoto/> </IconButton>
                        </label>
                        <h5 className="action_button_text">Upload Photo/Video</h5>
                    </div>
                    <div className="icon_button_action">
                        <label htmlFor="Upload_File">
                            <input type="file" accept="image/*,video/*" id="Upload_File" hidden></input>
                            <IconButton id="FlagIc"> <Flag/> </IconButton>
                        </label>
                        <h5 className="action_button_text">Life Event</h5>
                    </div>
                </div>
            </div>
            <div className="bottom-container">
                <Posts currentUser={currentUser}></Posts>
            </div>
        </div>
    )
}
