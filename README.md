# Photo Grid

Specifically adapted to photogragh display, this responsive grid layout is

# Origin

Photo Grid is based on [Hugird](http://themes.gohugo.io/theme/hugrid/). 

## Demo

- [My own photo gallery](https://chen-zhe.github.io/portfolio/)

## Features

- Responsive design
- Easy photo management with automatic sorting, thumbnail creation and EXIF info extraction
- Full lazy loading for maximum bandwidth savings

## Screenshot

![Hugrid screenshot](https://github.com/Chen-Zhe/photo-grid/blob/master/images/screenshot.png)


## Contents

- [Installation](#installation)
- [Getting started](#getting-started)
    - [The config file](#the-config-file)
	- [Photo Management](#photo-management)
    - [Nearly finished](#nearly-finished)
- [Contributing](#contributing)
- [License](#license)
- [Annotations](#annotations)


## Installation

Inside the folder of your new Hugo site run:

```sh
    $ mkdir themes
    $ cd themes
    $ git clone https://github.com/chen-zhe/photo-grid
```
For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.


## Getting started

After installing the theme successfully it requires a just a few more steps to get your site running.


### The config file

Take a look inside the [`exampleSite`](https://github.com/chen-zhe/photo-grid/tree/master/exampleSite) folder of this theme. You'll find a file called [`config.toml`](https://github.com/chen-zhe/photo-grid/blob/master/exampleSite/config.toml). To use it, copy the `config.toml` in the root folder of your Hugo site. Feel free to change the strings in this theme.

### Photo Management

All photos are stored in the [`photo`](https://github.com/chen-zhe/photo-grid/tree/master/exampleSite/content/photo) folder under `content`. You can make multiple directories under it and the theme will enumerate all photos within in order. Within each subfolder, e.g. [`1-trip1`](https://github.com/chen-zhe/photo-grid/tree/master/exampleSite/content/photo/1-trip1), you can put all relevant photos in it and then copy over the `index.md` file.

Within `index.md` file, you can specify each photo's name, description and other properties. Take a look at the descriptions to understand what can be customized.

### Nearly finished

In order to see your site in action, run Hugo's built-in local server. 

    $ hugo server

Now enter `localhost:1313` in the address bar of your browser.


## Contributing

Did you found a bug or got an idea for a new feature? Feel free to use the [issue tracker](//github.com/chen-zhe/photo-grid/issues) to let me know. Or make directly a [pull request](//github.com/chen-zhe/photo-grid/pulls).


## License

This work is licensed under the MIT License. For more information read the [License](//github.com/chen-zhe/photo-grid/blob/master/LICENSE.md).


## Annotations

Thanks 

- to [spf13](https://github.com/spf13) for creating Hugo and the awesome community around the project
- to [digitalcraftsman](https://github.com/digitalcraftsman) for creating Hugo themes and writing nice READMEs
- to Codrops for original [Thumbnail Grid with Expanding Preview](http://tympanus.net/codrops/?p=14530).
- to Pavel for porting over the aforementioned theme to Hugo as [Hugrid](https://github.com/aerohub/hugrid)