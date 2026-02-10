export function createOutput(content, className = 'output-content') {
    const element = document.createElement('div');
    element.className = className;
    element.textContent = content;
    return element;
}
