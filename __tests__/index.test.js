import { render, screen } from '@testing-library/react'
import { Home, nonConstructibleChange, sortedSquaredArray } from '../pages/index'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)
        
    })
})

describe('Non-Constructible Change', () => {
    const coinsArray = [
        {"coins": [5, 7, 1, 1, 2, 3, 22]},
        {"coins": [1, 1, 1, 1, 1]},
        {"coins": [1, 5, 1, 1, 1, 10, 15, 20, 100]},
    ]

    it(`should calculate minimum not available change for [${coinsArray[0].coins}]`, () => {
        expect( nonConstructibleChange(coinsArray[0].coins)).toEqual(20)
    })

    it(`should calculate minimum not available change for [${coinsArray[1].coins}]`, () => {
        expect( nonConstructibleChange(coinsArray[1].coins)).toEqual(6)
    })

    it(`should calculate minimum not available change for [${coinsArray[2].coins}]`, () => {
        expect( nonConstructibleChange(coinsArray[2].coins)).toEqual(55)
    })
})

describe('Sorted Squared Array', () => {
    const arrays = [
        {"array": [1, 2, 3, 5, 6, 8, 9]},
        {"array": [-2, -1]},
        {"array": [-10, -5, 0, 5, 10]},
    ]

    it(`should calculate minimum not available change for [${arrays[0].array}]`, () => {
        expect( sortedSquaredArray(arrays[0].array)).toEqual([1, 4, 9, 25, 36, 64, 81])
    })

    it(`should calculate minimum not available change for [${arrays[1].array}]`, () => {
        expect( sortedSquaredArray(arrays[1].array)).toEqual([1, 4])
    })

    it(`should calculate minimum not available change for [${arrays[2].array}]`, () => {
        expect( sortedSquaredArray(arrays[2].array)).toEqual([0, 25, 25, 100, 100])
    })
})