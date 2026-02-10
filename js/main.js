import { commandsMap, unknownCommand } from './cmds/index.js';
//import { commandsMap } from './cmds/index.js';
import { asciiImg } from './asciiImg.js';
import { quotes } from './quotes.js';
import { createOutput } from './utils.js';

// Wait for DOM to be fully loaded before executing
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements with null checks
    const terminalOutput = document.getElementById('terminal-output');
    const commandInput = document.getElementById('command-input');

    // Verify critical elements exist
    if (!terminalOutput || !commandInput) {
        console.error('Error: Required terminal elements not found');
        return;
    }

    // Constants
    const MAX_HISTORY = 50;
    const MAX_COMMAND_LENGTH = 100;
    const COMMAND_PREFIX = 'guest@terminal:~$ ';

    // State
    let commandHistory = [];
    let historyIndex = -1;

    // Initialize terminal
    function init() {
        commandInput.focus();
        
        // Add initial system message
        setTimeout(() => {
            const initMsg = document.createElement('div');
            initMsg.className = 'system-info';
            initMsg.textContent = 'System ready. Terminal session initialized.';
            
            // Safe insertion
            if (terminalOutput.children.length > 3) {
                terminalOutput.insertBefore(initMsg, terminalOutput.children[3]);
            } else {
                terminalOutput.insertBefore(initMsg, terminalOutput.lastElementChild);
            }
            
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }, 1000);
    }

    // Helper function to create output elements safely
    /*function createOutput(content, className = 'output-content') {
        const element = document.createElement('div');
        element.className = className;
        element.textContent = content;
        return element;
    }*/

    // Display command with prompt
    function displayCommand(command) {
        const commandLine = document.createElement('div');
        commandLine.className = 'command-line';
        
        const promptSpan = document.createElement('span');
        promptSpan.className = 'prompt';
        promptSpan.textContent = COMMAND_PREFIX;
        
        const commandSpan = document.createElement('span');
        commandSpan.className = 'command';
        commandSpan.textContent = command;
        
        commandLine.appendChild(promptSpan);
        commandLine.appendChild(commandSpan);
        terminalOutput.insertBefore(commandLine, terminalOutput.lastElementChild);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    // Process commands
    function processCommand(command) {
        const output = document.createElement('div');
        output.className = 'output';

        const commandFunc = commandsMap[command.toLowerCase()];
        const response = commandFunc
            ? commandFunc(command)
            : unknownCommand(command);

        output.appendChild(response);
        terminalOutput.insertBefore(output, terminalOutput.lastElementChild);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    // Handle unknown commands
    function unknownCommand(command) {
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

    // Handle command input
    function handleKeyDown(e) {
        if (commandHistory.length >= MAX_HISTORY) {
            commandHistory.shift();
        }

        if (e.key === 'Enter') {
            const command = commandInput.value.trim();
            if (!command) return;

            if (command.length > MAX_COMMAND_LENGTH) {
                terminalOutput.appendChild(createOutput('Error: Command too long', 'error'));
                commandInput.value = '';
                return;
            }

            commandHistory.push(command);
            historyIndex = commandHistory.length;
            displayCommand(command);
            processCommand(command);
            commandInput.value = '';
        } else if (e.key === 'ArrowUp') {
            // Command history navigation
            e.preventDefault();
            if (commandHistory.length > 0) {
                if (historyIndex > 0) historyIndex--;
                commandInput.value = commandHistory[historyIndex] || '';
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    commandInput.value = commandHistory[historyIndex] || '';
                } else {
                    historyIndex = commandHistory.length;
                    commandInput.value = '';
                }
            }
        }
    }

    // Set up event listeners
    commandInput.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', () => commandInput.focus());

    // Initialize the terminal
    init();
});
