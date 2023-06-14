import React, { useContext, useEffect, useState } from "react";
import "./UserInfo.scss";
import Person from "../../imgs/person2.png";
import { UserContext } from "../../routes/AppRouter";

const UserInfo = () => {
    const { userValues } = useContext(UserContext);
    // const [user, setUser] = useState(
    //     JSON.parse(localStorage.getItem("activeUser"))
    // );
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
                    <img src={Person} alt="profile" />
                </figure>
            </div>
        </div>
    );
};

export default UserInfo;
