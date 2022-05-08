const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
    serverUrl: 'http://localhost:9000',
    token : "6926cecc5efad2db539314dabbe8d50baaa82342",
    options : {
        'sonar.projectName': 'srfgroup_front',
        'sonar.projectDescription': 'Description for "srfGroup Project" project...',
        'sonar.sources': '.',
        'sonar.inclusions' : 'src/**' // Entry point of your code
    }
}, () => {});