var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    })
});

describe('handleSetCountdown', () => {
    it('should set state to \'started\' and count up', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.handleStatusChange('started');

        expect(timer.state.timerStatus).toBe('started');

        setTimeout(() => {
            expect(timer.state.count).toBe(2);
            done();
        },2001);
    });

    it("should not updated the counter when status is 'paused'", (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);

        timer.handleStatusChange('started');
        timer.handleStatusChange('paused');

        setTimeout(()=> {
            expect(timer.state.count).toBe(0);
            expect(timer.state.timerStatus).toBe('paused');
            done();
        },2001);
    });

    it("should stop and reset the counter", (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.handleStatusChange('started');

        setTimeout(()=> {
            timer.handleStatusChange('stopped')
            expect(timer.state.count).toBe(0);
            expect(timer.state.timerStatus).toBe('stopped');
            done();
        },1001);
    });

    
});
