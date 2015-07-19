import {
    graphql
}
from 'graphql';
import schecma from './schema';
export const index = (req, res) => {
    graphql(schema, req.body)
        .then((data) => res.send(JSON.stringify(data, null, 2)));
};
