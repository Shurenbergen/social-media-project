import React from 'react';
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe ("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="SAMURAI" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SAMURAI");
    });
    test("After creation span with status should be displayed", () => {
        const component = create(<ProfileStatus status="SAMURAI" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("After creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="SAMURAI" />);
        const root = component.root;

        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("After creation span should contains correct status", () => {
        const component = create(<ProfileStatus status="SAMURAI" />);
        const root = component.root;
        let span = root.findByType("span");
                expect(span.children[0]).toBe(" ");
        //why expect " " ? may be need expect "SAMURAI" ?
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="SAMURAI" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
           expect(input.props.value).toBe("SAMURAI");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="SAMURAI" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})