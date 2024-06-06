#тут я буду решать задачки, мне похуй
from typing import List
def searchInsert(nums: List[int], target: int) -> int:
    if target in nums:
        return nums.index(target)
    else:
        for i in nums:
            if target < i:
                return nums.index(i)
    return len(nums)+1

print(searchInsert(list(map(int, input().split())), int(input())))
