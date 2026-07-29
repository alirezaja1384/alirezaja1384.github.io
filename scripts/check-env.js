const fs = require("fs");
const path = require("path");

const envPath = path.resolve(__dirname, "../.env");

if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
        const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);

        if (match && process.env[match[1]] === undefined) {
            process.env[match[1]] = match[2];
        }
    }
}

const requiredEnvVars = ["REACT_APP_API_BASE_URL", "REACT_APP_DEFAULT_SLUG"];

const missingEnvVars = requiredEnvVars.filter((name) => !process.env[name]);

if (missingEnvVars.length > 0) {
    console.error(
        `Missing required environment variables: ${missingEnvVars.join(", ")}`
    );
    process.exit(1);
}
