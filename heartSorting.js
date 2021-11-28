import { FetchApi } from "./datahandler"

const sortByHeartsNumber = async(arrToSort) => {
    let arr = arrToSort
    for (let top = 0; top < arr.length; top++) {
        let swap = []
        for (let non_sorted = top; non_sorted < arr.length; non_sorted++) {
            let arr_top = await FetchApi.countFavsByPostId(arr[top].id)
            let arr_non_sorted = await FetchApi.countFavsByPostId(arr[non_sorted].id)
            if (arr_non_sorted < arr_top) {
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