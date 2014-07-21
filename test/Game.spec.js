describe('Jasmine', function () {
    it('should run correctly', function () {
        expect(true).toBeTruthy();
        expect(false).toBeTruthy();
    });
});

describe('Game', function () {

    it('should be defined', function () {
        expect(Game).toBeDefined();
    });

    it('should let start a game', function () {
        var game = givenAGame();
        whenStart(game);
        expect(game.isStarted).toBeTruthy();
    });

    function givenAGame() {
        return new Game();
    }

    function whenStart(game) {
        game.start();
    }

});