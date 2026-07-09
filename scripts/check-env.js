const requiredEnvVars = ["REACT_APP_RESUME_DATA_URL"];

const missingEnvVars = requiredEnvVars.filter((name) => !process.env[name]);

if (missingEnvVars.length > 0) {
    console.error(
        `Missing required environment variables: ${missingEnvVars.join(", ")}`
    );
    process.exit(1);
}
