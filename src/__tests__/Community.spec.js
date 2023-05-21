jest.mock('../components/Utilities/Reddit_API');
jest.mock('react-redux');
import React from "react";
import Community from '../components/Community';
import { getPopular } from '../components/Utilities/Reddit_API';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {waitFor, screen, render } from '@testing-library/react'


describe("Community component", () => {
    test('It should present popular communities', async () => {
        useDispatch.mockImplementation(() => {return () => {}});
        getPopular.mockImplementation(() => 
        {return {data: {
                children: [
                    {data:{display_name:'first', url:'123'}}, 
                    {data:{display_name:'second', url:'234'}}
                ]
            }
        }});
        render(<BrowserRouter><Routes><Route path='/:communityName?' element={ <Community /> } /></Routes></BrowserRouter>);
        expect(await screen.findByText('first')).toBeInTheDocument();
        expect(await screen.findByText('second')).toBeInTheDocument();
    });
});
