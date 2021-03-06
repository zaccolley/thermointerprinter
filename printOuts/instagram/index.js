// instagram.js

module.exports = function(app){

    var moment = require('moment'), // time

        gm = require('gm'); // graphics

    app.get('/instagram', function (req, res){

        console.log('Printing instagram');

        var input = './public/images/instagram.jpg',
            output = '/images/processed/instagram--dithered.jpg';

        gm(input)
            .resize(384, 384)
            .monochrome()
            .orderedDither('All', '1x1')
            .write('./public' + output, function (err){
                if (err) throw err;

                console.log('Dither image');

                res.render(__dirname, {
                    title: 'Instagram',
                    time: moment().format('MMM D YYYY h:mm a'),

                    imagePath: output
                });

            });
    });

};
