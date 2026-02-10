import { createOutput } from '../utils.js';

export function skillCommand() {
    const response = document.createElement('div');
    response.className = 'command-response';
    response.appendChild(createOutput('Technical Skills:'));

    const skillList = document.createElement('ul');
    skillList.className = 'privacy-list';
    [
        'Hardware & Network troubleshooting',
        'CI/CD (Jenkins, Fastlane, Firebase)',
        'Game Engine (Unity, Unreal, Game Maker)',
        'Modelling (Maya, Blender)',
        'Microsoft Office (Word, Excel, Powerpoint)',
        'Google Workspace (Docs, Sheets, Slides)',
        'Adobe Creative Suit (Ps, Ai, Ae, Pr)',
        'Scripting fundamental (bash, groovy)',
        'Languages (C#,C++,JAVA,SQL,PHP,HTML5,CSS,JS)',
        'Operating Systems (Windows, Linux, Mac)'
    ].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        skillList.appendChild(li);
    });
    response.appendChild(skillList);

    return response;
}
