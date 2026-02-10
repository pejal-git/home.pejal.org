import { createOutput } from '../utils.js';

function createProjectSection(title, projects) {
    const fragment = document.createDocumentFragment();

    fragment.appendChild(createOutput(title));

    const projectContent = document.createElement('div');
    projectContent.className = 'contact-info';

    projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'output-content';

        const labelSpan = document.createElement('span');
        labelSpan.className = 'command';
        labelSpan.textContent = project.label;

        if (project.url) {
            const link = document.createElement('a');
            link.href = project.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.style.textDecoration = 'none';
            link.style.color = 'inherit';

            link.appendChild(labelSpan);
            link.appendChild(document.createTextNode(' ' + project.text));

            div.appendChild(link);
        } else {
            const span = document.createElement('span');
            span.appendChild(labelSpan);
            span.appendChild(document.createTextNode(' ' + project.text));

            div.appendChild(span);
        }
        projectContent.appendChild(div);
    });

    fragment.appendChild(projectContent);
    return fragment;
}


export function projectCommand() {
    const response = document.createElement('div');
    response.className = 'command-response';

    // Ongoing projects
    response.appendChild(
        createProjectSection(
            'Ongoing Closed-source Projects:',
            [
                { label: 'Pejal Website:', text: 'https://pejal.org (Beta)', url: 'https://pejal.org' },
                { label: 'HLC-Terminal', text: 'Web based hacking simulator game (Alpha v0.6)', url: 'https://godam.pejal.org/game' }
            ]
        )
    );
    response.appendChild(
        createOutput('=========================================================', 'success')
    );
    // Archived projects
    response.appendChild(
        createProjectSection(
            'Archived Projects:',
            [
                { label: 'Curl Website:', text: 'Curl-able Pejal Website', url: 'curl https://pejal.org' },
                { label: 'HLC-Terminal:', text: 'Web based hacking simulator game (Alpha)' },
                { label: 'SteamUpload:', text: 'DevOps tools for steam distribution' },
                { label: 'JenkinsHttpsRenew:', text: 'DevOps tool for Auto web cert renew' },
                { label: 'Admin Panel:', text: 'Pejal Website Admin Panel' },
                { label: 'SuperMotocross:', text: '2D Racing Platformer Game', url: 'https://1337-m03w.itch.io/supermotocross' },
                { label: 'DeleteThis (17+):', text: '2D Shooting Platformer Game', url: 'https://1337-m03w.itch.io/deletethis' },
                { label: 'Cosmis oriON! (BTL):', text: '3D Space Shooter Game', url: 'https://1337-m03w.itch.io/cosmosorion-btl' }
            ]
        )
    );

    response.appendChild(
        createOutput('Feel free to check them out!', 'success')
    );

    return response;
}
