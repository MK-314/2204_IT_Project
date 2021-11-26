const sortByHeartsNumber = (arrToSort) => {
    let arr = arrToSort
    for (let top = 0; top < arr.length; top++) {
        let swap = []
        for (let non_sorted = top; non_sorted < arr.length; non_sorted++) {
            if (arr[non_sorted].likes < arr[top].likes) {
                swap = arr[top];
                arr[top] = arr[non_sorted];
                arr[non_sorted] = swap;
            }
        }
        if (top + 1 == arr.length) {
            return arr.reverse();
        }
    }
}
export { sortByHeartsNumber }