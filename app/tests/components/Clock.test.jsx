var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });
});

describe('render', () => {
    it('should render clock to output', () => {
        var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
        var $el = $(ReactDOM.findDOMNode(clock));

        var expected = "01:02";
        var actual = $el.find(".clock-text").text();

        expect(actual).toBe(expected);
    })
});

describe('formatSeconds', () => {
    it('should format seconds', () => {
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 615;
        var expected = '10:15';

        var actualResult = clock.formatSeconds(seconds);

        expect(actualResult).toBe(expected);

    });

    it('should format seconds with 0 padding', () => {
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 61;
        var expected = '01:01';

        var actualResult = clock.formatSeconds(seconds);

        expect(actualResult).toBe(expected);

    });
})
