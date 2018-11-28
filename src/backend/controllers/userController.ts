import { AxiosGithubClient } from '../../clients'

const fetchUser = async (req: any, res: any, next: any) => {

    const { username } = req.params;
    if (!username) {
        res.status(400)
            .json({
                data: null,
                error: `Missing parameter 'username'`
            });

        next();
    }

    AxiosGithubClient.get(`users/${username}`)
        .then((response) => {
            res.status(200)
                .json({
                    data: response.data,
                    error: null,
                });
        })
        .catch((err) => {
            if (err.response.status === 404) {
                res.status(404)
                    .json({
                        data: null,
                        error: 'User not found',
                    });
            } else {
                res.status(500)
                    .json({
                        data: null,
                        error: err.response,
                    });
            }
        });
}

const fetchUserRepos = async (req: any, res: any, next: any) => {

    const { username } = req.params;
    if (!username) {
        res.status(400)
            .json({
                data: null,
                error: `Missing parameter 'username'`
            });

        next();
    }

    AxiosGithubClient.get(`users/${username}/repos`)
        .then((response) => {
            res.status(200)
                .json({
                    data: response.data,
                    error: null,
                });
        })
        .catch((err) => {
            if (err.response.status === 404) {
                res.status(404)
                    .json({
                        data: null,
                        error: 'Not found',
                    });
            } else {
                res.status(500)
                    .json({
                        data: null,
                        error: err.response,
                    });
            }
        });
}

export default {
    fetchUser,
    fetchUserRepos,
}