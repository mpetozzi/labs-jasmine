describe(['First Describe', 'Second Describe'], function () {
    it('should run correctly', function () {
        expect(true).toBeTruthy();
    });
    describe('Third Describe', function () {
        it('should run correctly', function () {
            expect(true).toBeTruthy();
        });
    });
});