import { createOutput } from '../utils.js';

export function funCommand(command) {
    const response = document.createElement('div');
    response.className = 'command-response';

    switch(command) {
        case 'whoami':
            response.appendChild(createOutput('guest'));
            break;
        case 'id':
            response.appendChild(createOutput('uid=1002(guest) gid=1002(guest) groups=1002(guest)'));
            break;
        case 'uname -a':
            response.appendChild(createOutput('Linux pejal.org 5.15.0-144-generic x86_64 GNU/Linux'));
            break;
        case 'hostname':
            response.appendChild(createOutput('pejal.org'));
            break;
        case 'pwd':
            response.appendChild(createOutput('/home/guest'));
            break;
        case 'netstat':
        case 'netstat -a':
        case 'netstat -tulnp':
            response.appendChild(createOutput('netstat full feature DISABLED. Displaying limited info:', 'error'));
            response.appendChild(createOutput('(Not all owned process info will be shown, you need to enable full feature.)'));
            response.appendChild(createOutput('Active Internet connections (limited info)'));
            response.appendChild(createOutput('tcp 0 0 *:443 *:* LISTEN'));
            response.appendChild(createOutput('tcp 0 0 *:80 *:* LISTEN'));
            response.appendChild(createOutput('udp 0 0 *:443 *:* LISTEN'));
            break;
        case 'ip':
        case 'ip a':
            response.appendChild(createOutput('1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536'));
            response.appendChild(createOutput('   inet 127.0.0.1/8 scope host lo'));
            response.appendChild(createOutput('2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500'));
            response.appendChild(createOutput('   inet 102.211.234.190/25 scope global eth0'));
            break;
        case 'apt update':
            response.appendChild(createOutput('Reading package lists... Done'));
            response.appendChild(createOutput('E: Could not open lock file /var/lib/apt/lists/lock - open (13: Permission denied)'));
            response.appendChild(createOutput('E: Unable to lock directory /var/lib/apt/lists/'));
            response.appendChild(createOutput('W: Problem unlinking the file /var/cache/apt/pkgcache.bin - RemoveCaches (13: Permission denied)'));
            response.appendChild(createOutput('W: Problem unlinking the file /var/cache/apt/srcpkgcache.bin - RemoveCaches (13: Permission denied)'));
            break;
        case 'apt upgrade':
            response.appendChild(createOutput('E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)'));
            response.appendChild(createOutput('E: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), are you root?'));
            break;
        case 'ls':
            response.appendChild(createOutput(''));
            break;
        case 'ls -l':
            response.appendChild(createOutput('total 0'));
            break;
        case 'ls -la':
            response.appendChild(createOutput('drwxr-x--- 5 guest guest 4096 Jan 21 21:51 .'));
            response.appendChild(createOutput('drwxr-xr-x 8 root  root  4096 Jan 21 21:26 ..'));
            response.appendChild(createOutput('-rw-r--r-- 1 guest guest  220 Jan 21 21:26 .bash_logout'));
            response.appendChild(createOutput('-rw-r--r-- 1 guest guest 3771 Jan 21 21:26 .bashrc'));
            response.appendChild(createOutput('-rw-r--r-- 1 guest guest  807 Jan 21 21:26 .profile'));
            response.appendChild(createOutput('drwxr-xr-x 2 root  root  4096 Jan 22 02:28 .ssh'));
            break;
        default:
            response.appendChild(createOutput(`Command "${command}" is not supported in funCommand`, 'error'));
    }

    return response;
}
