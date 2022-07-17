//set up : https://www.youtube.com/watch?v=yhUep7E9O20

import { callApi } from "../../../src/utils/helpers";
import fetch from 'jest-fetch-mock'; //https://github.com/jefflau/jest-fetch-mock/issues/82#issuecomment-415772677
import {mockState} from  '../../utils/test-utils'

describe('Helper Fns',()=>{
    
    it('returns all users', async()=>{
        fetch.mockResponseOnce(JSON.stringify(mockState))
        await callApi({
            method : 'GET',
            url: 'http://localhost:5000/users',
        })
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(
            "http://localhost:5000/users",
            {"headers": {"Content-Type": "application/json"}, "method": "GET", "url": "http://localhost:5000/users"}
        )
    })
})