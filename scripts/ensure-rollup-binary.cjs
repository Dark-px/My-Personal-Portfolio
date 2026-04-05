const { execSync } = require("node:child_process");

const TARGET_PACKAGE = "@rollup/rollup-linux-x64-gnu";

function log(message) {
  console.log(`[rollup-fix] ${message}`);
}

function resolveOptionalBinary() {
  try {
    require.resolve(TARGET_PACKAGE);
    return true;
  } catch {
    return false;
  }
}

function getInstalledRollupVersion() {
  try {
    return require("rollup/package.json").version;
  } catch {
    return null;
  }
}

function ensureBinaryOnLinux() {
  if (!(process.platform === "linux" && process.arch === "x64")) {
    log(`skip on ${process.platform}/${process.arch}`);
    return;
  }

  if (resolveOptionalBinary()) {
    log("linux binary already present");
    return;
  }

  const rollupVersion = getInstalledRollupVersion();
  const packageToInstall = rollupVersion
    ? `${TARGET_PACKAGE}@${rollupVersion}`
    : TARGET_PACKAGE;

  log(`missing optional binary, installing ${packageToInstall}`);
  execSync(`npm install --no-save ${packageToInstall}`, {
    stdio: "inherit",
  });
}

ensureBinaryOnLinux();
