# notes-app
The first sample application of 'The Complete Node.js Developer Course (3rd Edition) on Udemy.

# How do I run this?
## Command line
From the command line, run one of the following commands.

To add a note:  
<code>
node app.js add \<title\> \<note\>
</code>

This will create a new file named <i>notes.json</i> (or create a new one), and write a JSON object to the file containing the title and the note. A message indicating success will be printed to the output.

If the note being added is a duplicate, it will not be added and a failure message will be printed to the output instead.

To remove a note:  
<code>
node app.js remove \<title\> \<note\>
</code>

Looks for a note with the given title in <i>notes.json</i>, and removes it if it is found. If it is not found, the file does not change. A message indicating success will be printed to the output.

To list notes:  
<code>
node app.js list
</code>

Prints a list of all the note titles contained in the file <i>notes.json</i>.

To read a note:  
<code>
node app.js read \<title\>
</code>

Prints the note with the given title from notes.json. An error message will be printed if the note is not found.

## Docker

### Update: The Docker method is currently deprecated. It doesn't really make sense at the moment since the application is not a long-running task, and variable command line options need to be passed in now. Leaving in case we revisit this in the future.
First, make sure you have Docker installed.  

Then, to run the application:  
<code>
docker-compose up
</code>

This will run the application in a Docker container, write it's output file (which is called notes.txt), and then exit.

The first time this is run, it needs to update the packages from npm, so it may appear to hang momentarily, but be patient and it should complete successfully. If you have a newer machine with faster WiFi, this may not even be an issue, but I'm developing this on a nine year old Dell XPS 17 with 802.11n so I thought I'd mention it just in case. I might look into providing some output at this step just so it's clear what's happening.

In order to see the colored output, you must enter the continer like so:  
<code>
docker container exec -it <i>containername</i> bash
node app.js
</code>

This should print 'Success!' to stdout with a green background.

Finally, cleanup when you're done:  
<code>
docker-compose down
</code>

# What does it do?
It writes a text file to the current directory using some node magic. Nothing too fancy right now.

# What's this all about?
I'm currently teaching myself some web development with Node.js, and this is the first application being developed in the course I'm following along with. In addition to the application itself, I'm also applying some of my recently-acquired Docker skills to get proficient in dev environment creation. I was using Vagrant/VMs prior to this, so this is a big change and I want to know it well and figure out all the ins and outs of it.

# Should I look at this?
If you're new to Node.js or web development, and would like to see a basic example of how to go about working with all these fancy new tools, then there might be something of value for you in this repo. If you're a hardened veteran on this scene, you've probably seen all this before.