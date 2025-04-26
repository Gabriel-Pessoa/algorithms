import { generateRanbomNumber } from "../utils/randomNumber";

export function quickSortWithFirstPivot(list: number[]): number[] {
    if (list.length < 2) {
        return list;
    } else {
        const pivot = list.shift() || 0;
        const left: number[] = [];
        const right: number[] = [];

        list.forEach(element => {
            if (element <= pivot) {
                left.push(element);
            }
            if (element > pivot) {
                right.push(element);
            }
        });

        return quickSortWithFirstPivot(left).concat(pivot, quickSortWithFirstPivot(right));
    }
}

export function quickSortWithMiddlePivot(list: number[]): number[] {
    if (list.length < 2) {
        return list;
    } else {
        const listSize = list.length;
        const middlePosition = Math.floor((listSize - 1) / 2);
        const pivot = list[middlePosition];
        const reducedList = list.slice(0, middlePosition).
            concat(list.slice(middlePosition + 1, listSize));

        const left: number[] = [];
        const right: number[] = [];

        reducedList.forEach(element => {
            if (element <= pivot) {
                left.push(element);
            }
            if (element > pivot) {
                right.push(element);
            }
        });

        return quickSortWithMiddlePivot(left).concat(pivot, quickSortWithMiddlePivot(right));
    }
}

export function quickSortWithRandomPivot(list: number[]): number[] {
    if (list.length < 2) {
        return list;
    } else {
        const listSize = list.length;
        const randomPosition = generateRanbomNumber(0, listSize - 1);
        const pivot = list[randomPosition];
        const reducedList = list.slice(0, randomPosition).
            concat(list.slice(randomPosition + 1, listSize));

        const left: number[] = [];
        const right: number[] = [];

        reducedList.forEach(element => {
            if (element <= pivot) {
                left.push(element);
            }
            if (element > pivot) {
                right.push(element);
            }
        });

        return quickSortWithRandomPivot(left).concat(pivot, quickSortWithRandomPivot(right));
    }
}
