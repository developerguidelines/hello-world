
all : run

run build clean: compile
	cd built && clear && $(MAKE) $@

compile:
	cd src && clear && $(MAKE) $@

#all: built/main.o built/string.o
#
#built/main.o: src/main.c 
#	gcc -c src/main.c -o built/main.o -I built
#
#built/string.o: src/string/string.c 
#	gcc -c src/string/string.c -o built/string.o -I built
