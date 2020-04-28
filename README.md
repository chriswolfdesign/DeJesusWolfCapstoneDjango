# Agile Development Board
## Author: Ellery De Jesus
## Author: Chris Wolf
## Capstone for Western Carolina University

This project was completed to meet the requirements of CS 495
and CS496 at Western Carolina University.  This project
was built to be used in Western Carolina University courses.
In order to receive permissions to use this project,
please contact the Computer Science Professors at 
Western Carolina University.

### Running instructions
In order to run this project, move into the root directory.
From here, you have two options:

Option 1: Install all requirements globally \
    To do this, run the command
    `pip install -r requirements.txt`

Option 2: Run virtual environment \
    To do this, run 
    `source env/bin/activate`

After either option, run the command
    `python manage.py runserver`

Once the application is running, open localhost:8000/login
on your browser NOTE: localhost:8000 is not supported and will 
throw an error.  You must add the login route.

### Developing the front end
This application uses TypeScript to manage the front end
of this application, to begin moving into the client directory.
You can easily get there from the root directory with the command
`cd demonstration/static/demonstration/client`

From here you will need to use two tools to build the front end: \
TSC: The TypeScript transpiler that will turn your TypeScript into JavaScript \
Watchify: The transpiler that will convert TypeScript's output from "node" JavaScript
to "browser JavaScript"

You can easily run watchers for these two tools from the client directory with the commands
`npm run build` and `npm run watchify` respectively

## Contact
We understand that this project is likely larger than any
a Capstone student has worked with before.  We also understand the difficulty
in picking up a new project and not knowing where to start.  Even though the original
developers are no longer at WCU, please do not hesitate to reach out to us
with any questions you may have:
\ chriswolfdesign@gmail.com