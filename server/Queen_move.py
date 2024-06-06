# в пизду, тут будут шахматы)))0)
import random
import time
from termcolor import colored

width = 50
height = 50

width1 = width - 1
height1 = height - 1

desk = []
for i in range(height):
    desk.append([])
    for j in range(width):
        desk[i].append("█")


def Queen_move(n1: int, n2: int):
    desk[n1][n2] = "W"
    a1 = n1
    a2 = n2
    while True:
        if a1 == 0 or a2 == 0:
            a1 = n1
            a2 = n2
            break
        a1 -= 1
        a2 -= 1
        desk[a1][a2] = "*"
    while True:
        if a1 == 0 or a2 == width1:
            a1 = n1
            a2 = n2
            break
        a1 -= 1
        a2 += 1
        desk[a1][a2] = "*"
    while True:
        if a1 == height1:
            a1 = n1
            break
        a1 += 1
        desk[a1][a2] = "*"
    while True:
        if a1 == 0:
            a1 = n1
            break
        a1 -= 1
        desk[a1][a2] = "*"
    while True:
        if a2 == 0:
            a2 = n2
            break
        a2 -= 1
        desk[a1][a2] = "*"
    while True:
        if a2 == width1:
            a2 = n2
            break
        a2 += 1
        desk[a1][a2] = "*"
    while True:
        if a1 == height1 or a2 == width1:
            a1 = n1
            a2 = n2
            break
        a1 += 1
        a2 += 1
        desk[a1][a2] = "*"
    while True:
        if a1 == height1 or a2 == 0:
            a1 = n1
            a2 = n2
            break
        a1 += 1
        a2 -= 1
        desk[a1][a2] = "*"


Queen_move(25, 25)

for i in desk:
    # time.sleep(0.08)
    print(*i)

res=""
i = 0
Artem = "MNE NEHUI DELAT SOVSEM"
while res != Artem:
    # time.sleep(0.001)
    a = chr(random.randint(1, 2000)).upper()
    print(colored(res+a, "red"),end=" ")
    if a == Artem[i]:
        print()
        i += 1
        res = res+a
        continue
print(colored(Artem, "green"))