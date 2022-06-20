import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { updateUserSidebarAction } from "../../../redux/actions/common.action";
import { UserSideBarEnum } from "../../../types/common.type";
import styles from './sidebar.module.css';

export interface UserSidebarProps {
    activeValue: UserSideBarEnum
}

export const UserSideBarComponent = ({ activeValue }: UserSidebarProps) => {
    const dispatch = useDispatch();
    return (
        <ul
            className={styles.nav}
        >
            <li>
                <Link
                    to="/user/friend"
                    style={{
                        textDecoration: "none",
                    }}
                    onClick={()=>dispatch(updateUserSidebarAction(UserSideBarEnum.FRIEND_LIST))}
                >
                    <b
                        style={{ color: (activeValue === UserSideBarEnum.FRIEND_LIST) ? "red" : "black"}}
                    >
                        Friend List
                    </b>
                </Link>
            </li>
            <li>
                <Link
                    to="/user/friend-request"
                    style={{
                        textDecoration: "none"
                    }}
                    onClick={()=>dispatch(updateUserSidebarAction(UserSideBarEnum.FRIEND_REQUEST))}
                >
                    <b
                        style={{ color: (activeValue === UserSideBarEnum.FRIEND_REQUEST) ? "red" : "black"}}
                    >
                        Friend Request
                    </b>
                </Link>
            </li>
            <li>
                <Link
                    to="/user/"
                    style={{
                        textDecoration: "none",
                    }}
                    onClick={()=>dispatch(updateUserSidebarAction(UserSideBarEnum.ALL_USER))}
                >
                    <b 
                        style={{ color: (activeValue === UserSideBarEnum.ALL_USER) ? "red" : "black"}}
                    >
                        All User
                    </b>
                </Link>
            </li>

        </ul>
    )
}