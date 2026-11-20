// Создаём генератор случайных, но воспроизводимых чисел
export function createRandomGenerator(seed: number) {
    let value = seed

    return () => {
        value = (value * 16807) % 2147483647

        return (value - 1) / 2147483646
    }
}