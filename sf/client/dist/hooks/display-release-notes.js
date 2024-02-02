/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { ux } from '@oclif/core';
export const hook = async function ({ config }) {
    if (process.env.SF_HIDE_RELEASE_NOTES === 'true')
        return;
    try {
        return await config.runCommand('whatsnew', ['--hook']);
    }
    catch (err) {
        const error = err;
        ux.log('NOTE: This error can be ignored in CI and may be silenced in the future');
        ux.log('- Set the SF_HIDE_RELEASE_NOTES env var to "true" to skip this script\n');
        ux.log(error.message);
    }
};
export default hook;
//# sourceMappingURL=display-release-notes.js.map