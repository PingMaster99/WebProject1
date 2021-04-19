# WebProject1

## Description
This is the first project of the Web Systems and Technologies class of the first semester of 2021. The main objective was to build a website similar to another one already hosted on the web. It replicates the following website: https://kurzgesagt.org/youtube/, and final result can be seen on: http://ubeje.xyz/18259/kurzgesagt/index.html. It utilizes the following technologies: 
* Webpack
* Babel
* ESLint
* React
* Server-side rendering

## Installation
#### REQUIRES NODE.JS

1. Run `git clone https://github.com/PingMaster99/WebProject1.git` or clone this repository via a GUI. 
2. Open the terminal and navigate to the installation directory `cd <directory>`. Example: `cd \mnt\c\installation`
3. Run `npm install` to install all the dependencies
4. To build the server-side rendered app run `npm run build-server` then, press ctrl + C once it's done and run `npm run dev`. The final result should look like this:     ![image](https://user-images.githubusercontent.com/59905458/115188088-a0a0be80-a0a1-11eb-87e1-94090ad94a52.png)
5. Open your web browser and type http://localhost:3006/ in the address bar.
6. To run with an edit-firendly environment (that includes ESLint to check .js files) use the command: `npm run start`. 
7. Open your web browser and type http://localhost:8080/ in the address bar.

## Usage
Note that you can run 4 and 6 simultaneously using two command windows. Also note that localhost:3006 won't display changes until you build it again, while localhost:8080 will display changes you make on the editor, so the latter is preferred if you want to test different functionalities or graphic changes. 

To make changes, you can edit the components in the Components folder inside src:   
![image](https://user-images.githubusercontent.com/59905458/115188689-83b8bb00-a0a2-11eb-908c-02a29cdb2e75.png)

If there are any linter errors while running the environment described on 4, you'll be faced with a screen like this:   
![image](https://user-images.githubusercontent.com/59905458/115188872-d003fb00-a0a2-11eb-9339-dc3956ed90ed.png)

If no errors are present, you'll be faced with a successful compilation:  
![image](https://user-images.githubusercontent.com/59905458/115188940-eca03300-a0a2-11eb-923f-5c2730b03432.png)

The website will display on the chosen localhost in the following manner:  
![image](https://user-images.githubusercontent.com/59905458/115189069-1eb19500-a0a3-11eb-9f0d-42e1ff3cd548.png)


## Contributing
Currently this project can be cloned but no contributions can be added to this repository by externals.

## Credits
* Knowledge for this project was acquired in the Web Systems and Technologies course taught by @denn1s. 
* SSR implementation was based on https://www.digitalocean.com/community/tutorials/react-server-side-rendering and https://www.youtube.com/watch?v=aHVoremdGeQ
* A project by PingMaster99


## License
MIT







