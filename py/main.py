"""
    What is Python?
    https://www.python.org/

    Where you can learned?
    https://learnxinyminutes.com/docs/python/

    What you can do with Python?
    https://www.jetbrains.com/lp/devecosystem-2021/python/
"""


""" 
    Download Python: https://www.python.org/downloads/
    Download a command line: https://cmder.net/
"""

# To create a variable only need a name 

var1 = "Hello"
print(var1)

var1 = 10
print(var1)



# In python you can create a function with de key wor 'def',
# add a name to identify
# and you can add arguments to use with the function (arg1)


def PrintHelloWorld():
    print("Hello World")


PrintHelloWorld()


# Knows if a word is a palindrome
def palindrome(word):
    word = word.replace(" ", "") # clear empty spaces
    word = word.lower()
    invert_word = word[::-1] # invert the position of the string
    if word == invert_word:
        return True
    else:
        return False


def run():
    word = input("Write a word: ") # get user input
    is_palindrome = palindrome(word) # call palindrome function and saved result in 'is_palindrome'
    if is_palindrome == True:
        print("Is palindrome")
    else:
        print("Is not palindrome")


# execute program
if __name__ == '__main__':
    run()