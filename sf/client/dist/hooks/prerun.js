/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { ux } from '@oclif/core';
// eslint-disable-next-line @typescript-eslint/require-await
const hook = async function ({ Command, config }) {
    if (process.argv.includes('--json'))
        return;
    const { plugin } = Command;
    if (!plugin)
        return;
    if (plugin.type === 'link')
        return;
    const jitPlugins = config.pjson.oclif.jitPlugins ?? {};
    const deps = config.pjson.dependencies ?? {};
    const specifiedVersion = jitPlugins[plugin.name] ?? deps[plugin.name];
    if (!specifiedVersion)
        return;
    if (plugin.version !== specifiedVersion) {
        ux.warn(`Plugin ${plugin.name} (${plugin.version}) differs from the version specified by ${config.bin} (${specifiedVersion})`);
    }
};
export default hook;
//# sourceMappingURL=prerun.js.map