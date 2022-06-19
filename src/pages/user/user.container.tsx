import {
    Route, Routes,
} from "react-router-dom";
import { UserFriendList } from './friend-list.page';
import { UserFriendRequest } from './friend-request.page';
import { UserPage } from './user.page';


function UserContainer() {
    return (
        <Routes>
            <Route path="/" element={<UserPage />} />
            <Route path="/friend" element={<UserFriendList />} />
            <Route path="/friend-request" element={<UserFriendRequest />} />
        </Routes>
    );
}

export default UserContainer;
