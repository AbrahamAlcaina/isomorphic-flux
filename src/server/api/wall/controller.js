import Wall from './model';

export const index = (req, res) =>
    Wall.find({},(error, posts) => {
        if (error) {
            return res.send(500, error);
        }
        res.status(200).json(posts);
    });
