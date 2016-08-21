# `quil-starter`

Just a personal convenience project, saving these setup steps for a new [ClojureScript `quil` sketch](http://quil.info):

1. ran [`lein new quil-cljs projectname`](http://quil.info)
2. added [`figwheel` dependency](https://nbeloglazov.com/2015/06/15/live-reloading-in-quil-cljs.html)
3. ran [`lein ancient`](https://github.com/xsc/lein-ancient) and [`lein ancient plugins`](https://github.com/xsc/lein-ancient) to update dependencies
4. added `figwheel` log files to `.gitignore`

## Usage

Run `lein figwheel` command and open `index.html` in your browser.

## License

Copyright © 2016 Bill Tozier

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
