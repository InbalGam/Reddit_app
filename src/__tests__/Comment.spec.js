jest.mock('../components/Utilities/utilities');
import { create, act } from "react-test-renderer";
import React, { useState } from "react";
import Comment from '../components/Comment';
import { timeAgo } from '../components/Utilities/utilities';



describe("Comment component", () => {
    test('It should present the comment author', () => {
        let component;
        act(() => {
            component = create(< Comment el={{
                author: "checkAuthor"}} />);
        });
        const instance = component.root;
        const p = instance.findByProps({className: 'commentAuthor'});
        expect(p.props.children).toBe('checkAuthor');
    });

    test('It should present the comment body', () => {
        let component;
        act(() => {
            component = create(< Comment el={{
                body: "checkBody"}} />);
        });
        const instance = component.root;
        const p = instance.findByProps({className: 'commentBody'});
        expect(p.props.children).toBe('checkBody');
    });

    test('It should present the comment time', () => {
        timeAgo.mockImplementation((x) => {return '3 days ago'});
        let component;
        act(() => {
            component = create(< Comment el={{
                timeCreated: new Date(1 * 1000)}} />);
        });
        const instance = component.root;
        const p = instance.findByProps({className: 'commentTime'});
        expect(p.props.children).toBe('3 days ago');
        expect(timeAgo).toHaveBeenCalledWith(new Date(1 * 1000));
        expect(timeAgo).toHaveReturnedWith('3 days ago');
    });
});
