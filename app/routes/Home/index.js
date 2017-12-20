import React from 'react';

import Bundle from '~/components/Bundle.jsx';

if (ONSERVER) {
    module.exports = require('./components/Home.jsx');
} else {
    module.exports = () => (<Bundle load={ () => System.import('./components/Home.jsx') }/>);
}
