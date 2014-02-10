aspl (assets pull) 
-------------

my first npm package :)

Fetch .js assets on CDN that in an html file to current directory by just one command.

###Install:
    
    npm install aspl -g

###Usage:

you want to fetch javascript assets in test.html

    ...
    <script src="http://code.jquery.com/jquery.min.js"></script>
    <script src="http://jashkenas.github.io/underscore/underscore-min.js"></script>
    <script src="http://127.0.0.1/yo.js"></script>
    ...


all you need is just one command
    
    aspl test.html


done! 
    
    ./
     |-- jquery.min.js
     |-- underscore-min.js
    
