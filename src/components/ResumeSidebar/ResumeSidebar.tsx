import UserInfoComponent from "./UserInfo";
import ContactMeComponent from "./ContactMe";
import MoreAboutMeComponent from "./MoreAboutMe";
import EtceteraComponent from "./Etcetera";
import { User } from "src/types/user";
import { EmploymentStatus } from "src/types/resumeProfile";
import CopyrightComponent from "../shared/Copyright";

function ResumeSidebarComponent({
    user,
    introduction,
    jobTitle,
    employmentStatus,
}: {
    user: User;
    introduction: string | null;
    jobTitle: string;
    employmentStatus: EmploymentStatus;
}) {
    return (
        <div id="sidebar">
            <UserInfoComponent user={user} jobTitle={jobTitle} introduction={introduction} />

            <div className="flex flex-col justify-between h-full py-5 md:py-2 px-4">
                <div>

                    <MoreAboutMeComponent
                        birthDate={user.birthDate || undefined}
                        employmentStatus={employmentStatus}
                    />

                    <ContactMeComponent contactInfo={user.contactInfo} />

                    <EtceteraComponent />
                </div>

                <div className="hidden md:block">
                    <CopyrightComponent theme="white" />
                </div>
            </div>
        </div>
    );
}

export default ResumeSidebarComponent;
