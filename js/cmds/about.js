import { createOutput } from '../utils.js';

export function aboutCommand() {
    const response = document.createElement('div');
    response.className = 'command-response';
    const aboutContent = document.createElement('div');
    aboutContent.className = 'about-content';

    [
        {text: 'Faizal Refendi - Developer/DevOps by day, fisherman/survivalist by heart. 🖥️🎣🦪', class: ''},
        {text: 'Philosophy: "Enjoy even the slightest things in life."', class: 'highlight'},
        {text: 'I work as a developer and devops engineer, but my true escape is fishing and challenging outdoor activities. Balancing bugs in code with the thrill of survival keeps life interesting!', class: ''},
        {text: 'Professionally, I\'m passionate about technology and creating meaningful digital experiences. My passion is my drive and I\'m very persistent.', class: 'highlight'},
        {text: 'Personally, I value connections, growth, and making a positive impact.', class: ''}
    ].forEach(line => {
        const div = document.createElement('div');
        div.className = `output-content ${line.class}`;
        div.textContent = line.text;
        aboutContent.appendChild(div);
    });
    response.appendChild(aboutContent);

    return response;
}
