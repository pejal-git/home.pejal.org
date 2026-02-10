import { asciiImg } from '../asciiImg.js';

export function asciiCommand() {
    const asciiDiv = document.createElement('div');
    asciiDiv.className = 'ascii-art';
    asciiDiv.style.whiteSpace = 'pre';
    asciiDiv.style.fontFamily = 'monospace';
    asciiDiv.textContent = asciiImg;

    const response = document.createElement('div');
    response.className = 'command-response';
    response.appendChild(asciiDiv);
    return response;
}
