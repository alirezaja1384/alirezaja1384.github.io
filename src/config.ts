const resumeDataUrl = process.env.REACT_APP_RESUME_DATA_URL;

if (!resumeDataUrl) {
    throw new Error("REACT_APP_RESUME_DATA_URL is required");
}

export const RESUME_DATA_URL = resumeDataUrl;
