import random

H, W = map(int, input().split())

print(H, W)
for _ in range(H):
    print(''.join(random.choice('#.') for _ in range(W)))
