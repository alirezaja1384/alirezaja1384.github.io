import "./css/app.css";

import axios from "axios";
import { useEffect, useState } from "react";

import ResumeComponent from "src/components/Resume";
import LoadingComponent from "src/components/Loading";

import { getPublicProfileUrl } from "src/config";
import { ResumeProfile } from "./types/resumeProfile";

function App() {
    const [resume, setResume] = useState<ResumeProfile | null>(null);

    const fetchResume = () => {
        axios.get<ResumeProfile>(getPublicProfileUrl()).then((response) => {
            setResume(response.data);
        });
    };

    useEffect(fetchResume, []);

    useEffect(() => {
        if (resume) document.title = `رزومه‌ی من | ${resume.user.fullName}`;
    }, [resume]);

    return (
        <div id="app">
            <div id="content">
                {resume ? (
                    <ResumeComponent resume={resume} />
                ) : (
                    <LoadingComponent />
                )}
            </div>
        </div>
    );
}

export default App;
