CC=gcc

objects =                 \
          main.o          \
          string/string.o    

execname = Main

run: build
    ./Main

build: $(objects)
    $(CC) -O3 $(objects) -o $(execname)

#clean:
#    rm $(objects) $(execname)
