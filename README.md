# srfgroup

## Build with GitHub

Install the gh-pages: npm install gh-pages --save-dev

Add a homepage property: `{
                           "name": "my-app",
                           "version": "0.1.0",
                         + "homepage": "https://gitname.github.io/react-gh-pages",
                           "private": true,`
   

Add deployment scripts: `"scripts": {
                        +   "predeploy": "npm run build",
                        +   "deploy": "gh-pages -d build",
                            "start": "react-scripts start",
                            "build": "react-scripts build",`
                            
Deploy the React app: 

    - git commit + git push
    - npm run deploy
    => if not working: try to delete folder ./build and run : npm run deploy
    
    
## SonarQube
- Start sonar server with docker compose script: docker-compose -f sonar.yml up
- Run script sonar
- View dashboard Sonar