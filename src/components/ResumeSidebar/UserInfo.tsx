import DefaultProfile from "src/images/user.png";
import { User } from "src/types/user";

export interface ProfileComponentProps {
    fullName: string;
    jobTitle: string;
    imageUrl: string | null;
}

function UserInfoComponent({
    user,
    jobTitle,
    introduction
}: {
    user: User;
    jobTitle: string;
    introduction: string | null;
}) {
    return (
        <div id="sidebar-profile">
            <img
                src={user.profileImage || DefaultProfile}
                className="w-2/5 rounded-full"
                alt="تصویر پروفایل"
            />
            <div className="text-center mt-3">
                <h3 className="text-3xl font-bold">{user.fullName}</h3>
                <h6 className="text-gray-300 mt-1">{jobTitle}</h6>
            </div>

            {introduction && (
                <div className="w-full mt-2">
                    <p className="text-center mx-2">{introduction}</p>
                </div>
            )}
        </div>
    );
}

export default UserInfoComponent;
