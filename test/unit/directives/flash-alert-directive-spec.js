describe('flash-alert-directive', function () {
    'use strict';

    beforeEach(module('angular-flash.service', 'angular-flash.flash-alert-directive'));


    it('should display all flash messages', inject(function ($rootScope, $compile, $timeout, flash) {

        var template = [
            '<div flash-alert active-class="in" class="alert fade" style="display: none;">',
            '<strong class="alert-heading">{{flash.type}}</strong>',
            '<span class="alert-message">{{flash.message}}</span>',
            '</div>'
        ];

        var element = angular.element(template.join('\n'));
        $compile(element)($rootScope);
        $rootScope.$digest();

        expect(element.find('.alert-heading').text()).toBe('');
        expect(element.find('.alert-message').text()).toBe('');
        expect(element.hasClass('alert-error')).toBe(false);
        expect(element.hasClass('in')).toBe(false);

        flash.error = ':error-message';
        $rootScope.$digest();

        expect(element.find('.alert-heading').text()).toBe('error');
        expect(element.find('.alert-message').text()).toBe(':error-message');
        expect(element.hasClass('alert-error')).toBe(true);
        expect(element.hasClass('in')).toBe(true);

        $timeout.flush();

        expect(element.find('.alert-heading').text()).toBe('');
        expect(element.find('.alert-message').text()).toBe('');
        expect(element.hasClass('alert-error')).toBe(false);
        expect(element.hasClass('in')).toBe(false);

        flash.success = ':success-message';
        $rootScope.$digest();


        expect(element.find('.alert-heading').text()).toBe('success');
        expect(element.find('.alert-message').text()).toBe(':success-message');
        expect(element.hasClass('alert-success')).toBe(true);
        expect(element.hasClass('in')).toBe(true);

        $timeout.flush();

        expect(element.find('.alert-heading').text()).toBe('');
        expect(element.find('.alert-message').text()).toBe('');
        expect(element.hasClass('alert-success')).toBe(false);
        expect(element.hasClass('in')).toBe(false);

    }));

    it('should display only error flash messages', inject(function ($rootScope, $compile, $timeout, flash) {

        var template = [
            '<div flash-alert="error" active-class="in" class="alert fade" style="display: none;">',
            '<strong class="alert-heading">{{flash.type}}</strong>',
            '<span class="alert-message">{{flash.message}}</span>',
            '</div>'
        ];

        var element = angular.element(template.join('\n'));
        $compile(element)($rootScope);
        $rootScope.$digest();

        expect(element.find('.alert-heading').text()).toBe('');
        expect(element.find('.alert-message').text()).toBe('');
        expect(element.hasClass('alert-error')).toBe(false);
        expect(element.hasClass('in')).toBe(false);

        flash.error = ':error-message';
        $rootScope.$digest();

        expect(element.find('.alert-heading').text()).toBe('error');
        expect(element.find('.alert-message').text()).toBe(':error-message');
        expect(element.hasClass('alert-error')).toBe(true);
        expect(element.hasClass('in')).toBe(true);

        $timeout.flush();

        expect(element.find('.alert-heading').text()).toBe('');
        expect(element.find('.alert-message').text()).toBe('');
        expect(element.hasClass('alert-error')).toBe(false);
        expect(element.hasClass('in')).toBe(false);

        flash.success = ':success-message';
        $rootScope.$digest();

        expect(element.find('.alert-heading').text()).toBe('');
        expect(element.find('.alert-message').text()).toBe('');
        expect(element.hasClass('alert-success')).toBe(false);
        expect(element.hasClass('in')).toBe(false);

    }));

});