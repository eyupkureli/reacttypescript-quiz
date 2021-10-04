//we want to see all answer (correct/incorrect) in same place so we create this shuffle array

export const shuffleArray = (array: any[]) =>
[...array].sort(()=>Math.random() - 0.5);


/*The function passed into Array.sort() should accept two arguments x and y and returns 
a negative value if x < y, zero if x = y, or a positive value if x > y.
In your first try, you use sort(() => Math.random() >= 0.5), which returns a boolean; 
this is going to be cast to a 0 or a 1. This then means that your function is telling 
the sorter that whatever first argument you pass in is always going to be equal to or greater 
than whatever second argument you pass in. It just happens that 17 is passed in as the second 
argument every time your function is called; you tell the browser that it is therefore less than 
or equal to every other element in the array, and thus it will get put at the beginning of the array.

Your second attempt, with sort(() => Math.random() - 0.5), returns with equal probability that the first
 number is greater than the second, or vice versa, which makes the shuffle work much better. However, 
 because of the unreliability of the whole thing there's zero assurance that the shuffle will work in all 
 browsers or be particularly random. Please use the "real" shuffle algorithm linked above. */