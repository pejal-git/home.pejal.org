import { createOutput } from '../utils.js';

export function helpCommand() {
    const response = document.createElement('div');
    response.className = 'command-response';
    const helpList = document.createElement('div');
    helpList.className = 'help-list';

    [
        {cmd: 'help', desc: 'Show available commands'},
        {cmd: 'about', desc: 'Information about Faizal'},
        {cmd: 'skill', desc: 'Show my technical skills'},
        {cmd: 'contact', desc: 'Show contact information'},
        {cmd: 'project', desc: 'Show personal projects'},
        {cmd: 'quote', desc: 'Display a random inspirational quote'},
        {cmd: 'ascii', desc: 'View developer image in ascii'},
        {cmd: 'privacy', desc: 'Website privacy information'},
        {cmd: 'clear', desc: 'Clear the terminal screen'}
    ].forEach(item => {
        const li = document.createElement('li');
        const cmdSpan = document.createElement('span');
        cmdSpan.className = 'command';
        cmdSpan.textContent = item.cmd;
        li.appendChild(cmdSpan);
        li.appendChild(document.createTextNode(` - ${item.desc}`));
        helpList.appendChild(li);
    });
    response.appendChild(helpList);
    // Disable fun command
    //response.appendChild(createOutput('Tip 1: Some Linux-like commands enabled here ;)'));
    //response.appendChild(createOutput('Tip 2: Use ↑/↓ arrow keys to navigate command history'));
    response.appendChild(createOutput('Tip: Use ↑/↓ arrow keys to navigate command history'));

    return response;
}
