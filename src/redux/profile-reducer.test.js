import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It`s my first post.', likesCount: 11},
        {id: 3, message: 'Blablas.', likesCount: 11},
        {id: 4, message: 'Draught post.', likesCount: 11}
    ]
};

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("IT-kamasutra.com")

    // 2. action
    let newState = profileReducer(state, action);
// 3. expectation
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("IT-kamasutra.com")

    // 2. action
    let newState = profileReducer(state, action);
// 3. expectation
    expect(newState.posts[4].message).toBe("IT-kamasutra.com");
});

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);
// 3. expectation
    expect(newState.posts.length).toBe(3);
});

test('after deleting length shouldnt be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(10006);

    // 2. action
    let newState = profileReducer(state, action);
// 3. expectation
    expect(newState.posts.length).toBe(4);
});
