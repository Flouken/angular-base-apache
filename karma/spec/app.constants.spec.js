describe('configs', function() {
    it('should validate USER as 1', function() {
        var configs = {};

        angular.mock.module('app');

        angular.mock.inject(function(_configs_) {
            configs = _configs_;
        });
        expect(3).toEqual(configs.authorize.user_level.USER);
    });
});
