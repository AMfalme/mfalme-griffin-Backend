# The main django app for centralbpo.com

# Requirements
* Python 3.8.10 interpreter

# Setup

* Install Python version 3.8.10

# Test

```
$ ~/.local/bin/python3 --version

# To make this virtualenv and python interpreter the default
# you can add to your $HOME/.bashrc
# export PATH=$PATH:$HOME/.local/bin
# with the above in your path reopen the terminal and test which
# executables are being used:
$ which which pip3
/home/user/.local/bin/pip3

# install virtualenv
$ pip3 install virtualenv

# check virtualenv properly installed
$ which virtualenv 
/home/user/.local/bin/virtualenv

```


## Install needed packages

``` bash
$ sudo apt-get install git build-essential libpoppler-dev libpoppler-cpp-dev \
       libtiff5-dev libjpeg8-dev libopenjp2-7-dev zlib1g-dev libfreetype6-dev \
       liblcms2-dev libwebp-dev tcl8.6-dev tk8.6-dev python3-tk \
       libharfbuzz-dev libfribidi-dev libxcb1-dev
```

## Clone needed repository and bootstrap

```bash
# clone the respository
$ git clone git@github.com:AMfalme/mfalme-griffin-Backend.git
$ cd mfalme-griffin-Backend
# activate virtual environment and install pip requirements from requirements.txt file
$ workon `virtualenv`
$ pip install -r requirements.txt

```

# Running Locally

```
$ ./manage.py runserver
```
