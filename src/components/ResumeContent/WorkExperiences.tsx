import React, { Fragment } from "react";
import LaunchIcon from "@mui/icons-material/Launch";

import { toLocalDate } from "src/utils";
import { WorkExperience } from "src/types/workExperience";
import { NoBreak } from "../utils";
import Tags from "./Tags";

function WorkExperiencesComponent({
    icon,
    workExperiences,
}: {
    icon?: React.ReactElement;
    workExperiences: WorkExperience[];
}) {
    return (
        <NoBreak>
            <div className="mx-2 my-5">
                <h2 className="font-bold text-xl text-blue">
                    {icon} تجربه ها کاری من:
                </h2>
                <div>
                    {workExperiences.map((experience) => (
                        <WorkExperienceItem
                            key={`${experience.company}:${experience.jobTitle}:${experience.startDate}:${experience.endDate}`}
                            experience={experience}
                        />
                    ))}
                </div>
            </div>
        </NoBreak>
    );
}

function WorkExperienceItem({ experience }: { experience: WorkExperience }) {
    return (
        <div className="my-3">
            <div className="flex flex-wrap items-center justify-between">
                <h4 className="font-bold text-lg ml-2">
                    {experience.jobTitle}
                </h4>

                <span className="badge badge-gray text-sm md:text-base">
                    از {toLocalDate(experience.startDate, "month-year")} تا{" "}
                    {experience.endDate
                        ? toLocalDate(experience.endDate, "month-year")
                        : "الان"}
                </span>
            </div>
            <div className="mr-2 mb-1">
                <p className="text-gray-600">
                    {experience.company}
                    {experience.links.map((link) => (
                        <Fragment key={`${link.title}:${link.title}`}>
                            {" "}
                            |{" "}
                            <a target="_blank" rel="noreferrer" className="no-style" href={link.url}>
                                <LaunchIcon fontSize="small" /> {link.title}
                            </a>
                        </Fragment>
                    ))}
                </p>

                <p className="text-gray-600">{experience.description}</p>
            </div>

            <Tags tags={experience.tags} />
        </div>
    );
}

export default WorkExperiencesComponent;
