# notes-app
The first sample application of 'The Complete Node.js Developer Course (3rd Edition) on Udemy.

# How do I run this?
First, make sure you have Docker installed.  

Then, to run the application:  
<code>
docker-compose up
</code>

This will run the application in a Docker container, write it's output file (which is called notes.txt), and then exit.

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