import { create, act } from "react-test-renderer";
import React, { useState } from "react";
import Comment from '../components/Comment';

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
        let component;
        act(() => {
            component = create(< Comment el={{
                timeCreated: new Date(1 * 1000)}} />);
        });
        const instance = component.root;
        const p = instance.findByProps({className: 'commentTime'});
        expect(p.props.children).toBe('checkBody');
    });
});
