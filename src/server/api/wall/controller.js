import Wall from './model';

export const index = (req, res) =>
    Wall.find({}, (error, posts) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(posts);
    });

export const page = (req, res) => {
    const skip = parseInt(req.params.skip);
    const take = parseInt(req.params.take);
    const up = skip + take;
    Wall.find({
        "_id": {
            "$lte": up,
            "$gt": skip
        }
    }, (error, posts) => {
        if (error) {
        	console.log(error)
            return res.status(500).json(error);
        }
        res.status(200).json(posts);
    });
};
