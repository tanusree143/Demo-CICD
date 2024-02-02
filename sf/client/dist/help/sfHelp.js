/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { Help } from '@oclif/core';
import chalk from 'chalk';
import { SfCommandHelp } from './sfCommandHelp.js';
export default class SfHelp extends Help {
    constructor() {
        super(...arguments);
        this.CommandHelpClass = SfCommandHelp;
        this.showShortHelp = false;
        this.commands = [];
        this.subCommands = {};
    }
    async showHelp(argv) {
        this.showShortHelp = argv.includes('-h');
        this.commands = this.config.commandIDs.map((c) => `${this.config.bin} ${c.replace(/:/g, this.config.topicSeparator)}`);
        for (const cmd of this.commands) {
            this.subCommands[cmd] = this.commands
                .filter((c) => c.startsWith(cmd) && c !== cmd)
                .map((c) => `${c.replace(cmd, '')}`);
        }
        return super.showHelp(argv);
    }
    getCommandHelpClass(command) {
        this.commandHelpClass = super.getCommandHelpClass(command);
        this.commandHelpClass.showShortHelp = this.showShortHelp;
        return this.commandHelpClass;
    }
    log(...args) {
        const formatted = args.map((arg) => {
            for (const cmd of this.commands) {
                const regex = this.subCommands[cmd].length > 0
                    ? new RegExp(`(?<!\\$ )${cmd}(?!${this.subCommands[cmd].join('|')})`, 'g')
                    : new RegExp(`(?<!\\$ )${cmd}`, 'g');
                arg = arg.replace(regex, chalk.dim(cmd));
            }
            return arg;
        });
        super.log(...formatted);
    }
}
//# sourceMappingURL=sfHelp.js.map