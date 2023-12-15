import IUser from "../../types/user.type";
import "../../sass/profile/_profile.user.info.component.scss"
interface UserInfoProps {
    currentUser: IUser & { accessToken: string };
}

export const ProfileUserInfo:React.FC<UserInfoProps> = ({currentUser}):React.ReactElement =>{
    return(
        <div className="Main-User-Info-Container">
            <h4>User Info</h4>
            <hr id="hr_info"/>
            <div className="info-container">
                <div className="city">
                    <h6>City:</h6>
                    <h5>Karlstad</h5>
                </div>
                <div className="from">
                    <h6>From:</h6>
                    <h5>Sweden</h5>
                </div>
                <div className="relation">
                    <h6>Relation:</h6>
                    <h5>Single</h5>
                </div>
            </div>
        </div>
    )
}