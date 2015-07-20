
This is just a Hello World for MakeFiles. It is not meant to be a complete guide 
of this tool. For complete reference, please visit [this page][MakeFileURL]


# Introduction

The  make  program  is  intended  to  automate the process of transform a set of
source  code  file into a functioning executable program. Here is an explanation
of this [book][Book]

                    "The  make  program  is  intended  to  automate  the mundane
                    aspects  of transforming source code into an executable. The
                    advantages  of make over scripts is that you can specify the
                    relationships between the elements of your program to make ,
                    and  it  knows  through  these  relationships and timestamps
                    exactly  what steps need to be redone to produce the desired
                    program  each  time.  Using  this information, make can also
                    opti-  mize  the  build process avoiding unnecessary steps."

# Rules
    There are many kinds of rules, but I'll show only a few.

## Explicit Rules                                 

They are those rules that explicitly the target the it is about. Example:

```make
complex.o: complex.c complex.h
    gcc -c complex.c -o complex.o
```

in this example, we instantly see that the target 'complex.o' is meant to be a 
builder for the object file 'complex.o'.

## Patterns Rules                                 
        

# Stupid Errors with Tabs/Spaces before Rules

The  make program has an anoying error related with rules. The word is that each
rule  of  a  target  has to be preceded with a 'tab' caracter. If you misstype a
single  espace  before  or  after  a tab, or even if you put 4 spaces instead of
'tab'  it  does  not  matter,  it wont work. Right this time (Sun, 19/Jul/2015 -
04:20),  I've  been  geting  the  following error message with some build target

    make[1]: Entering directory '/i/projects/LibC/built'
    Makefile:11: *** missing separator.  Stop.
    make[1]: Leaving directory '/i/projects/LibC/built'
    Makefile:5: recipe for target 'build' failed
    make: *** [build] Error 2

so, the truth was that I was puting one single (damn) space after the tab. I deleted 
all the damn thing and started from the begining. So, if you are like 04:00 in the 
morning, just about to kill your self because of that error, please take a deep 
breath and try this first. If it does not work, don't call me to your funeral.

[MakeFileURL]: http://example.com

Managing Projects with GNU make, Robert Mecklenburg, O'Reilly
[Book]: http://book.com
