import { asciiCommand } from './ascii.js';
import { quoteCommand } from './quote.js';
import { helpCommand } from './help.js';
import { skillCommand } from './skills.js';
import { aboutCommand } from './about.js';
import { projectCommand } from './projects.js';
import { contactCommand } from './contact.js';
import { privacyCommand } from './privacy.js';
import { funCommand } from './fun.js';
import { createOutput } from '../utils.js';

export function clearCommand() {
    const terminalOutput = document.getElementById('terminal-output');
    if (!terminalOutput) return;

    const preserveClasses = ['system-info', 'welcome', 'input-line', 'divider'];

    // Convert HTMLCollection to Array to safely loop while removing
    const children = Array.from(terminalOutput.children);

    for (const child of children) {
        // Keep elements with preserveClasses or the input line
        const shouldPreserve = preserveClasses.some(cls => child.classList.contains(cls));
        if (!shouldPreserve) {
            terminalOutput.removeChild(child);
        }
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;

    // Return an empty div so appendChild in main.js doesn't break
    return document.createElement('div');
}




export const commandsMap = {
    'clear': clearCommand,
    'help': helpCommand,
    'skills': skillCommand, 'skill': skillCommand,
    'about': aboutCommand,
    'project': projectCommand, 'projects': projectCommand,
    'contact': contactCommand, 'contacts': contactCommand,
    'privacy': privacyCommand,
    'ascii': asciiCommand,
    'quote': quoteCommand, 'quotes': quoteCommand,
    /* // Disabling fun command --work in progress
    'whoami': funCommand,
    'id': funCommand,
    'uname -a': funCommand,
    'hostname': funCommand,
    'pwd': funCommand,
    'netstat': funCommand,
    'netstat -a': funCommand,
    'netstat -tulnp': funCommand,
    'ip': funCommand,
    'ip a': funCommand,
    'apt update': funCommand,
    'apt upgrade': funCommand,
    'ls': funCommand,
    'ls -l': funCommand,
    'ls -la': funCommand*/
};

// Unknown command handler
export function unknownCommand(command) {
    const errorMsg = document.createElement('div');
    errorMsg.className = 'output-content error';
    errorMsg.textContent = `Command not found: ${command}`;

    const response = document.createElement('div');
    response.className = 'command-response';
    response.appendChild(errorMsg);
    response.appendChild(createOutput('Type help to see available commands'));
    response.appendChild(createOutput('Pro tip: Press Up Arrow to edit your last command'));
    return response;
}
