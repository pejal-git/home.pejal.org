import { createOutput } from '../utils.js';

export function contactCommand() {
    const response = document.createElement('div');
    response.className = 'command-response';

    const contactContent = document.createElement('div');
    contactContent.className = 'contact-info';

    [
        {icon: 'fas fa-envelope', label: 'Email:', text: 'developer@pejal.org', url: 'mailto:developer@pejal.org'},
        {icon: 'fab fa-telegram', label: 'Telegram:', text: 't.me/m30w1337', url: 'https://t.me/m30w1337'},
        {icon: 'fab fa-linkedin', label: 'Linked-In', text: 'in/faizal-refendi', url: 'https://linkedin.com/in/faizal-refendi'},
        {icon: 'fab fa-facebook', label: 'Facebook:', text: 'fb.com/static4life', url: 'https://facebook.com/static4life'},
        {icon: 'fab fa-square-instagram', label: 'Instagram:', text: 'ig.me/1337m03w', url: 'https://instagram.com/1337m03w'},
        {icon: 'fas fa-globe', label: 'Website:', text: 'sites.google.com/view/faizalrefendi', url: 'https://sites.google.com/view/faizalrefendi'}
    ].forEach(contact => {
        const div = document.createElement('div');
        div.className = 'output-content';

        const link = document.createElement('a');
        link.href = contact.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.style.textDecoration = 'none';
        link.style.color = 'inherit';

        const icon = document.createElement('i');
        icon.className = contact.icon;
        icon.style.width = '20px';
        link.appendChild(icon);
        link.appendChild(document.createTextNode(' '));

        const labelSpan = document.createElement('span');
        labelSpan.className = 'command';
        labelSpan.textContent = contact.label;
        link.appendChild(labelSpan);
        link.appendChild(document.createTextNode(' ' + contact.text));

        div.appendChild(link);
        contactContent.appendChild(div);
    });

    response.appendChild(contactContent);
    response.appendChild(createOutput('Feel free to reach out or just to say hello world!', 'success'));

    return response;
}
