jest.mock('../components/Utilities/Reddit_API');
jest.mock('react-redux');
import { create, act } from "react-test-renderer";
import React, { useState } from "react";
import Community from '../components/Community';
import { getPopular } from '../components/Utilities/Reddit_API';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {waitFor, screen } from '@testing-library/react'


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
        let component;
        act(() => {
            component = create(<BrowserRouter><Routes><Route path='/:communityName?' element={ <Community /> } /></Routes></BrowserRouter>);
        });
        const instance = component.root;
        // const p = instance.findAllByProps({className: 'popularName'});
        const p = instance.props;
        console.log(p.children.props.children);
        // await waitFor(() => {
        //     expect(p).toBeInDocument();
        //  })

        // p = // [{ type: 'ul',
//   props: { href: 'https://www.facebook.com/' },
//   children: [ 'first' ] },
// { type: 'ul',
//   props: { href: 'https://www.facebook.com/' },
//   children: [ 'second' ] }]
        //expect(p.map(el => el.props.children)).toBe(['first', 'second']);
        expect(await screen.findByText('first')).toBeInTheDocument();
    });
});
