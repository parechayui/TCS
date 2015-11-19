/*
describe('sorting the list of users', function() {
    it('number', function() {

        var sort = sorted(2);
        expect(sort).toEqual(2);
    });
});
    */

 describe('adding numbers test cases', function() {

         /*when both numbers are positive*/
        it('adds the number', function() {
            var val= sum(2,3);
            expect(val).toEqual(5);
        });

        /*When one number is negative*/
        it('adds the numbers when one is negative', function(){
            var val= sum(-2,3);
            expect(val).toEqual(1);
        });

        /*When both numbers are negative*/
        it('adds the number when both are negative', function(){
            var val= sum(2,-3);
            expect(val).toEqual(-5);
        });

    });

