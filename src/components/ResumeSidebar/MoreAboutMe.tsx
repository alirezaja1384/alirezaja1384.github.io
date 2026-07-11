import React from "react";
import { EmploymentStatus } from "src/types/resumeProfile";
import { toLocalDate, formatDigits, calculateAge } from "src/utils";

const employmentStatusMap: Record<EmploymentStatus, string> = {
    looking_for_job: "در جستجوی کارم",
    employed: "در جستجوی کار نیستم",
    freelancer: "فریلنسرم",
};

function MoreAboutMeComponent({
    birthDate,
    employmentStatus,
}: {
    birthDate?: string;
    employmentStatus: EmploymentStatus;
}) {
    return (
        <div className="w-full py-1">
            <h4 className="text-lg font-bold">درباره من</h4>
            <ul className="m-1">
                {birthDate && (
                    <li>
                        متولد {toLocalDate(birthDate, "month-year")}{" "}
                        {formatDigits(` (${calculateAge(birthDate)} سال)`)}
                    </li>
                )}
                <li>در حال حاضر {employmentStatusMap[employmentStatus]}</li>
            </ul>
        </div>
    );
}

export default MoreAboutMeComponent;
