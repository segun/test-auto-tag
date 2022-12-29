import * as core from '@actions/core';

const packageDir = core.getInput("PACKAGEJSON_DIR");
core.debug("Package Json Dir: " + packageDir);
const tagPrefix = core.getInput("tag-prefix")
core.debug("Tag Prefix: " + tagPrefix);
const tagSuffix = core.getInput("tag-suffix")
core.debug("Tag Suffix: " + tagSuffix);
console.log(process.env);