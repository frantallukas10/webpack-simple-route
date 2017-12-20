import React from 'react';

import Bundle from '~/components/Bundle.jsx';

if (ONSERVER) {
    module.exports = require('./components/Complex.jsx');
} else {
    module.exports = (props) => (<Bundle load={ () => System.import('./components/Complex.jsx') } pass={ props }/>);
}
