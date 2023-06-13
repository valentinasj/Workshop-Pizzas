import React, { useContext, useEffect } from "react";
import "./UserInfo.scss";
import Person from "../../imgs/person2.png";
import { UserContext } from "../../routes/AppRouter";

const UserInfo = () => {
    const { userValues } = useContext(UserContext);
    return (
        <div className="mainUser">
            <div className="mainUser__title">
                <h5 className="mainUser__page">Home</h5>
                <span className="mainUser__userSalute">
                    Que bueno verte {userValues.username}!
                </span>
            </div>
            <div className="mainUser__profile">
                <figure>
                    <img src={Person} />
                </figure>
            </div>
        </div>
    );
};

export default UserInfo;
