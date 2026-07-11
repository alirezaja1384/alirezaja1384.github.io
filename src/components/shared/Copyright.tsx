import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import GitHubIcon from "@mui/icons-material/GitHub";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import ArticleIcon from "@mui/icons-material/Article";
import Copyright from "@mui/icons-material/Copyright";

const copyright: {
    id: string;
    href: string;
    text: string;
    icon: React.ReactElement;
}[] = [
        {
            id: "online-cv",
            text: "online-cv",
            icon: <GitHubIcon />,
            href: "https://github.com/sharu725/online-cv",
        },
        {
            id: "user-icon",
            text: "Smashicons",
            icon: <AppsIcon />,
            href: "https://www.flaticon.com/authors/smashicons",
        },
        {
            id: "loading-icon",
            text: "loading.io",
            icon: <HourglassBottomIcon />,
            href: "https://loading.io/",
        },
        {
            id: "resume-icon",
            text: "Icons8",
            icon: <ArticleIcon />,
            href: "https://icons8.com/icon/115648/resume",
        },
    ];

function CopyrightComponent({ theme }: { theme: "white" | "blue" }) {
    return (
        <div className="mb-4 print:hidden">
            <h2
                className={
                    "font-bold text-xl " +
                    (theme === "white" ? " text-white" : "text-blue")
                }
            >
                <Copyright fontSize="large" /> کپی رایت
            </h2>

            <div className="mr-4 mt-2">
                <ul>
                    {copyright.map((cr) => (
                        <li key={cr.id}>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={cr.href}
                                className={theme === "white" ? "no-style" : ""}
                            >
                                {cr.icon} {cr.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CopyrightComponent;
