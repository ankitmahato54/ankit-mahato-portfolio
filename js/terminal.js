// ============================================
// TERMINAL.JS - Full Terminal Functionality
// ============================================

const terminalOutput = document.getElementById('terminalOutput');
const terminalInput = document.getElementById('terminalInput');

if (terminalInput && terminalOutput) {
    let history = [];
    let historyIndex = 0;

    // ============================================
    // COMMANDS
    // ============================================
    const commands = {
        help: () => [
            'Available commands:',
            '  whoami     - Display user information',
            '  skills     - List technical skills',
            '  projects   - Show projects',
            '  experience - Show work experience',
            '  certs      - Show certifications',
            '  education  - Show education',
            '  contact    - Show contact information',
            '  github     - Open GitHub profile',
            '  linkedin   - Open LinkedIn profile',
            '  resume     - Download resume',
            '  clear      - Clear the terminal',
            '  help       - Show this help message'
        ],

        whoami: () => [
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            'Name:      Ankit Mahato',
            'Role:      Aspiring Cloud Infrastructure Engineer',
            'Education: MCA Student at KIIT (2025-2027)',
            'Previous:  Wipro Scholar Trainee',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
        ],

        skills: () => [
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            'Technical Skills:',
            '',
            'Comfortable With:',
            '  ● Windows - Enterprise Support, Troubleshooting',
            '  ● SQL - Joins, Views, Subqueries, Normalization',
            '  ● DBMS - Database Design, ER Diagrams',
            '  ● Networking - TCP/IP, DNS, DHCP',
            '  ● SCCM - System Deployment, Software Distribution',
            '  ● Bomgar - Remote Support',
            '',
            'Currently Learning:',
            '  ● Azure (AZ-900)',
            '  ● Linux Administration',
            '  ● Python',
            '  ● Bash Scripting',
            '  ● Docker',
            '  ● Git & GitHub',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
        ],

        projects: () => [
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            'Projects:',
            '',
            '  📊 SQL Laboratory',
            '     ● 500+ SQL Problems',
            '     ● Database Designs',
            '     ● Query Optimization',
            '     ● ER Diagrams',
            '',
            '  🐍 Python Log Analyzer',
            '     ● Automated log parsing',
            '     ● Error detection',
            '     ● Report generation',
            '',
            '  🐧 Linux User Automation',
            '     ● Bash script for user management',
            '     ● Permission automation',
            '     ● System monitoring',
            '',
            '  ☁️ Azure VM Deployment',
            '     ● Ubuntu VM on Azure',
            '     ● Network configuration',
            '     ● Security hardening',
            '',
            '  🐳 Docker Container Lab',
            '     ● Dockerfile creation',
            '     ● Multi-container setup',
            '     ● Docker Compose',
            '',
            '  🌐 Networking Simulation',
            '     ● Network topology design',
            '     ● Subnetting practice',
            '     ● Routing configuration',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
        ],

        experience: () => [
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            'Experience:',
            '',
            'Wipro Limited - Scholar Trainee (IT Support)',
            '2023 - 2024',
            '  ● L1/L2 desktop support for 500+ enterprise users',
            '  ● System deployment using SCCM',
            '  ● Network troubleshooting (TCP/IP, DNS, DHCP)',
            '  ● Remote support via Bomgar',
            '  ● IT documentation',
            '',
            'KIIT University - MCA Student',
            '2025 - 2027',
            '  ● Focus: Cloud Computing, Linux Administration',
            '  ● Coursework: DBMS, Networking, Python, Linux',
            '  ● Projects: Cloud infrastructure simulations',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
        ],

        certs: () => [
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            'Certifications:',
            '',
            '  ✅ Google IT Support Professional',
            '     Issued: Google · 2024',
            '     Skills: Troubleshooting, Networking, Security',
            '',
            '  ⏳ AZ-900 Azure Fundamentals',
            '     In Progress · Expected 2026',
            '     Topics: Cloud Concepts, Azure Services',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
        ],

        education: () => [
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            'Education:',
            '',
            '  KIIT University (2025-2027)',
            '  Master of Computer Applications (MCA)',
            '',
            '  Focus Areas:',
            '    ● Cloud Computing',
            '    ● Linux Administration',
            '    ● Networking',
            '    ● Database Management',
            '    ● Programming (Python, C)',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
        ],

        contact: () => [
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            'Contact Information:',
            '',
            '  📧 Email:   ankit.mahato@gmail.com',
            '  🐙 GitHub:  github.com/ankitmahato',
            '  🔗 LinkedIn: linkedin.com/in/ankitmahato',
            '  📍 Location: Bhubaneswar, India',
            '  💼 Status:  Open for opportunities',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
        ],

        github: () => {
            window.open('https://github.com/ankitmahato', '_blank');
            return ['Opening GitHub...'];
        },

        linkedin: () => {
            window.open('https://linkedin.com/in/ankitmahato', '_blank');
            return ['Opening LinkedIn...'];
        },

        resume: () => {
            window.open('resume.pdf', '_blank');
            return ['Downloading resume...'];
        },

        clear: () => {
            terminalOutput.innerHTML = '';
            return [];
        }
    };

    // ============================================
    // TERMINAL FUNCTIONS
    // ============================================
    function printLine(text) {
        const line = document.createElement('div');
        line.textContent = text;
        terminalOutput.appendChild(line);
        const container = document.getElementById('terminalBody');
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }

    function executeCommand(command) {
        const trimmed = command.trim();
        if (!trimmed) return;

        history.push(trimmed);
        historyIndex = history.length;

        printLine(`$ ${trimmed}`);

        const response = commands[trimmed];
        if (response) {
            const output = response();
            if (Array.isArray(output)) {
                output.forEach(line => printLine(line));
            } else if (typeof output === 'string') {
                printLine(output);
            }
        } else {
            printLine(`Command not found: ${trimmed}`);
            printLine('Type "help" for available commands.');
        }
        
        // Add a blank line after command execution
        // (except for clear command)
        if (trimmed !== 'clear') {
            // Let the user see the output
        }
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value;
            terminalInput.value = '';
            executeCommand(command);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                terminalInput.value = history[historyIndex] || '';
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                historyIndex++;
                terminalInput.value = history[historyIndex] || '';
            } else {
                historyIndex = history.length;
                terminalInput.value = '';
            }
        }
    });

    // Focus terminal input when clicking anywhere on terminal
    document.getElementById('terminalBody')?.addEventListener('click', () => {
        terminalInput.focus();
    });

    // ============================================
    // INITIAL WELCOME
    // ============================================
    // Welcome already in HTML, but we can add extra
    setTimeout(() => {
        terminalInput.focus();
    }, 500);
}