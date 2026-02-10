import { createOutput } from '../utils.js';

export function privacyCommand() {
    const response = document.createElement('div');
    response.className = 'command-response';

    response.appendChild(createOutput('Privacy Information:'));

    const privacyList = document.createElement('ul');
    privacyList.className = 'privacy-list';

    [
        'No personally identifiable information is gathered',
        'No cookies are used for monitoring',
        'All terminal interactions happen in your browser',
        'This site contains links, this privacy policy only applies here.'
    ].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        privacyList.appendChild(li);
    });

    response.appendChild(privacyList);

    return response;
}
