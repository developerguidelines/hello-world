
CC=gcc

objdir=../built


objects =                           \
          $(objdir)/main.o          \

compile: $(objects)

$(objdir)/main.o: main.c
	$(CC) -c main.c 		  \
		  -o $(objdir)/main.o \
		  -I $(objdir)
