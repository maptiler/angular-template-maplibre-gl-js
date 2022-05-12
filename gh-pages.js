const ghpages = require('gh-pages');

ghpages.publish(
    'dist/my-ng-app', // path to public directory
    () => {
        console.log('Deploy Complete!')
    }
)