// schema.js
import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList
}
from 'graphql/type';

import NewsMongoose from './user.model';

/**
 * Simple version.
 * possible implementation
 * https://github.com/RisingStack/graffiti-mongoose/blob/master/src/projection.js
 * It doesn't work with fragments
 * @param  {array} fieldASTs
 * @return {array<String>}  projections
 */
function getProjection(fieldASTs) {
    return fieldASTs[0].selectionSet.selections.reduce((projections, selection) => {
        projections[selection.name.value] = 1;
        return projections;
    }, {});
}

const newType = new GraphQLObjectType({
    name: 'new',
    description: 'contains a feed of news',
    fields: () => ({
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLInt),
            description: 'Id feed'
        },
        title: {
            type: GraphQLString,
            description: 'Title of the feed'
        },
        text: {
            type: GraphQLString,
            description: 'feed text, (body)'
        },
        img: {
            type: GraphQLString,
            description: 'url of the image'
        }
    })
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            news: {
                type: new GraphQLList(newType),
                args: {
                    skip: {
                        name: 'skip',
                        type: GraphQLInt
                    },
                    take: {
                        name: 'take',
                        type: GraphQLInt
                    }
                },
                resolve: (user, args, info) => {
                    const projections = getProjection(info.fieldASTs);
                    const up = args.skip + args.take;
                    return NewsMongoose.find({
                        '_id': {
                            '$gt': args.skip,
                            '$lte': up
                        }
                    }, projections);
                }
            }
        }
    })
});

export default schema;
