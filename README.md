Calculate sessionStorage Used
=======

A bookmarklet that tells you how much sessionStorage is being used. The limit is [supposed to be 5 megabytes](http://www.html5rocks.com/en/tutorials/offline/quota-research/).

Pull requests accepted!

# Building the Bookmarklet

On the CLI, cd into the directory that contains these files, then...

    ./make_bookmarklet.pl sessionStorage.js > bookmarklet.js

# Installing the Bookmarklet

* Make a new bookmark in your browser and name it.
* Copypasta from bookmarklet.js into the URL of the new bookmark.
* Go to your page that uses sessionStorage.
* Click the bookmark and read the console.log();

# License

MIT

# Aknowlegements

* uses [getUTF8Length method](http://stackoverflow.com/questions/2848462/count-bytes-in-textarea-using-javascript/12206089#12206089) by [broofa](http://stackoverflow.com/users/109538/broofa)
* bookmarklet.js built using [gruber's perl script](https://gist.github.com/gruber/8658935)

### Changelog

* 0.0.1 - first release
