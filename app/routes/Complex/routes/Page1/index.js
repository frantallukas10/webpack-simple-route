import React from 'react';

import Bundle from '~/components/Bundle.jsx';

if (ONSERVER) {
    module.exports = require('./components/Page1.jsx');
} else {
    module.exports= () => (<Bundle load={ () => System.import('./components/Page1.jsx') }/>);
}
